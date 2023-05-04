import React from "react";
function Login() {
  return (
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
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Student PRN</label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>
                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
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
  );
}

export default Login;
