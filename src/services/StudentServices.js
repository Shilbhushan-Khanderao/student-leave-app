import axios from "axios";

export const LOGINURL = "http://localhost:8080/login";
export const UPDATESTUDENT = "http://localhost:8080/updatestudent";
export const ADDSTUDENT = "http://localhost:8080/addstudent";
export const DELETESTUDENT = "http://localhost:8080/deletestudent?studentid=";
export const GETSTUDENTBYID = "http://localhost:8080/getstudent/";
export const GETALLSTUDENTS = "http://localhost:8080/students";
class StudentServices {
  getAllStudents() {
    return axios.get(GETALLSTUDENTS);
  }

  updateStudent(student) {
    return axios.put(UPDATESTUDENT, student);
  }

  getStudentById(studentId) {
    return axios.get(GETSTUDENTBYID + studentId);
  }

  deleteStudent(studentid) {
    return axios.delete(DELETESTUDENT + studentid);
  }
}
export default new StudentServices();
