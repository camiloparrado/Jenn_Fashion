const {Schema, model} = require("mongoose");

const ProductSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image1:{
        type: String,
        default: "default1.png"
    },
    image2:{
        type: String,
        default: "default2.png"
    },
    offer:{
        type: Boolean,
        default: false
    },
    sizeS:{
        type: Number,
        default: 0    
    },
    sizeM:{
        type: Number,
        default: 0     
    },
    sizeL:{
        type: Number,
        default: 0     
    },
    sizeXL:{
        type: Number,
        default: 0    
    },
    sizeUnique:{
        type: Number,
        default: 0     
    },
    PublicationFor: {
        type: Schema.ObjectId,
        ref: "User"
    }
})

module.exports = model("Product", ProductSchema, "products");