import { Button, Form, InputGroup, Nav, Tab } from "react-bootstrap";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { FiCalendar, FiDownload, FiSearch, FiXCircle } from "react-icons/fi";
import RequestsTable from "../Dashboard/ui/RequestsTable";

const ReportsPage = () => {
  // Event handlers for the cancel and download buttons
  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add your cancel logic here
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add your download logic here
  };

  return (
    <>
      <section className="block pb-0">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              <Breadcrumbs bc="Test" isActive={true} backBtn={true} />
              <h2>View Report</h2>
            </div>

            {/* Forms/Options */}
            <div className="bhForm bhForm-Multi">
              <label htmlFor="appliedFilters" className="bhLabel">
                Applied Filters
              </label>
              <div className="bhfCol">
                <Form.Group controlId="wzForm1" className="form-inline">
                  <Form.Control className="" defaultValue="Request for Deletion" />
                </Form.Group>
                <a className="cancel" onClick={handleCancel} aria-label="Remove filter">
                  <FiXCircle className="icon" />
                </a>
              </div>
              <div className="bhfCol">
                <InputGroup className="">
                  <Form.Control id="dateFilter" placeholder="This Month" />
                  <Button variant="outline">
                    <FiCalendar className="icon" />
                  </Button>
                </InputGroup>
                <a className="cancel" onClick={handleCancel} aria-label="Remove date filter">
                  <FiXCircle className="icon" />
                </a>
              </div>

              <div className="bhfCol">
                <InputGroup className="">
                  <Form.Control id="searchInput" placeholder="Search" />
                  <Button variant="outline">
                    <FiSearch className="icon" />
                  </Button>
                </InputGroup>
              </div>

              <div className="bhfCol">
                <a className="btn btn-link" onClick={handleDownload}>
                  Download
                  <FiDownload className="icon ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block pt-0">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav className="nav-alt" variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  Pending Requests <span>15</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Approved Requests</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Rejected Requests</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="py-3">
              <Tab.Pane eventKey="first">
                <RequestsTable />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <RequestsTable />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <RequestsTable />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          <hr />

          <div className="infoHeader">
            <div className="ihBox">
              <h4>
                Template ID<span>STARK-2024-001</span>
              </h4>
            </div>
            <div className="ihBox">
              <h4>
                Template For<span>Stark Digital</span>
              </h4>
            </div>
            <div className="ihBox">
              <h4>
                Request Raised By<span>Tony Stark</span>
              </h4>
            </div>
            <div className="ihBox">
              <h4>
                Date of Request Raised<span>05/15/2024</span>
              </h4>
            </div>
            <div className="ihBox">
              <h4>
                Comments<span>N/A</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportsPage;
