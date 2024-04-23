import { InputGroup, Button, Stack, Form } from "react-bootstrap";
import { FiSearch, FiSend } from "react-icons/fi";

const RequestViewCard = () => {
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
              <Button variant="primary">View Customer Details</Button>
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
    </div>
  );
};

export default RequestViewCard;
