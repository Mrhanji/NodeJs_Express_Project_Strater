import dbConnection from '../../utils/dbPool.js';

class SqlService {
    async getData(query, params) {
        let connection;
        try {
            connection = await dbConnection.getConnection();
            const [rows] = await connection.execute(query, params);
            return rows;
        } catch (error) {
            console.error('Error getting data:', error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }

    async insertData(query, params) {
        let connection;
        try {
            connection = await dbConnection.getConnection();
        const [result] = await connection.query(query, params);
        
            return result.insertId;
        } catch (error) {
            console.error('Error inserting data:', error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }

    async updateData(query, params) {
        let connection;
        try {
            connection = await dbConnection.getConnection();
            const [result] = await connection.execute(query, params);
            return result.affectedRows;
        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }

    async deleteData(query, params) {
        let connection;
        try {
            connection = await dbConnection.getConnection();
            const [result] = await connection.execute(query, params);
            return result.affectedRows;
        } catch (error) {
            console.error('Error deleting data:', error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }

    async insertBulkData(query, paramsArray) {
        let connection;
        try {
            connection = await dbConnection.getConnection();
            const [result] = await connection.query(query, [paramsArray]);
            return result.affectedRows;
        } catch (error) {
            console.error('Error inserting bulk data:', error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }

    async updateBulkData(query, paramsArray) {
        let connection;
        try {
            connection = await dbConnection.getConnection();
            const [result] = await connection.query(query, [paramsArray]);
            return result.affectedRows;
        } catch (error) {
            console.error('Error updating bulk data:', error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }
}

export { SqlService };