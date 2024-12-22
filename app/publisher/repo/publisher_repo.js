import { SqlService } from '../../../services/mysql/mysql_functions.js';
const SqlServices = new SqlService();


class PublisherRepo{

    // Function to get single publisher by id
    getPublisherById = async (publisherId ) => {
        const query = 'SELECT * FROM tp_publishers WHERE tp_publisher_id  = ?';

        return SqlServices.getData(query, [publisherId])
            .then(results => {
                if (results.length > 0) {
                    return results;
                } else {
                    return "No publisher found with that id";
                }
            })
            .catch(err => {
                return "Error getting publisher by id: " + err;
            });
    }


    // Function to update a publisher
    async updatePublisher(publisherId, publisherData) {
        const query = 'UPDATE publishers SET ? WHERE id = ?';

        return SqlServices.updateData(query, [publisherData, publisherId])
            .then(results => {
                if (results > 0) {
                    return "Publisher updated successfully";
                } else {
                    return "No publisher found with that id";
                }
            })
            .catch(err => {
                return "Error updating publisher: " + err;
            });
    }


    
    async addPublisher(publisherData) {
        // Manually construct the query string
        const keys = Object.keys(publisherData).map(key => `${key} = ?`).join(', ');
        const values = Object.values(publisherData);
        const fullQuery = `INSERT INTO tp_publishers SET ${keys}`;
        try {
            return  await SqlServices.insertData(fullQuery,values);
        } catch (err) {
            return "Error adding publisher: " + err;
        }
    }
}

export  {PublisherRepo};