const express = require("express");
const multer = require("multer");

const router = express.Router();
const newColectionController = require("../controllers/newColection");
const check = require("../middleware/auth");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/products");
    },

    filename: function(req, file, cb){
        const fileName = "articulo" + Date.now() + file.originalname;
        cb(null, fileName);
    }
});

const upload = multer({
    storage: storage,
    limits: { files: 2 } // Permite subir hasta 2 archivos en total
  }).any();

//Definir rutas
router.post("/save",check.auth,newColectionController.save);//guardar articulo en la base de datos
router.post("/upload/:id",[check.auth,upload],newColectionController.upload); //subir imagenes a la id del producto
router.delete("/remove/:id",check.auth,newColectionController.remove); //remover articulo de la base de datos del id que se envia
router.put("/update/:id",check.auth,newColectionController.update); //actualizar articulo de la base de datos del id que se envia
router.get("/getProducts/:id",newColectionController.getProducts); //obtener articulos de la base de datos del id que se envia
router.get("/multimedia/:file",newColectionController.multimedia); //obtener imagenes de la base de datos, por la que se pregunte

//Exportar la ruta 
module.exports = router;