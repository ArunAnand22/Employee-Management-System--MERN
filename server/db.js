//import mongoose
const mongoose = require('mongoose')
//connect mongodb
mongoose.connect('mongodb://127.0.0.1:27017/ems_db').then(()=>{
    console.log("Connected to mongodb");
}).catch("Connection error in mongodb");
///create model for db
const Employee = mongoose.model('Employee',{
    //schema
    id:Number,
    empName:String,
    age:Number,
    designation:String,
    salary:Number
})

//export model
module.exports={
    Employee
}