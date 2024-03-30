import React, { useState } from 'react'
import { addCsvAPI } from '../services/allAPI'

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
        </div>
    )
}

export default Data