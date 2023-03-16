//import express
const express = require('express')
//import cors
const cors = require('cors')
//importing dataService.js
const dataService=require('./dataService')
//create app using express
const app = express()
//implementing cors
app.use(cors({
    origin:'http://localhost:3000'
}))
//json parse
app.use(express.json())
//creating port
app.listen(8000,(req,res)=>{
    console.log("Connected to port 8000");
})
//API call to get all employee  details
app.get('/getall',(req,res)=>{
    dataService.getallEmployee().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to add new emploee
app.post('/addemployee',(req,res)=>{
    dataService.addEmployee(req.body.id,req.body.empName,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to delete employee
app.delete('/deleteemployee/:id',(req,res)=>{
    dataService.deleteEmp(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to get particular employee
app.get('/getemployee/:id',(req,res)=>{
    dataService.getEmployee(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//API call to update employee
app.post('/updateemployee',(req,res)=>{
    dataService.updateEmployee(req.body.id,req.body.empName,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})