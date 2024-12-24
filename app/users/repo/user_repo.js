import { SqlService } from '../../../services/mysql/mysql_functions.js';
const SqlServices = new SqlService();

class  UserRepo{

    addUser = async (userData) => {
        // Manually construct the query string
        const keys = Object.keys(userData).map(key => `${key} = ?`).join(', ');
        const values = Object.values(userData);
        const fullQuery = `INSERT INTO tp_users SET ${keys}`;
        try {
            return  await SqlServices.insertData(fullQuery,values);
        } catch (err) {
            return "Error adding user: " + err;
        }
    }

}
export  { UserRepo };