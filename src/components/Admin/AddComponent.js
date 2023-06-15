import React, { useState } from "react";
import StudentServices, { ADDSTUDENT } from "../../services/StudentServices";
import { toast } from "react-toastify";
import { Button, Form, Modal } from "react-bootstrap";

function AddComponent({ close, sid }) {
  const [studentPrn, setStudentPrn] = useState("");
  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addStudent = () => {
    const student = { studentPrn, studentName, mobileNumber, email };
    if (
      studentPrn === 0 &&
      studentName === 0 &&
      mobileNumber === 0 &&
      email === 0
    ) {
      toast.error("Please fill all the fields...");
    } else {
      fetch(ADDSTUDENT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      })
        .then(() => {
          toast.success("Added Successfully");
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Addition Failed...");
        });
    }
  };
  return (
    <>
      <Modal show={close}>
        <Modal.Header closeButton onClick={() => close(false)}>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => close(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addStudent}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddComponent;
