import React, { useEffect, useState } from "react";
import AddComponent from "./AddComponent";
import UpdateComponent from "./UpdateComponent";
import StudentServices from "../../services/StudentServices";
import Swal from "sweetalert2";

export const ViewAllStudents = () => {
  const [students, setStudents] = useState([]);
  const [update, setUpdate] = useState(false);
  const [add, setAdd] = useState(false);
  const [sid, setSid] = useState("");

  useEffect(() => {
    StudentServices.getAllStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (studentid) => {
    setUpdate(true);
    setSid(studentid);
  };

  const handleAdd = () => {
    setAdd(true);
  };

  const deleteStudent = (studentid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          StudentServices.deleteStudent(studentid);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <>
      {update && <UpdateComponent close={setUpdate} sid={sid} />}
      {add && <AddComponent close={setAdd} sid={sid} />}
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
                    <div className="text-start m-2">
                      <button className="btn btn-primary" onClick={handleAdd}>
                        Add Student
                      </button>
                    </div>
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
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  onClick={() =>
                                    handleUpdate(student.studentId)
                                  }
                                >
                                  Update
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm px-3 ms-3 mt-3"
                                  onClick={() =>
                                    deleteStudent(student.studentId)
                                  }
                                >
                                  Delete
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
