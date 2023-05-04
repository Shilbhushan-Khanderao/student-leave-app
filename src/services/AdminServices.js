import axios from "axios";

export const IMPORTCSV = "http://localhost:8080/admin/upload";
export const GETSTUDENTS = "http://localhost:8080/admin/students";
class AdminServices {
  importData(formData) {
    return axios.post(IMPORTCSV,formData,{headers: {
      "Content-Type": "multipart/form-data"},
    });
  }

  getStudents(){
    return axios.get(GETSTUDENTS);
  }
}
export default new AdminServices();
