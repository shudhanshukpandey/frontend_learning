
const express= require("express");

const router=express.Router();          //works similar to blueprint

router.get("/" ,(req,res)=>{
    obj={
        status:true,
        message:"notes api working"    }
    res.json(obj);

})


router.get("/test" ,(req,res)=>{
    obj={
        status:true,
        message:"notes test api working"    }
    res.json(obj);

})

module.exports=router