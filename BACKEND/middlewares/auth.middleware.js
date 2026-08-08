const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const UserModel = require("../models/User")
const DoctorModel = require("../models/Doctor")
const HospitalModel = require("../models/Hospital")

const checkAuth = async (req,res)=>{
    try{
        const token = req.token;
        if(!token) return res.status(404).json({message:"Something went wrong",auth:false});
        const userData = jwt.verify(token,PROCESS.ENV.JWT_SECRET)
if(userData){
    if(userData.type==="USER"){

    }else  if(userData.type==="DOCTOR"){
        
    }else  if(userData.type==="HOSPITAL"){
        
    }else{
        return res.status(404).json({message:"Not verrified"})
    }

}
    }catch(err){
        console.log(err.message)
        return res.status(404).json({message:"Something went wrong."})

    }
}