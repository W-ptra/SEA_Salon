const getConnection = require('./dbConnection');

async function createNewBranch(newBranch) {
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO branch (name, location, open_time, close_time) VALUES (?, ?, ?, ?)';
        const [result] = await connection.execute(sql, [newBranch.name, newBranch.location, newBranch.open_time,newBranch.close_time]);
        console.log('Branch created with ID:', result.insertId);
    } catch (err) {
        console.error('Error creating branch:', err);
    } finally {
        await connection.end();
    }
}

async function getBranch() {
    const connection = await getConnection();
    try {
        const sql = 'SELECT * FROM branch';
        const [rows] = await connection.execute(sql);
        //console.log('Reviews:', rows);
        return rows;
    } catch (err) {
        console.error('Error fetching branch:', err);
    } finally {
        await connection.end();
    }
}

module.exports = {
    createNewBranch,
    getBranch
};