//importar dependencias
const fs = require("fs");
const { validate } = require("../helper/validate");
const path = require("path");

//importar modelos
const Product = require("../models/newColection");
const multer = require("multer");
const product = require("../models/newColection");

const save = (req, res) => {
    //recoger parametros por post a guardar
    let params = req.body;

    //validar datos
    try {
        validate(params)
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "faltan datos por enviar"
        });
    }

    //crear objeto a guardar

    let articulo = new Product(params);
    console.log(req.user);
    articulo.PublicationFor = req.user._id;

    //Guardar el articulo en la base de datos
    articulo.save().then((articuloguardado) => {

        if (!articuloguardado) {
            return res.status(400).json({
                status: "error",
                mensaje: "no se a guardado el articulo"
            });
        }
        //devolver resultados
        return res.status(200).json({
            mensaje: "sucess",
            parametros: articuloguardado
        })

    })
        .catch((error) => {
            return res.status(500).json({
                status: "error",
                mensaje: "ha ocurrido un error"
            });

        });
}

const upload = (req, res) => {
    //configurar multer en routes/product.js

    //recoger el fichero de la petición
    if (!req.file && !req.files) {
        return res.status(400).send({
            status: "Error",
            message: "No se ha subido ningún archivo"
        });
    }

    //nombre del fichero
    let file1 = req.files[0]; // Primer archivo subido
    let file2 = req.files[1]; // Segundo archivo subido (si existe)

    //comprobar la extensión, solo imagenes, si es valida borrar el fichero
    // Comprobar la extensión de los archivos, solo imágenes
    const allowedExtensions = ["png", "jpg", "jpeg", "gif"];

    // Verificar la extensión del primer archivo
    let file1Ext = file1.originalname.split(".").pop();
    if (!allowedExtensions.includes(file1Ext)) {
        fs.unlink(file1.path, (err) => {
            return res.status(400).send({
                status: "Error",
                message: "La extensión del archivo 1 no es válida"
            });
        });
    }
    // Si hay un segundo archivo, verificar su extensión
    if (file2) {
        let file2Ext = file2.originalname.split(".").pop();
        if (!allowedExtensions.includes(file2Ext)) {
            fs.unlink(file2.path, (err) => {
                return res.status(400).send({
                    status: "Error",
                    message: "La extensión del archivo 2 no es válida"
                });
            });
        }
    }
    // Sacar el ID del producto
    let id = req.params.id;

    console.log(file2.filename);

    // Buscar el producto y asignarle el nombre de las imágenes y actualizarlo

        Product.findOneAndUpdate({ _id: id }, { $set: { image1: file1.filename, image2: file2.filename } }, { new: true })
            .then((articuloActualizado) => {

                return res.status(200).json({
                    status: "success",
                    articulo: articuloActualizado,
                    fichero: req.file
                })
            })
            .catch((error) => {
                return res.status(500).json({
                    status: "error",
                    mensaje: "no se pudo actualizar"
                });
            });
}

const remove = (req, res) => {
    let id = req.params.id;

    Product.findOneAndDelete({ _id: id })
        .then((productBorrado) => {
            if (!productBorrado) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "no se han encontrado el articulo"
                });
            }
            return res.status(200).json({
                status: "success",
                articulo: productBorrado,
                mensaje: "Se elimino"
            })
        })
        .catch((error) => {
            return res.status(500).json({
                status: "error",
                mensaje: "no se pudo eliminar"
            });
        });
}

const update = (req, res) => {
    //recoger id a editar
    let id = req.params.id;
    //recoger datos del body
    let params = req.body
    //validar datos
    try {
        validate(params)
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "faltan datos por enviar"
        });
    }
    //buscar y actualizar
    Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        .then((productUpdated) => {

            return res.status(200).json({
                status: "success",
                articulo: productUpdated
            })
        })
        .catch((error) => {
            return res.status(500).json({
                status: "error",
                mensaje: "no se pudo actualizar"
            });
        });
}

const getProducts = (req, res) => {

    let id = req.params.id;

    Product.find()
        .then((products) => {

            return res.status(200).json({
                status: "success",
                articulos: products
            })
        })
        .catch((error) => {
            return res.status(500).json({
                status: "error",
                mensaje: "no se pudo encontrar articulos"
            });
        });
}

const multimedia = (req, res) => {
    //sacar parametros de la url
    const file = req.params.file;

    //montar el path donde esta el archivo
    const pathFile = './uploads/products/' + file;

    //comprobar si existe el fichero
    fs.promises.stat(pathFile)
    .then((exists) => {
      if (!exists) {
        return res.status(404).send({
          status: "error",
          message: "La imagen no existe",
        });
      }
      return res.sendFile(path.resolve(pathFile));
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        message: "Error al obtener la imagen",
        error: error,
      });
    });//stats es un objeto con los datos del fichero  
}

module.exports = {
    save,
    upload,
    remove,
    getProducts,
    update,
    multimedia
}