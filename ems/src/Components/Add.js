import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {
    const [id,setId]=useState('')
    const [empName,setempName]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState('')

    useEffect(()=>{
    },[])

    const history=useNavigate()

    const handleAdd=async(e)=>{
        e.preventDefault();//avoid refresh

        // let ids=uuid();

        // let uniqueId=ids.slice(0,8)
        // console.log(uniqueId );
      console.log(id);
        const body={
          id,
          empName,
          age,
          designation,
          salary
        }

        const result=await axios.post('http://localhost:8000/addemployee',body)
        console.log(result);

        history('/')
    }
    

  return (
    <>
        <h2 className='text-center mt-5'>Add Employee</h2>
        <Row className='mt-5'>
        <Col className='text-center m-auto'>
        <img width={'300px'} src='https://pluspng.com/img-png/png-employee-account-avatar-business-colleague-employee-female-group-human-512.png'></img>
        </Col>
        <Col className='m-auto'>

        <Form className='border border-3 p-5'>

      <Form.Group className="mb-3">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Id" 
        // value={id} 
        onChange={(e)=>setId(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
        // value={empName}
        onChange={(e)=>setempName(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Employee Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" 
        // value={age}
        onChange={(e)=>setAge(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation" 
        // value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" 
        // value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required
        />
      </Form.Group>

      <Button onClick={(e)=>handleAdd(e)} variant="success" type="submit">
        Add
      </Button>
    </Form>

        </Col>
      </Row>
    </>
  )
}

export default Add