





import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Update() {
    return (
        <>
            <div className='container' style={{ border: '5px solid red', height: '87vh' }}>
                <Row>
                    <Col lg={6}>
                        <Row className='container'>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Admission No.</label><br />
                                <input className='' type="text" name="" id="" />
                            </Col>
                            <Col lg={6} >
                                <button className='btn btn-success mt-3'>Get Student</button>
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Admission Year</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Admission Date</label><br />
                                <input  className='' type="date" name="tcdate" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Name</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={2}>
                                <label htmlFor="">Gender</label><br />
                                <select name="" id="">
                <option value="Male">Female</option>
                <option value="Female">Male</option>
                <option value="Others">Others</option>
              </select>
                            </Col>
                            <Col className='mt-1' lg={3}>
                                <label htmlFor="">Date of Birth</label><br />
                                <input  className='' type="date" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Religion</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Caste</label><br />
                                <input  className='' type="text" name="tcdate" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Category</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Admission Category</label><br />
                                <input  className='' type="text" name="tcdate" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Email</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Mob</label><br />
                                <input  className='' type="text" name="tcdate" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Class</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Subject</label><br />
                                <input  className='' type="text" name="tcdate" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Fee Paid</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">Mandatory Paid</label><br />
                                <input  className='' type="text" name="tcdate" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">TC No.</label><br />
                                <input  className='' type="text" name="" id="" />
                            </Col>
                            <Col className='mt-1' lg={6}>
                                <label htmlFor="">TC Date</label><br />
                                <input  className='' type="text" name="tcdate" id="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}


    
   

export default Update

