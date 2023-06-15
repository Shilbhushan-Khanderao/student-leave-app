import React, { useEffect, useState } from "react";
import StudentServices from "../../services/StudentServices";
import { toast } from "react-toastify";
import { Button, Form, Modal } from "react-bootstrap";
import AdminServices from "../../services/AdminServices";
import { useNavigate } from "react-router-dom";

function UpdateComponent({ close, sid }) {
  const [studentId, setStudentId] = useState("");
  const [studentPrn, setStudentPrn] = useState("");
  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const updateStudent = () => {
    const student = { studentId, studentPrn, studentName, mobileNumber, email };

    if (sid) {
      StudentServices.updateStudent(student)
        .then(() => {
          toast.success("Updated Successfully");
          window.location.reload(false);
        })
        .catch(() => {
          toast.error("Updation Failed");
        });
    }
  };

  useEffect(() => {
    StudentServices.getStudentById(sid)
      .then((response) => {
        setStudentId(response.data.studentId);
        setStudentPrn(response.data.studentPrn);
        setStudentName(response.data.studentName);
        setMobileNumber(response.data.mobileNumber);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Modal show={close}>
        <Modal.Header closeButton onClick={() => close(false)}>
          <Modal.Title>Update Student Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Student ID</Form.Label>
              <Form.Control type="text" value={studentId} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Student PRN</Form.Label>
              <Form.Control
                type="text"
                value={studentPrn}
                onChange={(e) => setStudentPrn(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => close(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={updateStudent}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateComponent;
