const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    }
    },{
    timestamps:true
})

const User = mongoose.model("User",userSchema)
module.exports = user;