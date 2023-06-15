import axios from "axios";

export const IMPORTCSV = "http://localhost:8080/admin/upload";
export const LOGINURL = "http://localhost:8080/login";
export const DELETEALL = "http://localhost:8080/deleteallstudent";
class AdminServices {
  importData(formData) {
    return axios.post(IMPORTCSV, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default new AdminServices();
