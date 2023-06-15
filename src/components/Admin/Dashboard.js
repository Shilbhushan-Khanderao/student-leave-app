import React from "react";

function Dashboard() {
  return (
    <div>
      <div id="page-content-wrapper">
        <div className="wrapper text-center">
          <h2 className="fs-2 m-0 py-5 px-5">Admin Dashboard</h2>
        </div>
        <div className="container-fluid px-4">
          <div className="row g-3 my-2 justify-content-center">
            <div className="col-md-3">
              <div className="p-4 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
                <div className="text-center">
                  <h3 className="fs-2 text-dark">Import CSV</h3>
                  <a
                    href="importdata"
                    className="btn btn-outline-dark btn-sm"
                    role="button"
                    aria-pressed="true"
                  >
                    Import
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
                <div className="text-center">
                  <h3 className="fs-2 text-dark">View All Students</h3>
                  <a
                    href="viewallstudents"
                    className="btn btn-outline-dark btn-sm"
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
