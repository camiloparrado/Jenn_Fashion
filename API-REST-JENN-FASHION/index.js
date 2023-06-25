//importar dependencias 
const {connection} = require("./data-base/connection");
const express = require("express");
const cors = require("cors");
//Mensaje de bienvenida
console.log("API NODE para RED SOCIAL arrancada !!");
//Conexion a db
connection();
//Crear servidor de node
const app = express();
const puerto = 3900;
//configurar cors
app.use(cors());
//convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Cargar las rutas
const UserRoutes = require("./routes/user");
const ProductRoutes = require("./routes/product");

app.use("/api/user",UserRoutes);
app.use("/api/product",ProductRoutes);

//Poner el servidor a escuchar peticiones http
app.listen(puerto, ()=>{
    console.log("Servidor de node corriendo en el puerto:", puerto);
})