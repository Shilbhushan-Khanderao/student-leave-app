import React, { useState } from "react";
import AdminServices from "../../services/AdminServices";

function ImportData() {
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const importCsvData = (file) => {
    AdminServices.importData(file)
      .then((response) => {
        console.log("Data Imported Success...");
      })
      .catch((error) => {
        console.log("Data Import Failed..!!");
        console.log(error);
      });
  };

  return (
    <div className="container m-2">
      <form className="form-group">
        <input
          type="file"
          accept=".csv"
          className="form-control"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-success m-1"
          onClick={() => importCsvData(file)}
        >
          Import
        </button>
      </form>
    </div>
  );
}

export default ImportData;
