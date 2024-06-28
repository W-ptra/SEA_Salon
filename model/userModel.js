const getConnection = require('./dbConnection');
const {createHash} = require("../helper/hashing")

async function createnewUser(newUser) {
    const connection = await getConnection();
    try {
        const hashedPassword = await createHash(newUser.password);
        const sql = 'INSERT INTO users(name, email,phone_number,password,role) VALUES (?, ?, ?,?,?)';
        const [result] = await connection.execute(sql, 
            [newUser.name, newUser.email, newUser.phone_number,hashedPassword,"customer"]);
        console.log('new user created with ID:', result.insertId);
    } catch (err) {
        console.error('Error creating new user:', err);
    } finally {
        await connection.end();
    }
}

async function getUserByEmail(email) {
    const connection = await getConnection();
    try {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await connection.execute(sql,[email]);
        console.log(rows);
        return rows;
    } catch (err) {
        console.error('Error fetching data:', err);
    } finally {
        await connection.end();
    }
}

module.exports = {
    createnewUser,
    getUserByEmail
};