const mongoose = require('mongoose')
// database Schema
const schema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: [true, "Name is required!"]
    },
    email:{
        type: String,
        require: true,
        unique: [true, "Email is required!"]
    },
    country:{
        type: String,
        require: true,
        unique: [true, "Country is required!"]
    }
})

module.exports = mongoose.model("schools", schema)