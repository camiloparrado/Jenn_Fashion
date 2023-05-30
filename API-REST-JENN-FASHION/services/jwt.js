//Importar dependencias 
const jwt = require("jwt-simple");
const moment = require("moment");
//crear funcion para generar tokens
const secret = "Clave_secreta_del_cursO0_sf";
//devolver jwt token codificado
const createToken = (user)=>{
    const payload = {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        imagen:user.imagen,
        iat: moment().unix(),
        exp:moment().add(30,"days").unix()
    }
    //Devolver jwt token codificado
    return jwt.encode(payload, secret);
}
module.exports = {
    secret,
    createToken
}