import { SqlService } from '../../../services/mysql/mysql_functions.js';
const SqlServices = new SqlService();


class PublisherRepo{

    // Function to get single publisher by id
    getPublisherById = async (publisherId ) => {
        const query = 'SELECT * FROM publishers WHERE id = ?';

        return SqlServices.selectData(query, [publisherId])
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
        const query = 'INSERT INTO publishers SET ?';

        try {
            const results = await SqlServices.getData(query,publisherData);
            return results;
        } catch (err) {
            return "Error adding publisher: " + err;
        }
    }
}

export  {PublisherRepo};