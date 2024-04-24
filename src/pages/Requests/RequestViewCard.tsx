import { useState } from "react";
import { InputGroup, Button, Stack, Form, Modal } from "react-bootstrap";
import { FiCreditCard, FiFile, FiHome, FiSearch, FiSend, FiUser, FiUsers } from "react-icons/fi";

const RequestViewCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card rv-card requestView">
      <div className="card-header">
        <form action="">
          <Form.Group controlId="reqid" className="reqId">
            <Form.Label>Request ID</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Request ID" defaultValue="RDRR1001" />
              <Button variant="outline-primary">
                <FiSearch />
              </Button>
              <Button variant="primary" onClick={handleShow}>
                View Customer Details
              </Button>
            </InputGroup>
          </Form.Group>

          <div className="row">
            <div className="col-md-6">
              <Form.Group className="rvReadonly">
                <Form.Label>Start Date</Form.Label>
                <p>1st January 2024</p>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="rvReadonly">
                <Form.Label>SLA Deadline</Form.Label>
                <p>
                  1st January 2024 - <span className="text-danger">10 Days left</span>
                </p>
              </Form.Group>
            </div>
          </div>
        </form>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control placeholder="Customer Name" defaultValue="Shailesh Naik" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" defaultValue="shailesh.naik123@xyzmail.com" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control placeholder="Phone" defaultValue="8973928392" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="reqActivity" className="mb-3">
              <Form.Label>Requested Activity</Form.Label>
              <Form.Control placeholder="Requested Activity" defaultValue="Delete My information" />
            </Form.Group>
          </div>
        </div>

        <Form.Group controlId="reqDetails" className="mb-3">
          <Form.Label>Request Details</Form.Label>
          <Form.Control placeholder="Request Details" defaultValue="Delete my details from the database" />
        </Form.Group>

        <Form.Group controlId="reqEvidences" className="mb-3">
          <Form.Label>Attached Evidences</Form.Label>
          <Form.Control placeholder="Attached Evidences" defaultValue="Lorem.jpg, ipsum.pdf" />
        </Form.Group>

        <Form.Group controlId="reqTrigger" className="reqTrigger">
          <Form.Label>Trigger the Customer Notification</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select aria-label="Default select example">
              <option defaultValue="0">Select / Enter notification message</option>
              <option defaultValue="1">Send Email</option>
              <option defaultValue="2">Send SMS</option>
              <option defaultValue="3">Send Email and SMS</option>
            </Form.Select>
            <Button variant="primary">
              <FiSend />
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="reqStatus" className="mb-3">
          <Form.Label>BIRM Validation Status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option defaultValue="1">Send for validation to IRM Team</option>
            <option defaultValue="2">Approved</option>
            <option defaultValue="3">Rejected</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="reqComments" className="mb-3">
          <Form.Label>BIRM Comments</Form.Label>
          <Form.Control as="textarea" placeholder="Type your comment here..." defaultValue="" rows={4} />
        </Form.Group>
      </div>

      <div className="card-footer">
        <Stack direction="horizontal" gap={2} className="justify-content-end ">
          <button className="btn btn-outline-primary">On-Hold</button>
          <button className="btn btn-outline-primary">Reject</button>
          <button className="btn btn-primary">Approved</button>
        </Stack>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" className="customerReportModal">
        <Modal.Header closeButton>
          <Modal.Title>Customer data principal report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="crDetails">
            <div className="row">
              <div className="col-md-3">
                <div className="cr-card ">
                  <div className="cr-body">
                    <FiUser className="icon" />
                    <h5>Customer Contact Information</h5>
                  </div>
                  <div className="cr-footer">
                    <p>Sai Aashish</p>
                    <p>7309874501</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="cr-card">
                  <div className="cr-body">
                    <FiUsers className="icon" />
                    <h5>Demographic Details Age</h5>
                  </div>
                  <div className="cr-footer">
                    <p>Male</p>
                    <p>27 Yrs</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="cr-card">
                  <div className="cr-body">
                    <FiHome className="icon" />
                    <h5>Residential Address Information</h5>
                  </div>
                  <div className="cr-footer">
                    <p>7-80/2/24, MIDC Industrial Area, Ghansoli, Navi Mumbai, Maharashtra 400701</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="cr-card">
                  <div className="cr-body">
                    <FiCreditCard className="icon" />
                    <h5>Financial Information</h5>
                  </div>
                  <div className="cr-footer">
                    <p>
                      <span>Credit card number</span>41XX XXXX XXXX XX00
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="cr-card">
                  <div className="cr-body">
                    <FiFile className="icon" />
                    <h5>National Identifiers</h5>
                  </div>
                  <div className="cr-footer">
                    <p>
                      <span>Aadhaar Card</span>XXXX XXXX 2122
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RequestViewCard;
