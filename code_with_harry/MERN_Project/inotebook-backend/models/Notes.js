const mongoose=require("mongoose")              //creating user schema

const NoteSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type : Date,
        default: Date.now   //dont use now(), it will call the function if '()' used
    },

});

module.exports = mongoose.model("notes",NoteSchema);