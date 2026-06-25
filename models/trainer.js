const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    id:{type:String, required:true},
    name:{type:String, required:true},
    phone:{type:String, required:true},
    age:{type:Number, required:true},
    sex:{type:String, required:true},
    experience:{type:Number, required:true},
    specialization:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
});

module.exports = mongoose.model('trainer', trainerSchema);