const express=require("express")
const router=express.Router()
const User=require('../models/UserSchema')


router.get("/getusers",async(req,res)=>{

    try {
        const users=await User.find()
        res.status(200).json({msg:"get all users" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})


router.post("/adduser",async(req,res)=>{

    try {
        const useradded=await User.create(req.body)
        res.status(201).json({msg:"added successfully" ,useradded})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})


router.put("/userupdated/:id",async(req,res)=>{

    try {
        const useradded=await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({msg:"updated successfully" ,useradded})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})


router.delete("/deleteuser/:id",async(req,res)=>{

    try {
        const userdel=await User.findByIdAndDelete(req.params.id,req.body)
        res.status(200).json({msg:"deleted successfully " ,userdel})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
module.exports=router