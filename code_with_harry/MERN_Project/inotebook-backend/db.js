const mongoose =require("mongoose");   //initialising mongoose object

const mongoURI="mongodb+srv://shudhanshu:Shu2009@cluster0.wgteawz.mongodb.net/test"  //defining DB url

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to MongoDB")  // .cooect takes two input (connection string:mandatory,callbackurl:optional)
    })
}

module.exports=connectToMongo;