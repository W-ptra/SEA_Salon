const getConnection = require('./dbConnection');

async function createNewReservation(newReservation) {
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO reservation (name, phone_number, service, date_when, session_time) VALUES (?, ?, ?, ?, ?)';
        const [result] = await connection.execute(sql, [newReservation.name, newReservation.phone_number, newReservation.service, newReservation.date_when, newReservation.session_time]);
        console.log('Review created with ID:', result.insertId);
    } catch (err) {
        console.error('Error creating review:', err);
    } finally {
        await connection.end();
    }
}

async function getRevervation() {
    const connection = await getConnection();
    try {
        const sql = 'SELECT * FROM reservation';
        const [rows] = await connection.execute(sql);
        console.log('Reviews:', rows);
        return rows;
    } catch (err) {
        console.error('Error fetching review:', err);
    } finally {
        await connection.end();
    }
}

module.exports = {
    createNewReservation,
    getRevervation
};