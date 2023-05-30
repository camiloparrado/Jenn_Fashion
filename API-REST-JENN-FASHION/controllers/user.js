//importar dependencias y módulos
const bcrypt = require("bcrypt");

//Importar modelos
const User = require("../models/user");

//Imprtar servicios
const jwt = require("../services/jwt");

//Acciones de prueba
const pruebaUser = (req, res)=>{
    return res.status(200).send({
        message: "Mensaje enviado desde el controlador: controllers/user.js",
        usuario: req.user
    });
};

const register = (req,res)=>{

    //recoger datos de la petición 
    let params = req.body;
    //comprobar que me llegan (+validación)
    if (!params.name || !params.email || !params.password) {
        return res.status(400).json({
            status:"Error",
            message: "Faltan datos por enviar !"
        });
    } 

    //Validacion avanzada 
    // try {
    //     validate(params);
    // } catch (error) {
    //     return res.status(400).json({
    //         status:"Error",
    //         message: "Validacion no superada"
    //     });
    // }

    //control de usuario duplicados
    User.find({email: params.email.toLowerCase()}).exec()
    .then(async(users)=>{
        if (users && users.length >=1) {
            return res.status(200).send({
                status: "Success",
                message: "El usuario ya existe"
            });
        }
        //cifrar la contraseña
        let pwd = await bcrypt.hash(params.password, 10);
        params.password= pwd;
        //Crear objeto de usuario
        let user_to_save = new User(params);
        //guardar usuario en la bd
        user_to_save.save()
        .then((userStored)=>{
            if (!userStored) {
                //devolver resultado
                return res.satatus(500).send({
                    status:"Error",
                    message:"Error al guardar el usuario"
                });
            }
            //devolver resultado
            return res.status(200).json({
                status:"Success",
                message: "Usuario registrado correctamente",
                user: userStored
            });
        })
        .catch((err)=>{
            if (err) {
                return res.satatus(500).send({
                    status:"Error",
                    message:"Error al guardar el usuario"
                });
            }
        });
        
    })
    .catch((err)=>{
        if (err) {
            return res.status(500).json({status:"Error", message: "Error en la consulta de usuarios"});
        }
    });
    
};

const login =(req, res)=>{
    
    //Recoger parametros del body
    let params = req.body;
    if (!params.email || !params.password) {
        return res.status(400).send({
            status: "Error",
            message:"Faltan datos por enviar"
        });
    }
    //Buscar en la bd si existe
    User.findOne({email: params.email})/*.select({"password":0})*/.exec()
    .then((user)=>{
        if (!user) {
            return res.status(404).send({
                status: "Error",
                message: "No existe el usuario"
            });
        }   
        //Comprobar su contraseña
        const pwd = bcrypt.compareSync(params.password, user.password);
        if (!pwd) {
            return res.status(404).send({
                status: "Error",
                message:" No te has identificado correctamente"
            });
        }
        //Conseguir Token
        const token = jwt.createToken(user);

        //Devolver datos del usuario
        return res.status(200).send({
            status: "Success",
            message: "Te has identificado correctamente",
            user:{
                _id: user._id,
                name: user.name,
                surname: user.surname
            },
            token
        });
    }).catch((err)=>{
        if (err) {
            return res.status(404).send({
                status: "Error",
                message: err + " No existe el usuario"
            });
        }
    });

};


//Exportar acciones 
module.exports = {
    pruebaUser,
    register,
    login
}