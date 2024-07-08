function logger(req,res,next){
    const body = req.body;
    let message = `${req.method} | PATH: ${req.path} | BODY: `;

    for (key in body) {
        message += `"${body[key]}":${typeof(body[key])} `
    }
    console.log(message)
    next();
}

module.exports = logger