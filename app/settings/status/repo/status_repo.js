import {SqlService} from "../../../../services/mysql/mysql_functions.js"
const SqlServices = new SqlService();


class  StatusRepo{

    addStatus = async (statusData) => {
        // Manually construct the query string
        const keys = Object.keys(statusData).map(key => `${key} = ?`).join(', ');
        const values = Object.values(statusData);
        const fullQuery = `INSERT INTO tp_account_status SET ${keys}`;
        try {
            return  await SqlServices.insertData(fullQuery,values);
        } catch (err) {
            return "Error adding status: " + err;
        }
    }



    getStatusByFilter=async (filters) => {
        // Check if no filters are provided
        let query = 'SELECT * FROM tp_account_status WHERE 1=1';
        let params = [];

        if (filters.status) {
            query += ' AND status = ?';
            params.push(filters.status);
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
                return "No status found for the given filters";
            }
        } catch (err) {
            return "Error getting status by filters: " + err;
        }



    }


    updateStatus = async (statusData) => {
        // Manually construct the query string
        const keys = Object.keys(statusData).map(key => `${key} = ?`).join(', ');
        const values = Object.values(statusData);
        const fullQuery = `UPDATE tp_account_status SET ${keys} WHERE tp_status_id = `+ statusData.tp_status_id;
        try {
            return  await SqlServices.updateData(fullQuery,values);
        } catch (err) {
            return "Error updating status: " + err;
        }
    }




}

export {StatusRepo}