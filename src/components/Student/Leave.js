import React from "react";
function Leave(props) {
  return (
    <div>
      <div className="container ">
        <hr />
        <text className="text-justify">
          <b>
            Subject : Application of leave from {props.fromDate}{" "}
            {props.fromTime} to {props.toDate} {props.toTime}
          </b>
          <br />
          Respected Ma'am,
          <br />
          {props.mailBody}
          <br />
          Sincerely,
          <br /> [Your name]
          <br />
          PRN: {props.studentId}
        </text>
      </div>
    </div>
  );
}

export default Leave;
