import React from 'react'
import './Home.css'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { FaTrash,FaUserEdit,FaUserPlus } from "react-icons/fa";


function Home() {

  const [allEmployees,setAllEmployees] = useState([])

  const fetchedData=async()=>{
    const result = await axios.get('http://localhost:8000/getall')
    setAllEmployees(result.data.result)
  }
  console.log(allEmployees);

  useEffect(()=>{
    fetchedData()
  },[])

    const history = useNavigate()

    //Function to edit item
    const handleEdit=(id,empName,age,designation,salary)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("Name",empName)
        localStorage.setItem("Age",age)
        localStorage.setItem("Designation",designation)
        localStorage.setItem("Salary",salary)
    }
    //Function to delete item
    const handleDelete=async(id)=>{
      const result=await axios.delete(`http://localhost:8000/deleteemployee/${id}`)
      alert(result.data.message)
     fetchedData()
     history('/')
    }

  return (
    <>
        <p className='mt-5'>Employee management system is a practise that helps a manager improve productivity
            and satisfaction in a working enviornment thus listing out the employee details for
            a hassle free data management in the future.
            Employee management system is a practise that helps a manager improve productivity
            and satisfaction in a working enviornment thus listing out the employee details for
            a hassle free data management in the future.
        </p>
        <Link to={'/add'}>
        <Button className='addButton' variant='info'>Add <FaUserPlus/></Button>
        </Link>
        <h3 className='my-5'>List of Employees</h3>
        <Table striped bordered hover variant="warning">
      <thead>
        <tr>
          <th>Id</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            
            allEmployees?.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.empName}</td>
                        <td>{item.age}</td>
                        <td>{item.designation}</td>
                        <td>{item.salary}</td>
                        <td>
                            <Link to={`/edit/${item.id}`}>
                                <Button onClick={()=>handleEdit(item.id,item.empName,item.age,item.designation,item.salary)} variant="primary"><FaUserEdit/></Button>{' '}
                            </Link>     
                            <Button onClick={()=>handleDelete(item._id)} variant="danger"><FaTrash/></Button>
                        </td>
                    </tr>
                    )
            })
        }
      </tbody>
    </Table>
    </>
  )
}

export default Home