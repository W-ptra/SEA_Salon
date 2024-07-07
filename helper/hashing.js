const {hash,compare} = require("bcrypt");
const saltround = 10;

async function createHash(plainPassword){

    const hashedPassword = await hash(plainPassword,saltround);
    //console.log(hashedPassword);
    return hashedPassword;
}

async function comparePassword(plainPassword,hashedPassword){
    const isMatch = await compare(plainPassword,hashedPassword);
    //console.log(isMatch);
    return isMatch;
}

module.exports = {
    createHash,
    comparePassword
};