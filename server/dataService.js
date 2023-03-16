//import db
const db=require('./db')
//get all employee
const getallEmployee=()=>{
    return db.Employee.find().then(
        (data)=>{
            if(data){
                return{
                    status:true,
                    statusCode:200,
                    result:data
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Data not found"
                }
            }
        }
    )
}
//add new employee
const addEmployee=(id,empName,age,designation,salary)=>{
return db.Employee.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:false,
                statusCode:401,
                message:"Employee already exists"
            }
        }else{
            const newEmployee=new db.Employee({
                id,
                empName,
                age,
                designation,
                salary
            })
            newEmployee.save()
            return{
                status:true,
                statusCode:200,
                message:"Employee added successfully"
            }
        }
    }
)
}
//delete employee
const deleteEmp=(id)=>{
    return db.Employee.findByIdAndDelete({_id:id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Employee deleted successfully"
                }
            }else{
                return{
                    status:false,
                    statusCode:404,
                    message:"Employee not found"
                }
            }
        }
    )
}
//get particular employee
const getEmployee=(id)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    employee:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Not found"
                }
            }
        }
    )
}
//Update employee
const updateEmployee=(id,empName,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                result.id=id,
                result.empName=empName,
                result.age=age,
                result.designation=designation,
                result.salary=salary
                result.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"Data updated successfully"
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Updation failed"
                }
            }
        }
    )
}
//export
module.exports={
    getallEmployee,
    addEmployee,
    deleteEmp,
    updateEmployee,
    getEmployee
}