import React, { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import expressionParser from 'docxtemplater/expressions';

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}


function Work() {
  const [tcData, setTcData] = useState({
    tcno:"",tcdate:"",name:"",dob:"",admno:"",admdate:"",sem:"",dateleft:"",sem1:"",subject:"",course:"",due:"",scholarship:"",examination:"",leftdate:"",applidate:"",issuedate:""
  })
  

  const formatData = (e)=>{
    let {value, name} = e.target
    var dataArray = value.split('-')
    var dataFormat = dataArray[2]+'-'+dataArray[1]+'-'+dataArray[0]
    setTcData({...tcData, [name]:dataFormat})
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
        doc.render(tcData);
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
                <label htmlFor="">TC No.</label><br />
                <input onChange={e=>setTcData({...tcData, tcno:e.target.value})} value={tcData.tcno} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Date</label><br />
                <input onChange={e=>formatData(e)} className='' type="date" name="tcdate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">Name</label><br />
                <input onChange={e=>setTcData({...tcData, name:e.target.value})} value={tcData.name} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Date of Birth</label><br />
                <input onChange={e=>formatData(e)} className='' type="date" name="dob" id="" />
              </Col>

              <Col className='mt-1' lg={12}>
                <label htmlFor="">Admission No.</label><br />
                <input onChange={e=>setTcData({...tcData, admno:e.target.value})} value={tcData.admno} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Admitted On</label><br />
                <input onChange={e=>formatData(e)} className='' type="date" name="admdate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">into class</label><br />
                <input onChange={e=>setTcData({...tcData, sem:e.target.value})} value={tcData.sem} className='' type="text" name="" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Left On</label><br />
                <input onChange={e=>formatData(e)} className='' type="date" name="dateleft" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">from class</label><br />
                <input onChange={e=>setTcData({...tcData, sem1:e.target.value})} value={tcData.sem1} className='' type="text" name="" id="" />
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
                <input onChange={e=>formatData(e)} className='' type="date" name="leftdate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
                <label htmlFor="">Date of application for TC</label><br />
                <input onChange={e=>formatData(e)} className='' type="date" name="applidate" id="" />
              </Col>
              <Col className='mt-1' lg={6}>
              <label htmlFor="">Date of issue of TC</label><br />
                <input onChange={e=>formatData(e)} className='' type="date" name="issuedate" id="" />
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