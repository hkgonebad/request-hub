import { Accordion, Form, Button, InputGroup, Offcanvas, ListGroup } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";
import { useState } from "react";
import { useWizard } from "react-use-wizard";

// Notification Data
const notificationData = [
  "File attachment incorrect",
  "Waiting for Inputs",
  "Work In Progress",
  "Rejected due to Lorem Ipsum reason",
  "Accepted, wait for confimation",
  "Rejected due to eiusmod tempor reason",
  "Rejected due to Duis aute reason",
];

// Create a Notification component
const Notification = ({
  text,
  handleShow,
  deleteNotification,
}: {
  text: string;
  handleShow: () => void;
  deleteNotification: (value: string) => void;
}) => (
  <div className="cnChip" key={text}>
    <span onClick={handleShow}>{text}</span>
    <FiXCircle className="icon" onClick={() => deleteNotification(text)} />
  </div>
);

const Step3 = () => {
  const { handleStep } = useWizard();
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 4");
  });

  // Add notification
  const addNotification = () => {
    if (inputValue.trim()) {
      setInputValue("");
      setNotifications((prevNotifications) => [...prevNotifications, inputValue]);
    }
  };

  // Delete notification
  const deleteNotification = (value: string) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification !== value));
  };

  // Notifications state
  const [notifications, setNotifications] = useState(notificationData);

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Custom Notifications</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <div className="cNotifications">
                <h4>Existing Notification</h4>
                <div className="cnChips mb-4">
                  {notifications.map((notification) => (
                    <Notification
                      key={notification}
                      text={notification}
                      handleShow={handleShow}
                      deleteNotification={deleteNotification}
                    />
                  ))}
                </div>

                {/* Notification Comments */}
                <ListGroup className="mb-3">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>

                {/* Add Field */}
                <InputGroup className="mb-3">
                  <Form.Control
                    onClick={(e) => e.currentTarget.select()}
                    placeholder="Add New Notification"
                    id="cnInput"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button variant="primary" id="cnNotification" onClick={addNotification}>
                    Add
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Add Comment */}
      <Offcanvas show={show} onHide={handleClose} placement="bottom" name="Add Comment">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Comment</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Text Field to appear on Click of any Notification */}
          <Form.Group className="mb-3">
            <Form.Label>Notification Text</Form.Label>
            <Form.Control as="textarea" rows={4} type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 text-end">
            <button className="btn btn-primary">Save</button>
          </Form.Group>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Step3;
