const validator = require("validator");

const validate = (parametros) =>{
    
    let validar_name = !validator.isEmpty(parametros.name) && 
                        validator.isLength(parametros.name,{min: 5, max:30});
    let validar_description = !validator.isEmpty(parametros.description);
    let validar_category = !validator.isEmpty(parametros.category);
    let validar_price = !validator.isEmpty(parametros.price);
    if(!validar_name || !validar_description || !validar_price|| !validar_category){
        throw new Error ("No se ha validado informacion")
    }
}

module.exports = {
    validate
}