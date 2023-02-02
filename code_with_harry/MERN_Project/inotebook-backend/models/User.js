const mongoose=require("mongoose")              //creating user schema
const {Schema}=mongoose


const UserSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type : Date,
        default: Date.now   //dont use now(), it will call the function if '()' used
    },

});

module.exports = mongoose.model("user",UserSchema);