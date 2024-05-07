import { Button, Form, InputGroup, Nav, Tab } from "react-bootstrap";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { FiCalendar, FiDownload, FiSearch, FiXCircle } from "react-icons/fi";
import RequestsTable from "../Dashboard/ui/RequestsTable";

const ReportsPage = () => {
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
              <label htmlFor="" className="bhLabel">
                Applied Filters
              </label>
              <div className="bhfCol">
                <Form.Group controlId="wzForm1" className="form-inline">
                  <Form.Control className="" defaultValue="Request for Deletion" />
                </Form.Group>
                <a href="#!" className="cancel">
                  <FiXCircle className="icon" />
                </a>
              </div>
              <div className="bhfCol">
                <InputGroup className="">
                  <Form.Control placeholder="This Month" />
                  <Button variant="outline">
                    <FiCalendar className="icon" />
                  </Button>
                </InputGroup>
                <a href="#!" className="cancel">
                  <FiXCircle className="icon" />
                </a>
              </div>

              <div className="bhfCol">
                <InputGroup className="">
                  <Form.Control placeholder="Search" />
                  <Button variant="outline">
                    <FiSearch className="icon" />
                  </Button>
                </InputGroup>
              </div>

              <div className="bhfCol">
                <a href="#!" className="btn btn-link">
                  Download
                  <FiDownload className="icon" />
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
                  Pending Requests <span>12</span>
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
                Template ID<span>12345</span>
              </h4>
            </div>
            <div className="ihBox">
              <h4>
                Template For<span>Reliance Digital</span>
              </h4>
            </div>
            <div className="ihBox">
              <h4>
                Request Raised By<span>Priyanka Mohan</span>
              </h4>
            </div>
            <div className="ihBox">
              <h4>
                Date of Request Raised<span>12/01/2024</span>
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
