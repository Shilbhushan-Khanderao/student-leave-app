import React from "react";

function Dashboard() {
  return (
    <div>
        <div id="page-content-wrapper">
          <div className="wrapper text-center">
            <h2 class="fs-2 m-0 py-5 px-5">Admin Dashboard</h2>
          </div>
          <div class="container-fluid px-4">
            <div class="row g-3 my-2 justify-content-center">
              <div class="col-md-3">
                <div class="p-4 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div className="text-center">
                    <h3 class="fs-2 text-dark">Import CSV</h3>
                    <a
                      href="importdata"
                      class="btn btn-outline-dark btn-sm"
                      role="button"
                      aria-pressed="true"
                    >
                      Import
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="p-4 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div className="text-center">
                    <h3 class="fs-2 text-dark">View All Students</h3>
                    <a
                      href="viewallstudents"
                      class="btn btn-outline-dark btn-sm"
                      role="button"
                      aria-pressed="true"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;
