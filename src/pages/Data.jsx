import React, { useState } from 'react'
import { addCsvAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'





function Data() {
    const [dataFile, setDataFile] = useState("")

    const exportCSV = async () => {
        const reqBody = new FormData()
        reqBody.append("file", dataFile)
        const reqHeader = {
            "Content-Type": "multipart/form-data"
        }
        console.log("proceed to API");

        try {
            const result = await addCsvAPI(reqBody, reqHeader)
            console.log(result);
            if (result.status === 200) {
                alert("added succefully")
            } else {
                alert(result.code)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container mt-5'>
            
                <input onChange={e=>setDataFile(e.target.files[0])} className='text-center' type="file" name="" id="" />      
                <button className='btn btn-success' onClick={exportCSV} >Add CSV File</button>
            
            <br />
            <Link to={'/update'}><button className='btn btn-success mt-5' >Update Data</button></Link>
            
        </div>
    )
}

export default Data