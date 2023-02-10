
const express= require("express");

const User=require("../models/User");

const router=express.Router();     //works similar to blueprint


const { body, validationResult } = require('express-validator');      //for validation (marshmellow)




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

router.get("/test" ,(req,res)=>{            // test api
    obj={
        status:true,
        message:"auth test api working"    }
    res.json(obj);

})

//create a new user
router.post("/sign_up",(req,res)=>{           //signup api
    let user_data=req.body;
    const user=User(user_data);
    user.save()
    console.log("user created")
    res.json({
        "status":true,
        "message":"user created"
    })
})

router.post("/sign_up_validate",                    //validation api
[
    body('name',"enter a valid name").isLength({min:5}),      // first parameter is key second is message in case invalid
    body('password').isLength({min:5}),
    body('email').isEmail(),
]

,(req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json({
            errors:errors.array()
        })
    }

    User.create(
        {
            name:req.body.name,
            password:req.body.password,
            email:req.body.email
        }
    ).then(user=>res.json(user)).catch(err=>{
        
        console.log(err)
        res.json({
            "error":"enter proper key",
            "message":err.message
        })
    })
})

module.exports=router