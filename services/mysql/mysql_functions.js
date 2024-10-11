import dbConnection from '../../utils/dbPool.js';

// Function to select data
export const selectData = async (query, params) => {
    let connection;
    try {
        connection = await dbConnection.getConnection();
        const [rows] = await connection.execute(query, params);
        return rows;
    } catch (error) {
        console.error('Error selecting data:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

// Function to insert data
export const insertData = async (query, params) => {
    let connection;
    try {
        connection = await dbConnection.getConnection();
        const [result] = await connection.execute(query, params);
        return result.insertId;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

// Function to update data
export const updateData = async (query, params) => {
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
};

// Function to delete data
export const deleteData = async (query, params) => {
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
};


// Function to insert bulk data
export const insertBulk = async (query, paramsArray) => {
    let connection;
    try {
        connection = await dbConnection.getConnection();
        await connection.beginTransaction();
        const results = [];
        for (const params of paramsArray) {
            const [result] = await connection.execute(query, params);
            results.push(result.insertId);
        }
        await connection.commit();
        return results;
    } catch (error) {
        if (connection) await connection.rollback();
        console.error('Error inserting bulk data:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
};