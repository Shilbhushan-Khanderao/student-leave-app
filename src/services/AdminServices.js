import axios from "axios";

export const IMPORTCSV = "http://localhost:8080/admin/importcsv/upload";
class AdminServices {
  importData(file) {
    return axios.post(IMPORTCSV, file,{headers: {
      "Content-Type": "multipart/form-data"},
    });
  }
}
export default new AdminServices();
