import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"









export const addCsvAPI = async (reqBody, reqHeader)=>{
    return await commonAPI("POST", `${SERVER_URL}/importCSV`, reqBody, reqHeader)
}
export const getStudentAPI = async (admno, reqHeader)=>{
    return await commonAPI("GET", `${SERVER_URL}/getByAdmNo/${admno}`, "", reqHeader)
}
export const getAllStudentsAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/getAllStudents`, "", "")
}
export const updateStudentAPI = async(studentId,reqBody,reqHeader)=>{
    return await commonAPI("PUT", `${SERVER_URL}/updateStudent/${studentId}`,reqBody,reqHeader)
}

