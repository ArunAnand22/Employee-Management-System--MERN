import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Employee from './Employee';
import axios from 'axios';

export default function Edit() {

    const [id,setId]=useState('')
    const [empName,setempName]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState(0)

    const params=useParams()
    console.log(params);
    
    //fetch employee details
    const fetchEmployee=async(id)=>{
      const result=await axios.get('http://localhost:8000/getemployee/'+params.id)
      setId(result.data.employee.id)
      setempName(result.data.employee.empName)
      setAge(result.data.employee.age)
      setDesignation(result.data.employee.designation)
      setSalary(result.data.employee.salary)
      console.log(result.data.employee);
    }

    useEffect(()=>{
          fetchEmployee()
    },[])


    let history=useNavigate()
    
    //update employee
    const handleUpdate=async(e)=>{
        e.preventDefault();//avoid refresh
        const body={
          id,
          empName,
          age,
          designation,
          salary
        }

        const result=await axios.post('http://localhost:8000/updateemployee',body)
        history('/')
    }

  return (
    <>
        <Row className='mt-5'>
        <Col className='text-center m-auto'>
        <img width={'300px'} src='https://pluspng.com/img-png/png-employee-account-avatar-business-colleague-employee-female-group-human-512.png' alt='profile-pic'></img>
        </Col>
        <Col className='m-auto'>

        <Form className='border border-3 p-5'>

      <Form.Group className="mb-3">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Id" 
        value={id} 
        onChange={(e)=>setId(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
        value={empName}
        onChange={(e)=>setempName(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Employee Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" 
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation" 
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" 
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required
        />
      </Form.Group>

      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>

        </Col>
      </Row>
    </>
  )
}
