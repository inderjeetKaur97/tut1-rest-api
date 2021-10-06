const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 8000
const conn = require("./db/conn")
const student= require("./models/schema")
app.use(express.json())
app.use(express.urlencoded())

// app.post("/student",(req,res)=>{
//     // res.send("hello frm the other side")
//     const user = new student(req.body)
//     user.save().then(()=>{
//         res.send(user)
//     }).catch((e)=>{
//         res.send(e)

//     })
// })
app.post("/student",async (req,res)=>{
    try {
    const user = new student(req.body)
        const createUser = await user.save()
        res.status(200).send(createUser)
    } catch (error) {
        res.status(400).send(error)
    }
})
app.get("/student",async (req,res)=>{
    try {
    const getStudent = await student.find()
        res.status(201).send(getStudent)
    } catch (error) {
        res.status(404).send(error)
    }
})
app.get("/student/:id",async (req,res)=>{
    try {
        const _id = req.params.id 
        const studentId = await student.findById(_id)
        res.status(200).send(studentId)
    } catch (error) {
        res.status(404).send(error)
    }
})
app.get("/student/?name",async (req,res)=>{
    try {
        const _name = req.params.name 
        console.log(_name)
        const studentId = await student.find(_name)
        res.status(200).send(studentId)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})