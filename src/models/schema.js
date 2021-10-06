const mongoose = require('mongoose');
const validator = require('validator');
const { stringify } = require('querystring');
const { error } = require('console');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is already present]"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }    
        }
    }
})
const student = new mongoose.model("student",studentSchema)

module.exports = student