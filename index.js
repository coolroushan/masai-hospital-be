const express=require('express')
const cors=require('cors')
const { connect } = require('./db')
const { userRouter } = require('./routes/user.route')
const { doctorRouter } = require('./routes/doctor.route')

require('dotenv').config()

const app=express()
app.use(cors())
app.use(express.json())

app.use("/",userRouter)
app.use("/doctor",doctorRouter)

app.listen(process.env.port,async()=>{
    try{
        await connect
        console.log("DB is connected")
        console.log(`server is running at ${process.env.port}`)
    }catch(err){
        console.log(err.message)
    }
    
})