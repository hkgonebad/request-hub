import { useState } from "react";
import { InputGroup, Button, Stack, Form, Modal } from "react-bootstrap";
import { FiCreditCard, FiFile, FiHome, FiSearch, FiSend, FiUser, FiUsers, FiShield, FiAlertTriangle, FiMapPin } from "react-icons/fi";

const RequestViewCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card rv-card requestView">
      <div className="card-header">
        <form action="">
          <Form.Group controlId="reqid" className="reqId">
            <Form.Label>Mission ID</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Mission ID" defaultValue="MSN1001" />
              <Button variant="outline-primary">
                <FiSearch />
              </Button>
              <Button variant="primary" onClick={handleShow}>
                View Hero Details
              </Button>
            </InputGroup>
          </Form.Group>

          <div className="row">
            <div className="col-md-6">
              <Form.Group className="rvReadonly">
                <Form.Label>Mission Start Date</Form.Label>
                <p>1st January 2024</p>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="rvReadonly">
                <Form.Label>Mission Deadline</Form.Label>
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
              <Form.Label>Hero Name</Form.Label>
              <Form.Control placeholder="Hero Name" defaultValue="Iron Man" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" defaultValue="tony.stark@avengers.com" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control placeholder="Phone" defaultValue="+1-555-0123" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="reqActivity" className="mb-3">
              <Form.Label>Mission Type</Form.Label>
              <Form.Control placeholder="Mission Type" defaultValue="Threat Neutralization" />
            </Form.Group>
          </div>
        </div>

        <Form.Group controlId="reqDetails" className="mb-3">
          <Form.Label>Mission Details</Form.Label>
          <Form.Control placeholder="Mission Details" defaultValue="Neutralize the threat posed by Ultron's remaining drones in the Eastern European region" />
        </Form.Group>

        <Form.Group controlId="reqEvidences" className="mb-3">
          <Form.Label>Mission Intelligence</Form.Label>
          <Form.Control placeholder="Mission Intelligence" defaultValue="Satellite imagery, Drone surveillance data, Local informant reports" />
        </Form.Group>

        <Form.Group controlId="reqTrigger" className="reqTrigger">
          <Form.Label>Send Mission Alert</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select aria-label="Default select example">
              <option defaultValue="0">Select / Enter alert message</option>
              <option defaultValue="1">Send Email Alert</option>
              <option defaultValue="2">Send Text Alert</option>
              <option defaultValue="3">Send Both Email and Text</option>
            </Form.Select>
            <Button variant="primary">
              <FiSend />
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="reqStatus" className="mb-3">
          <Form.Label>Mission Status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option defaultValue="0">Select Status</option>
            <option defaultValue="1">Planning</option>
            <option defaultValue="2">In Progress</option>
            <option defaultValue="3">On Hold</option>
            <option defaultValue="4">Completed</option>
            <option defaultValue="5">Failed</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="reqPriority" className="mb-3">
          <Form.Label>Mission Priority</Form.Label>
          <Form.Select aria-label="Default select example">
            <option defaultValue="0">Select Priority</option>
            <option defaultValue="1">Critical</option>
            <option defaultValue="2">High</option>
            <option defaultValue="3">Medium</option>
            <option defaultValue="4">Low</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="reqTeam" className="mb-3">
          <Form.Label>Assigned Team</Form.Label>
          <Form.Select aria-label="Default select example">
            <option defaultValue="0">Select Team</option>
            <option defaultValue="1">Avengers Core Team</option>
            <option defaultValue="2">New Avengers</option>
            <option defaultValue="3">Young Avengers</option>
            <option defaultValue="4">X-Men</option>
            <option defaultValue="5">Fantastic Four</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="reqLocation" className="mb-3">
          <Form.Label>Mission Location</Form.Label>
          <Form.Control placeholder="Mission Location" defaultValue="Eastern Europe" />
        </Form.Group>

        <Form.Group controlId="reqEquipment" className="mb-3">
          <Form.Label>Required Equipment</Form.Label>
          <Form.Control placeholder="Required Equipment" defaultValue="Mark 85 Armor, Arc Reactor, Repulsor Technology" />
        </Form.Group>

        <Form.Group controlId="reqNotes" className="mb-3">
          <Form.Label>Mission Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Mission Notes"
            defaultValue="Ultron's drones have been spotted in the region. Local authorities are aware but unable to handle the threat. Team should approach with caution as the drones may have new defensive capabilities."
          />
        </Form.Group>

        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button variant="outline-danger">Cancel</Button>
          <Button variant="primary">Update Mission</Button>
        </Stack>
      </div>

      {/* Customer Details Modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Hero Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div className="cdItem">
                <FiUser className="icon" />
                <div className="cdText">
                  <h4>Tony Stark</h4>
                  <span>Iron Man</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cdItem">
                <FiHome className="icon" />
                <div className="cdText">
                  <h4>Stark Tower</h4>
                  <span>New York, USA</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cdItem">
                <FiCreditCard className="icon" />
                <div className="cdText">
                  <h4>Avengers ID</h4>
                  <span>AVG-001</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cdItem">
                <FiUsers className="icon" />
                <div className="cdText">
                  <h4>Team</h4>
                  <span>Avengers Core Team</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cdItem">
                <FiShield className="icon" />
                <div className="cdText">
                  <h4>Specialization</h4>
                  <span>Technology, Combat</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cdItem">
                <FiAlertTriangle className="icon" />
                <div className="cdText">
                  <h4>Threat Level</h4>
                  <span>Level 5</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cdItem">
                <FiMapPin className="icon" />
                <div className="cdText">
                  <h4>Current Location</h4>
                  <span>Avengers Compound</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cdItem">
                <FiFile className="icon" />
                <div className="cdText">
                  <h4>Active Missions</h4>
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RequestViewCard;
