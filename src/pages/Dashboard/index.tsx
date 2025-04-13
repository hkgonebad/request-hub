import { Form, Nav, Stack, Tab } from "react-bootstrap";
import { FiArrowRight, FiDownload, FiEye } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import RequestsTable from "./ui/RequestsTable";
import DashboardReqCard from "./ui/DashboardReqCard";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const percentage = 72;

  // Mission Status Distribution Data
  const missionStatusData = {
    labels: ["Active", "Completed", "On Hold", "Failed"],
    datasets: [
      {
        data: [42, 28, 15, 5],
        backgroundColor: ["rgba(54, 162, 235, 0.8)", "rgba(75, 192, 192, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Mission Timeline Data
  const missionTimelineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Missions Completed",
        data: [12, 19, 15, 25, 22, 30],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Team Performance Data
  const teamPerformanceData = {
    labels: ["Avengers", "X-Men", "Fantastic Four", "Guardians"],
    datasets: [
      {
        label: "Mission Success Rate",
        data: [85, 78, 92, 88],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
    ],
  };

  // Resource Allocation Data
  const resourceAllocationData = {
    labels: ["Equipment", "Training", "Tech", "Support"],
    datasets: [
      {
        label: "Current Month",
        data: [30, 25, 20, 25],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
      },
      {
        label: "Previous Month",
        data: [35, 20, 25, 20],
        backgroundColor: "rgba(255, 206, 86, 0.8)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

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
                  <div style={{ height: "300px" }}>
                    <Line data={missionTimelineData} options={chartOptions} />
                  </div>
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

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card db-card">
                <div className="card-body">
                  <div className="blockHeader">
                    <div className="bhTitle">
                      <h2>Mission Status Distribution</h2>
                    </div>
                  </div>
                  <div style={{ height: "300px" }}>
                    <Pie data={missionStatusData} options={chartOptions} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card db-card">
                <div className="card-body">
                  <div className="blockHeader">
                    <div className="bhTitle">
                      <h2>Team Performance</h2>
                    </div>
                  </div>
                  <div style={{ height: "300px" }}>
                    <Bar data={teamPerformanceData} options={chartOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="card db-card">
                <div className="card-body">
                  <div className="blockHeader">
                    <div className="bhTitle">
                      <h2>Resource Allocation</h2>
                    </div>
                  </div>
                  <div style={{ height: "300px" }}>
                    <Bar
                      data={resourceAllocationData}
                      options={{
                        ...chartOptions,
                        scales: {
                          x: { stacked: true },
                          y: { stacked: true },
                        },
                      }}
                    />
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

export default Dashboard;
