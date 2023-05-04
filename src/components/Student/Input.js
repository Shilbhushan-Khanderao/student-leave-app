import React, { useState } from "react";
import Leave from "./Leave";

function Input() {
  const [studentId, setStudentId] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [issue, setIssue] = useState();
  const [show, setShow] = useState(false);

  const showDiv = () => {
    setShow(true);
  };
  return (
    <div className="container m-1">
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
            <option selected>Choose reason for leave...</option>
            <option value="personal">Personal</option>
            <option value="medical">Medical</option>
            <option value="family">Family</option>
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
        <div className="text-center mt-3">
          <button className="btn btn-success" type="submit" onClick={showDiv}>
            Submit
          </button>
        </div>
      </form>
      <div>
        {show && (
          <div>
            <Leave
              studentId={studentId}
              fromDate={fromDate}
              toDate={toDate}
              issue={issue}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
