const mongoose=require('mongoose')

const doctorSchema=mongoose.Schema({
    name: String,
    image: String,
    specialization: String,
    experience: String,
    location: String,
    date: String,
    slot: Number,
    fee: Number,
    userID: String
    
},{
    versionKey:false
})

const DoctorModel=mongoose.model("doctor", doctorSchema)

module.exports={
    DoctorModel
}