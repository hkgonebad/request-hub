import React from "react";
import FormSearch from "@/pages/ExisitingForms/ui/FormSearch";
import { Form, Pagination } from "react-bootstrap";
import { FiDownload, FiInfo } from "react-icons/fi";
import DashboardItem from "@/pages/Dashboard/ui/DashboardItem";

const Home = () => {
  const active = 2;
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <section className="block dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="card db-card">
                <div className="card-body">
                  {/* Block Header */}
                  <div className="blockHeader">
                    <div className="bhTitle">
                      <h2>Hero Activity Status</h2>
                    </div>

                    {/* Search */}
                    <FormSearch />
                  </div>

                  {/* Dashboard Items */}
                  <div className="row">
                    <div className="col-md-3">
                      <DashboardItem type="primary" value={42} text="Total Missions" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="success" value={18} text="Available" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="warning" value={15} text="On Mission" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="info" value={9} text="Recovery" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="card db-card">
                <div className="card-body">
                  {/* Block Header */}
                  <div className="blockHeader">
                    <div className="bhTitle">
                      <h2>Mission Requests</h2>
                    </div>

                    {/* Select Month */}
                    <div className="bhForm">
                      <Form.Group controlId="wzForm1">
                        <Form.Select aria-label="Default select example">
                          <option>Select Month</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>

                  {/* Dashboard Items */}
                  <div className="row ">
                    <div className="col-md-3">
                      <DashboardItem type="success" value={156} text="Completed" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="danger" value={28} text="Failed" />
                    </div>
                    <div className="col-md-6">
                      <div className="dItem dItemAlt">
                        <div className="diImg">
                          <FiDownload className="icon" />
                        </div>
                        <div className="diText">
                          <h3>Download</h3>
                          <span>Mission History Report</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive mt-4 mb-2">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Request ID</th>
                  <th>Assigned Date</th>
                  <th>SLA Deadline</th>
                  <th>Days Left</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>STARK-1001</td>
                  <td>05/15/2024</td>
                  <td>05/22/2024</td>
                  <td>3</td>
                  <td>
                    <span className="badge bg-warning">In-Progress</span>
                  </td>
                  <td>
                    <div className="actions">
                      <a href="#!" className="btn btnInfo">
                        <FiInfo />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>STARK-1002</td>
                  <td>05/10/2024</td>
                  <td>05/17/2024</td>
                  <td>0</td>
                  <td>
                    <span className="badge bg-success">Approved</span>
                  </td>
                  <td>
                    <div className="actions">
                      <a href="#!" className="btn btnInfo">
                        <FiInfo />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Pagination size="sm" className="justify-content-center">
            <Pagination.First />
            {items}
            <Pagination.Last />
          </Pagination>
        </div>
      </section>
    </>
  );
};

export default Home;
