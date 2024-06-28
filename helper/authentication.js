const {comparePassword} = require("./hashing");
const {getUserByEmail} = require("../model/userModel");

async function login(email,plainPassword){
    const user = await getUserByEmail(email);
   
    if(user[0] === undefined)
        return "user doesn't exist";

    const hashedPassword = user[0].password;
    const isMatch = await comparePassword(plainPassword,hashedPassword);

    if(!isMatch)
        return "Password incorrect";

    return isMatch;
}

module.exports = {login};