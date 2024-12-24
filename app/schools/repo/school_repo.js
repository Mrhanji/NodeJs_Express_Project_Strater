import { SqlService } from '../../../services/mysql/mysql_functions.js';
const SqlServices = new SqlService();

class  SchoolRepo{


    addSchool = async (schoolData) => {
        // Manually construct the query string
        const keys = Object.keys(schoolData).map(key => `${key} = ?`).join(', ');
        const values = Object.values(schoolData);
        const fullQuery = `INSERT INTO tp_schools SET ${keys}`;
        try {
            return  await SqlServices.insertData(fullQuery,values);
        } catch (err) {
            return "Error adding book: " + err;
        }
    }




    /// Schools Table
    ///INSERT INTO `tp_schools` (`tp_school_id`, `tp_school_name`, `tp_school_address`, `primary_user`, `school_status`, `school_email`, `school_password`, `createdBy`, `created_at`, `update_at`, `school_type`, `school_contact_number`, `school_edu_medium`) VALUES ('', '', '', '', '', '', '', '', current_timestamp(), current_timestamp(), '', '', '')


    getSchoolByFilter=async (filters) => {

        let query = 'SELECT * FROM tp_schools WHERE 1=1';
        const params = [];

        // Filter by school_name (partial match)
        if (filters.school_name) {
            query += ' AND tp_school_name LIKE ?';
            params.push(`%${filters.school_name}%`);
        }

        // Filter by school_address (partial match)
        if (filters.school_address) {
            query += ' AND tp_school_address LIKE ?';
            params.push(`%${filters.school_address}%`);
        }

        // Filter by school_type (exact match)
        if (filters.school_type) {
            query += ' AND school_type = ?';
            params.push(filters.school_type);
        }

        // Filter by school_edu_medium (exact match)
        if (filters.school_edu_medium) {
            query += ' AND school_edu_medium = ?';
            params.push(filters.school_edu_medium);
        }

        // Sorting (if provided)
        if (filters.sortBy) {
            query += ` ORDER BY ${filters.sortBy} ${filters.order || 'ASC'}`;
        }

        // Pagination (limit and offset)
        if (filters.limit && filters.offset) {
            query += ' LIMIT ? OFFSET ?';
            params.push(filters.limit, filters.offset);
        }



        // Execute the query

        try {
            const results = await SqlServices.getData(query, params);
            if (results.length > 0) {
                return results;
            } else {
                return "No schools found for the given filters";
            }
        } catch (err) {
            return "Error getting schools by filters: " + err;
        }

    }


}

export  {SchoolRepo};