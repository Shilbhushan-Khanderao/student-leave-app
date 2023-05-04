import React, { useEffect, useState } from "react";

export const ViewAllStudents = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/admin/students")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <>
      <div className="wrapper text-center">
        <h2 className="fs-2 m-0 py-5 px-5">List of Students</h2>
      </div>
      <section className="intro">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card shadow-2-strong">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0 ">
                        <thead>
                          <tr>
                            <th className="text-dark">Student PRN</th>
                            <th className="text-dark">Student Name</th>
                            <th className="text-dark">Mobile Number</th>
                            <th className="text-dark">Email Id</th>
                            <th className="text-dark text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((student) => (
                            <tr key={student.studentId}>
                              <td>{student.studentPrn}</td>
                              <td>{student.studentName}</td>
                              <td>{student.mobileNumber}</td>
                              <td>{student.email}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-warning btn-sm px-3 ms-3 mt-3"
                                >
                                  Update
                                  <i className="fas fa-times"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm px-3 ms-3 mt-3"
                                >
                                  Delete
                                  <i className="fas fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewAllStudents;
