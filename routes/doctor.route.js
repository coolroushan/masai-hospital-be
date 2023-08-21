const express=require('express')
const { DoctorModel } = require('../model/doctor.model')


const doctorRouter=express.Router()

doctorRouter.get("/",async(req,res)=>{
    try {
        const doctor = await DoctorModel.find()
        res.status(200).json({doctor})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


doctorRouter.post("/appointments",async(req,res)=>{
    try {
        const doctor=new DoctorModel(req.body)
        await doctor.save()
        res.status(200).json({msg:"Appintments done", doctor: req.body})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

doctorRouter.patch("/edit/:doctorID",async(req,res)=>{
    const {doctorID}=req.params
    const userDocID=req.body.userID
    try {
        const doctor=await DoctorModel.findOne({_id:doctorID})
        const userDoctorID=doctor.userID
        if(userDocID===userDoctorID){
            await DoctorModel.findByIdAndUpdate({_id:doctorID},req.body)
            res.status(200).json({msg: "appointment has been updated"})
        }
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

doctorRouter.delete("/delete/:doctorID",async(req,res)=>{
    const {doctorID}=req.params
    const userDocID=req.body.userID
    try {
        const doctor=await DoctorModel.findOne({_id:doctorID})
        const userDoctorID=doctor.userID
        if(userDocID===userDoctorID){
            await DoctorModel.findByIdAndDelete({_id:doctorID},req.body)
            res.status(200).json({msg: "appointment has been updated"})
        }
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})



module.exports={
    doctorRouter
}