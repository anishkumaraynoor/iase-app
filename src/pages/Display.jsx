import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllStudentsAPI } from '../services/allAPI';

function Display() {
    const [studentData, setStudentData] = useState([])
    const getAllStudents = async()=>{
        try {
            const result = await getAllStudentsAPI()
            if(result.status==200){
                setStudentData(result.data)
            }else{
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllStudents()
    },[])


  return (
    <Table striped bordered hover>
    <thead>
      <tr style={{fontSize:'small'}}>
        <th className='bg-warning'>#</th>
        <th className='bg-warning'>AdmNo</th>
        <th className='bg-warning'>AdmYear</th>
        <th className='bg-warning'>AdmDate</th>
        <th className='bg-warning'>LeftDate</th>
        <th className='bg-warning'>Name</th>
        <th className='bg-warning'>DOB</th>
        <th className='bg-warning'>Gender</th>
        <th className='bg-warning'>Religion</th>
        <th className='bg-warning'>Caste</th>
        <th className='bg-warning'>Category</th>
        <th className='bg-warning'>Admission<br></br>Category</th>
        <th className='bg-warning'>Email</th>
        <th className='bg-warning'>Mobile</th>
        <th className='bg-warning'>Class</th>
        <th className='bg-warning'>Subject</th>
        <th className='bg-warning'>FeePaid</th>
        <th className='bg-warning'>Mandatory<br></br>Paid</th>
        <th className='bg-warning'>TCNo</th>
        <th className='bg-warning'>TCDate</th>
      </tr>
    </thead>
    <tbody>
      {studentData?.length>0?studentData.map((student,index)=>(
        <tr style={{fontSize:'small', whiteSpace:'nowrap'}}>
        <td>{index+1}</td>
        <td>{student.admno}</td>
        <td>{student.admyear}</td>
        <td>{student.admdate.split("-")[2]+"-"+student.admdate.split("-")[1]+"-"+student.admdate.split("-")[0]}</td>
        <td>{student.leftdate.split("-")[2]+"-"+student.leftdate.split("-")[1]+"-"+student.leftdate.split("-")[0]}</td>
        <td>{student.name}</td>
        <td>{student.dob.split("-")[2]+"-"+student.dob.split("-")[1]+"-"+student.dob.split("-")[0]}</td>
        <td>{student.gender}</td>
        <td>{student.religion}</td>
        <td>{student.caste}</td>
        <td>{student.category}</td>
        <td>{student.admcategory}</td>
        <td>{student.email}</td>
        <td>{student.mob}</td>
        <td>{student.class}</td>
        <td>{student.subject}</td>
        <td>{student.feepaid}</td>
        <td>{student.mandatorypaid}</td>
        <td>{student.tcno}</td>
        <td>{student.tcdate.split("-")[2]+"-"+student.tcdate.split("-")[1]+"-"+student.tcdate.split("-")[0]}</td>
      </tr>
      )): <h1>Nothing to display</h1>
        
      }
      
    </tbody>
  </Table>
  )
}

export default Display