function validateField(req, res, next) {
    const field = req.body;
    
    for (key in field) {
        if (field[key] === "" || field[key] === undefined || field[key] === null || field[key].length === 0) {
            return res.status(400).json({ message: "Missing field or Input is empty" });
        }
    }
    next();
}

module.exports = validateField