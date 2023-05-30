//importar modulos
const jwt = require("jwt-simple");
const moment = require("moment");
//importar clave secreta
const libjwt = require("../services/jwt");
const secret = libjwt.secret;
//Funcion de autenticación (middleware)
exports.auth = (req, res, next)=>{
    //comprobar si llega la cabecera de auth
    if (!req.headers.authorization) {
        return res.status(403).send({
            status:"Error",
            message: "La peticion no tiene la cabecera de autenticacion"
        });
    }
    //Limpiar el token
    let token = req.headers.authorization.replace(/[' "]+/g, '');
    //Decodificar el token
    try {
        let payload = jwt.decode(token, secret);
        //comprobar expiracion del token
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                status: "Error",
                message: "Token expirado"
            }) 
        }
        //Agregar datos de usuario a request
        req.user = payload;

    } catch (error) {
        return res.status(404).send({
            status: "Error",
            message: "Token invalido"
        });
    }
   
    //pasar a ejecucion de accion
    next();
}
