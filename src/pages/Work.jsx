import React, { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import expressionParser from 'docxtemplater/expressions';
import { getStudentAPI } from '../services/allAPI';

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}


function Work() {
  let today = new Date().toISOString().split('T')[0]
  const [tcData, setTcData] = useState({
    tcno:"",tcdate:today,name:"",dob:"",admno:"",admdate:"",sem:"",dateleft:"",sem1:"",subject:"",course:"Course Completed",due:"Yes",scholarship:"EGrants",examination:"",leftdate:"",applidate:"",issuedate:today
  })

  const formatDate = (value)=>{
    var dataArray = value.split('-')
    var dataFormat = dataArray[2]+'-'+dataArray[1]+'-'+dataArray[0]
    return dataFormat
  }

  
  const getStudent = async () => {
    try {
        const reqHeader = {
          "Content-Type": "application/json",
        }
        const result = await getStudentAPI(tcData.admno,reqHeader)
        if (result.status === 200) {
          let baseData = result.data
          
          setTcData({...tcData,name:baseData.name,sem:baseData.class,admdate:baseData.admdate,dob:baseData.dob,subject:baseData.subject})
        }
      
    } catch (error) {
      console.log(error);
    }
  }
  

  const generateDocument = () => {
    
    loadFile(
      '/src/pages/tcinput.docx',
      function (error, content) {
        if (error) {
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
          parser: expressionParser,
        });
        // let adate = formatDate(tcData.admdate)
        
        
        doc.render({...tcData, admdate:formatDate(tcData.admdate),
          dob:formatDate(tcData.dob), tcdate:formatDate(tcData.tcdate),
          dateleft:formatDate(tcData.dateleft),
          leftdate:formatDate(tcData.leftdate), applidate:formatDate(tcData.applidate),
          issuedate:formatDate(tcData.issuedate)});
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        }); //Output the document using Data-URI
        saveAs(out, 'tcoutput.docx');
      }
    );
  };

  return (
    <>
      <div className='container' style={{ border: '5px solid white', height: '87vh' }}>
        <Row>
          <Col lg={6}>
            <Row className='container'>
            <Col className='mt-1' lg={6}>
                <label htmlFor="">Admission No.</label><br />
                <input onChange={e=>setTcData({...tcData, admno:e.target.value})} value={tcData.admno} className='' type="text" name="" id="" />
              </Col>
              <Col lg={6} >
            <button onClick={getStudent} className='btn btn-success mt-3'>Get Student</button>
          </Col>

              <Col className='mt-1' lg={6}>
                <label htmlFor="">TC No.</label><br />
                <input onChange={e=>setTcData({...tcData, tcno:e.target.value})} value={tcData.tcno} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Date</label><br />
                <input onChange={e=>setTcData({...tcData, tcdate:e.target.value})} value={tcData.tcdate} className='' type="date" name="tcdate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">Name</label><br />
                <input onChange={e=>setTcData({...tcData, name:e.target.value})} value={tcData.name} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Date of Birth</label><br />
                <input onChange={e=>setTcData({...tcData, dob:e.target.value})} value={tcData.dob} className='' type="date" name="dob" id="" />
              </Col>

              
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Admitted On</label><br />
                <input onChange={e=>setTcData({...tcData, admdate:e.target.value})} value={tcData.admdate} className='' type="date" name="admdate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">into class</label><br />
                <select onChange={e=>setTcData({...tcData, sem:e.target.value})} value={tcData.sem} name="" id="">
                <option value="">--select--</option>
                <option value="I BEd" >I BEd</option>
                <option value="II BEd" >II BEd</option>
                <option value="I MEd" >I MEd</option>
                <option value="II MEd" >II MEd</option>
                <option value="I PhD" >I PhD</option>
                <option value="II PhD" >II PhD</option>
              </select>
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Left On</label><br />
                <input onChange={e=>setTcData({...tcData, dateleft:e.target.value, leftdate:e.target.value})} value={tcData.dateleft} className='' type="date" name="dateleft" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">from class</label><br />
                <select onChange={e=>setTcData({...tcData, sem1:e.target.value})} name="" id="">
                <option value="">--select--</option>
                <option value="I BEd">I BEd</option>
                <option value="II BEd">II BEd</option>
                <option value="I MEd">I MEd</option>
                <option value="II MEd">II MEd</option>
                <option value="I PhD">I PhD</option>
                <option value="II PhD">II PhD</option>
              </select>
              </Col>

              <Col className='mt-1' lg={6}>
                <label htmlFor="">Subject</label><br />
                <input onChange={e=>setTcData({...tcData, subject:e.target.value})} value={tcData.subject} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Whether qualified</label><br />
              <select onChange={e=>setTcData({...tcData, course:e.target.value})} name="" id="">
                <option value="Course Completed">Course Completed</option>
                <option value="Discontinued">Discontinued</option>
              </select>
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">Whether dues discharged</label><br />
                <select onChange={e=>setTcData({...tcData, due:e.target.value})} name="" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Whether any scholarship</label><br />
              <select onChange={e=>setTcData({...tcData, scholarship:e.target.value})} name="" id="">
                <option value="EGrants">EGrants</option>
                <option value="Nil">Nil</option>
              </select>
              </Col>

              <Col className='mt-1' lg={6}>
                <label htmlFor="">Name of Examination</label><br />
                <input onChange={e=>setTcData({...tcData, examination:e.target.value})} value={tcData.examination} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Date on which actually left</label><br />
                <input onChange={e=>setTcData({...tcData, leftdate:e.target.value})} value={tcData.leftdate} className='' type="date" name="leftdate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">Date of application for TC</label><br />
                <input onChange={e=>setTcData({...tcData, applidate:e.target.value})} value={tcData.applidate} className='' type="date" name="applidate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Date of issue of TC</label><br />
                <input onChange={e=>setTcData({...tcData, issuedate:e.target.value})} value={tcData.issuedate} className='' type="date" name="issuedate" id="" />
              </Col>
            </Row>
          </Col>
          <Col lg={6} >
            <button onClick={generateDocument} className='btn btn-success'>Print</button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Work