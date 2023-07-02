const validator = require("validator");

const validate = (parametros) =>{
    
    let validar_name = !validator.isEmpty(parametros.name) && 
                        validator.isLength(parametros.name,{min: 5, max:30});
    let validar_description = !validator.isEmpty(parametros.description);
    let validar_category = !validator.isEmpty(parametros.category);
    let validar_price = !validator.isEmpty(parametros.price);
    if(!validar_name){
        throw new Error ("Nombre invalido")
    }
    if(!validar_description){
        throw new Error ("la descripcion no puede estar vacia")
    }
    if(!validar_category){
        throw new Error ("la categoria no puede estar vacia")
    }
    if(!validar_price){
        throw new Error ("el precio no puede estar vacio")
    }
}

module.exports = {
    validate
}