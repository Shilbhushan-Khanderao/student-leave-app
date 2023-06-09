import React, { useState } from "react";
import Leave from "./Leave";

function Input() {
  const [studentId, setStudentId] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [fromTime, setFromTime] = useState();
  const [toTime, setToTime] = useState();
  const [mailBody, setMailBody] = useState();
  // const [show, setShow] = useState(false);

  // const showDiv = () => {
  //   setShow(true);
  // };

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
          <label for="formGroupExampleInput">Mail Body</label>
          <textarea
            style={{ height: 150 }}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Write your mail here..."
            onChange={(event) => setMailBody(event.target.value)}
          />
        </div>
        <div className="form-group mb-2 row">
          <div className="col-md-3">
            <label for="formGroupExampleInput2">From Date</label>
            <input
              type="date"
              className="form-control"
              id="formGroupExampleInput2"
              onChange={(event) => setFromDate(event.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label for="formGroupExampleInput2">Time</label>
            <input
              type="time"
              className="form-control"
              onChange={(event) => setFromTime(event.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label for="formGroupExampleInput2">To Date</label>
            <input
              type="date"
              className="form-control"
              id="formGroupExampleInput2"
              onChange={(event) => setToDate(event.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label for="formGroupExampleInput2">Time</label>
            <input
              type="time"
              className="form-control"
              onChange={(event) => setToTime(event.target.value)}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div>
        <div>
          <Leave
            studentId={studentId}
            fromDate={fromDate}
            toDate={toDate}
            mailBody={mailBody}
            toTime={toTime}
            fromTime={fromTime}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
