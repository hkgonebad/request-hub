import FormSearch from "@/pages/ExisitingForms/ui/FormSearch";
import { Form, Pagination } from "react-bootstrap";
import { FiDownload, FiInfo, FiAlertTriangle, FiCheckCircle, FiClock, FiUsers } from "react-icons/fi";
import DashboardItem from "@/pages/Dashboard/ui/DashboardItem";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

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

  // Mission Timeline Data
  const missionTimelineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Missions",
        data: [12, 19, 15, 25, 22, 30, 28],
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
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
      },
    ],
  };

  // Resource Allocation Data
  const resourceAllocationData = {
    labels: ["Equipment", "Training", "Tech", "Support"],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
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

                  {/* Mission Timeline */}
                  <div className="mt-4">
                    <h4>Weekly Mission Activity</h4>
                    <div style={{ height: "200px" }}>
                      <Line data={missionTimelineData} options={chartOptions} />
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
                  <div className="row">
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

                  {/* Team Performance */}
                  <div className="mt-4">
                    <h4>Team Performance</h4>
                    <div style={{ height: "200px" }}>
                      <Bar data={teamPerformanceData} options={chartOptions} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Allocation */}
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card db-card">
                <div className="card-body">
                  <div className="blockHeader">
                    <div className="bhTitle">
                      <h2>Resource Allocation</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div style={{ height: "300px" }}>
                        <Doughnut data={resourceAllocationData} options={chartOptions} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="resource-stats">
                        <div className="stat-item">
                          <FiUsers className="icon" />
                          <div className="stat-info">
                            <h4>Active Teams</h4>
                            <p>4 Teams Deployed</p>
                          </div>
                        </div>
                        <div className="stat-item">
                          <FiCheckCircle className="icon" />
                          <div className="stat-info">
                            <h4>Success Rate</h4>
                            <p>85% Mission Success</p>
                          </div>
                        </div>
                        <div className="stat-item">
                          <FiClock className="icon" />
                          <div className="stat-info">
                            <h4>Response Time</h4>
                            <p>Avg. 2.5 hours</p>
                          </div>
                        </div>
                        <div className="stat-item">
                          <FiAlertTriangle className="icon" />
                          <div className="stat-info">
                            <h4>Critical Alerts</h4>
                            <p>3 Active Alerts</p>
                          </div>
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
