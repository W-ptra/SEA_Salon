const getConnection = require('./dbConnection');

async function createNewReview(newReview) {
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO review (name, review, star) VALUES (?, ?, ?)';
        const [result] = await connection.execute(sql, [newReview.name, newReview.review, newReview.star]);
        console.log('Review created with ID:', result.insertId);
    } catch (err) {
        console.error('Error creating review:', err);
    } finally {
        await connection.end();
    }
}

async function getReview() {
    const connection = await getConnection();
    try {
        const sql = 'SELECT * FROM review';
        const [rows] = await connection.execute(sql);
        //console.log('Reviews:', rows);
        return rows;
    } catch (err) {
        console.error('Error fetching review:', err);
    } finally {
        await connection.end();
    }
}

module.exports = {
    createNewReview,
    getReview
};