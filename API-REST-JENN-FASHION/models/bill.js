const {Schema, model} = require("mongoose");

const BillSchema = Schema({
    name:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    surname: {
        type: String,
        required: true
    },
    typeDocument: {
        type: String,
        required: true
    }, 
    document: {
        type: Number,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: "Colombia"
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }


})

module.exports = model("Bill", ProductSchema, "bills");