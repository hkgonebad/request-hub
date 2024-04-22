import FormSearch from "@/pages/ExisitingForms/ui/FormSearch";
import { Form, Pagination } from "react-bootstrap";
import { FiDownload, FiInfo } from "react-icons/fi";
import DashboardItem from "./DashboardItem";

const Dashboard = () => {
  let active = 2;
  let items = [];
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
                      <h2>My Activity Status</h2>
                    </div>

                    {/* Search */}
                    <FormSearch />
                  </div>

                  {/* Dashboard Items */}
                  <div className="row">
                    <div className="col-md-3">
                      <DashboardItem type="primary" value={25} text="Total" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="default" value={15} text="Uninitiated" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="default" value={10} text="In-Progress" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="default" value={1} text="On Hold" />
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
                      <h2>My Requests</h2>
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
                      <DashboardItem type="success" value={102} text="Completed" />
                    </div>
                    <div className="col-md-3">
                      <DashboardItem type="danger" value={23} text="Rejected" />
                    </div>
                    <div className="col-md-6">
                      <div className="dItem dItemAlt">
                        <div className="diImg">
                          <FiDownload className="icon" />
                        </div>
                        <div className="diText">
                          <h3>Download</h3>
                          <span>Entire History Log Report</span>
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
                  <td>RDRR1001</td>
                  <td>07/01/2024</td>
                  <td>07/01/2024</td>
                  <td>0</td>
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
                  <td>RDRR1002</td>
                  <td>07/01/2024</td>
                  <td>07/01/2024</td>
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

export default Dashboard;
