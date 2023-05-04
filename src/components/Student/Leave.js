import React from "react";
function Leave(props) {
  return (
    <div>
      <div className="container ">
        <hr />
        <text className="text-justify">
          Dear Ma'am,
          <br /> I am writing to request a leave of absence from college from{" "}
          {props.fromDate} to {props.toDate}. Unfortunately, I am experiencing{" "}
          {props.issue} issues that require my immediate attention and it is
          necessary for me to take time off from my studies.
          <br /> I understand that this absence may affect my academic
          performance and I am willing to make up for the missed work upon my
          return. I will also inform my classmates about the assignments that I
          will miss and request their help in keeping me updated on any
          additional course material.
          <br /> I assure you that I am committed to my academic progress and
          will make every effort to minimize the impact of my absence. I am
          grateful for your understanding and support during this time.
          <br /> Thank you for your attention to this matter. <br />
          Sincerely,
          <br /> [Your name]
          <br />
          PRN : {props.studentId}
        </text>
      </div>
    </div>
  );
}

export default Leave;
