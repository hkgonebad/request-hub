import { Form, Nav, Stack, Tab } from "react-bootstrap";
import { FiArrowRight, FiDownload, FiEye } from "react-icons/fi";
import graphImg from "@/assets/img/graph.png";
import RequestsTable from "./ui/RequestsTable";
import DashboardReqCard from "./ui/DashboardReqCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardSpoc = () => {
  const percentage = 72;

  return (
    <>
      <section className="block dashboard">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12 col-lg-6">
              {/* Block Header */}
              <div className="blockHeader">
                <div className="bhTitle">
                  <h2>Request Status</h2>
                </div>

                <a href="#!" className="btn btn-link  ">
                  Detailed View <FiArrowRight />{" "}
                </a>
              </div>
              <div className="card db-card">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Nav fill className="" variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        Total active <span>85</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        In Progress <span>42</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        Uninitiated <span>25</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                        On-Hold <span>18</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content className="p-3">
                    <Tab.Pane eventKey="first">
                      <RequestsTable />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <RequestsTable />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <RequestsTable />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <RequestsTable />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              {/* Block Header */}
              <div className="blockHeader">
                <div className="bhTitle">
                  <h2>My Requests</h2>
                </div>

                {/* Select Month */}
                <div className="bhForm">
                  <Form.Group controlId="wzForm1">
                    <Form.Select aria-label="Default select example">
                      <option>Jan 2024 - Dec 2024</option>
                      <option>Jan 2023 - Dec 2023</option>
                      <option>Jan 2022 - Dec 2022</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="card db-card mb-3">
                <Stack direction="horizontal" gap={3} className="card-header justify-content-between">
                  <a href="#!" className="btn btn-link ">
                    <FiDownload /> Download Report
                  </a>
                  <a href="#!" className="btn btn-link ">
                    View Report <FiEye />
                  </a>
                </Stack>
                <div className="card-body">
                  <img src={graphImg} alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="card db-card">
                <div className="card-body">
                  {/* Block Header */}
                  <div className="blockHeader">
                    <div className="bhTitle">
                      <h2>Request Details</h2>
                    </div>
                  </div>

                  {/* Request Cards */}
                  <div className="row">
                    <div className="col-md-6">
                      <DashboardReqCard title="Total Requests" subTitle="This Month" value="42" alt={false} />
                    </div>
                    <div className="col-md-6">
                      <DashboardReqCard title="Completed Requests" subTitle="This Month" value="28" alt={false} />
                    </div>
                    <div className="col-md-6">
                      <DashboardReqCard title="Pending Requests" subTitle="This Month" value="10" alt={false} />
                    </div>
                    <div className="col-md-6">
                      <DashboardReqCard title="Rejected Requests" subTitle="This Month" value="4" alt={false} />
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
                      <h2>SLA Compliance</h2>
                    </div>
                  </div>

                  {/* SLA Compliance */}
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="slaProgress">
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            textSize: "16px",
                            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                            textColor: "#3e98c7",
                            trailColor: "#d6d6d6",
                            backgroundColor: "#3e98c7",
                          })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slaInfo">
                        <h4>SLA Compliance Rate</h4>
                        <p>Stark Enterprises is committed to meeting all service level agreements within the specified timeframes. Our current compliance rate is 72%, which is above the industry standard of 65%.</p>
                      </div>
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

export default DashboardSpoc;
