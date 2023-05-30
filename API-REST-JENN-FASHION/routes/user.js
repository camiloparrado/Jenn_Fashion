const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const check = require("../middleware/auth");

//Definir rutas
router.get("/prueba-user", check.auth ,UserController.pruebaUser);
router.post("/register",UserController.register);
router.post("/login",UserController.login);
//Exportar la ruta 
module.exports = router;