import { Form, Nav, Stack, Tab } from "react-bootstrap";
import { FiArrowRight, FiDownload, FiEye } from "react-icons/fi";
import graphImg from "@/assets/img/graph.png";
import RequestsTable from "./ui/RequestsTable";
import DashboardItem from "./ui/DashboardItem";
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

                <a href="#!" className="btn btn-link  text-secondary">
                  Detailed View <FiArrowRight />{" "}
                </a>
              </div>
              <div className="card db-card">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Nav fill className="" variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        Total active <span>67</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        In Progress <span>35</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        Uninitiated <span>20</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                        On-Hold <span>12</span>
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
                      <option>Nov 2022 - Oct 2023</option>
                      <option>Nov 2023 - Oct 2024</option>
                      <option>Nov 2024 - Oct 2025</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="card db-card mb-3">
                <Stack direction="horizontal" gap={3} className="card-header justify-content-between">
                  <a href="#!" className="btn btn-link text-secondary">
                    <FiDownload /> Download Report
                  </a>
                  <a href="#!" className="btn btn-link text-secondary">
                    View Report <FiEye />
                  </a>
                </Stack>
                <div className="card-body">
                  <img src={graphImg} alt="" className="w-100" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <DashboardReqCard title="DPO / Privacy" subTitle="Team Requests" value="03" alt={false} />
                </div>
                <div className="col-md-6">
                  <DashboardReqCard title="Legal" subTitle="Team Requests" value="05" alt={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="card db-card db-cardAlt">
                <div className="card-body">
                  {/* Block Header */}
                  <div className="blockHeader">
                    <div className="bhForm w-100">
                      <div className="form-group ">
                        <select name="" id="" className="form-select">
                          <option value="">This Week</option>
                          <option value="">This Month</option>
                          <option value="">This Year</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Circle Progress */}
                  <div className="circleProgress">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        // pathColor: `linear-gradient(48.26deg, #0D719F 21.87%, #540982 105.33%)`,
                        pathColor: `#540982`,
                        textColor: "#0A0A0A",
                        textSize: "22px",
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="card db-card db-cardAlt mb-3">
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

            <div className="col-lg-3">
              <DashboardReqCard title="DPO / Privacy" subTitle="Team Requests" value="10" alt={true} />
              <DashboardReqCard title="Admin" subTitle="Config" value="03" alt={true} />
              <DashboardReqCard title="Total Businesses" subTitle="and sub BU’s" value="25" alt={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardSpoc;
