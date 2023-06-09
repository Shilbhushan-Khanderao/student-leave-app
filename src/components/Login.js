import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { LOGINURL } from "../services/StudentServices";
import { useNavigate } from "react-router-dom";
function Login() {
  const [studentPrn, setStudentPrn] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleLogin(event) {
    event.preventDefault();
    if (studentPrn.length === 0) {
      toast.warning("PRN Can't be empty!");
    } else if (password.length === 0) {
      toast.warning("Password can't be empty!");
    } else {
      const postdata = { studentPrn, password };
      axios.post(LOGINURL, postdata).then((response) => {
        const result = response.data;

        if (result["status"] === "success") {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          const { studentPrn, password } = result["data"];
          sessionStorage["studentPrn"] = studentPrn;
          navigate("/Dashboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Invalid Credentials!",
          });
        }
      });
    }
  }
  return (
    <>
      <div>
        <a
          href="Dashboard"
          class="btn btn-outline-dark btn-sm"
          role="button"
          aria-pressed="true"
        >
          Dashboard
        </a>
        <section class="vh-100 gradient-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4">
                      <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">
                        Enter your PRN and password!
                      </p>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="mobileno"
                          value={studentPrn}
                          class="form-control form-control-lg"
                          onChange={(e) => setStudentPrn(e.target.value)}
                        />
                        <label class="form-label">Student PRN</label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          value={password}
                          class="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label class="form-label" for="typePasswordX">
                          Password
                        </label>
                      </div>
                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
