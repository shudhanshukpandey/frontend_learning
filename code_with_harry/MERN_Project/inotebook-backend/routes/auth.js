
const express= require("express");

const User=require("../models/User");

const router=express.Router();     //works similar to blueprint




router.get("/get_req" ,(req,res)=>{            //req is for request body (payload), res is for response(jsonify)
   console.log(req.body);
   res.json({
    message:"see console"
   })

})

router.get("/" ,(req,res)=>{            //req is for request body (payload), res is for response(jsonify)
    obj={
        status:true,
        message:"auth api working"    }
    res.json(obj);

})

router.get("/test" ,(req,res)=>{
    obj={
        status:true,
        message:"auth test api working"    }
    res.json(obj);

})

//create a new user
router.post("/sign_up",(req,res)=>{
    user_data=req.body;
    const user=User(user_data);
    user.save()
    console.log("user created")
    res.json({
        "status":true,
        "message":"user created"
    })
})

module.exports=router