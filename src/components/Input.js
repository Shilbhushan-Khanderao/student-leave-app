import React, { useState } from "react";
import Leave from "./Leave";

function Input() {
  const [studentId, setStudentId] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [issue, setIssue] = useState();
  return (
    <div className="container ">
      <form>
        <div className="form-group mb-2">
          <label for="formGroupExampleInput">Student PRN</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter 12 digit PRN..."
            onChange={(event) => setStudentId(event.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label for="formGroupExampleInput">Issue</label>
          <select
            className="custom-select form-control my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={(event) => setIssue(event.target.value)}
          >
            <option selected>Choose...</option>
            <option value="Personal">Personal</option>
            <option value="Medical">Medical</option>
            <option value="Family">Family</option>
          </select>
        </div>
        <div className="form-group mb-2 row">
          <div className="col-md-6">
            <label for="formGroupExampleInput2">From Date</label>
            <input
              type="date"
              className="form-control"
              id="formGroupExampleInput2"
              onChange={(event) => setFromDate(event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label for="formGroupExampleInput2">To Date</label>
            <input
              type="date"
              className="form-control"
              id="formGroupExampleInput2"
              onChange={(event) => setToDate(event.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>

      <Leave
        studentId={studentId}
        fromDate={fromDate}
        toDate={toDate}
        issue={issue}
      />
    </div>
  );
}

export default Input;
