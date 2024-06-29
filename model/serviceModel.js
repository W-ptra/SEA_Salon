const getConnection = require('./dbConnection');

async function createNewService(newService) {
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO service (name, session_duration ) VALUES (?, ?)';
        const [result] = await connection.execute(sql, [newService.name, newService.duration]);
        console.log('Service created with ID:', result.insertId);
    } catch (err) {
        console.error('Error creating review:', err);
    } finally {
        await connection.end();
    }
}

async function getService() {
    const connection = await getConnection();
    try {
        const sql = 'SELECT * FROM service';
        const [rows] = await connection.execute(sql);
        //console.log('Reviews:', rows);
        return rows;
    } catch (err) {
        console.error('Error fetching service:', err);
    } finally {
        await connection.end();
    }
}

module.exports = {
    createNewService,
    getService
};