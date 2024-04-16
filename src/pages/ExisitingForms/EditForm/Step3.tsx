import { Accordion, Form, Button, InputGroup } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";
import { useState } from "react";
import { useWizard } from "react-use-wizard";

const Step3 = () => {
  const { handleStep } = useWizard();
  const [inputValue, setInputValue] = useState("");

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 4");
  });

  // Add notification
  const addNotification = () => {
    if (inputValue.trim()) {
      const newChip = (
        <div className="cnChip" key={inputValue}>
          <span>{inputValue}</span>
          <FiXCircle className="icon" onClick={() => deleteNotification(inputValue)} />
        </div>
      );
      setInputValue("");
      setNotifications((prevNotifications) => [...prevNotifications, newChip]);
    }
  };

  // Delete notification
  const deleteNotification = (value: string) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.key !== value));
  };

  // Notifications state
  const [notifications, setNotifications] = useState([
    // Add more initial notifications here File attachment incorrect
    // Waiting for Inputs
    // Work In Progress
    // Rejected due to Lorem Ipsum reason
    // Accepted, wait for confimation
    // Rejected due to eiusmod tempor reason
    // Rejected due to Duis aute reason
    <div className="cnChip" key="File attachment incorrect">
      <span>File attachment incorrect</span>
      <FiXCircle className="icon" onClick={() => deleteNotification("File attachment incorrect")} />
    </div>,
    <div className="cnChip" key="Waiting for Inputs">
      <span>Waiting for Inputs</span>
      <FiXCircle className="icon" onClick={() => deleteNotification("Waiting for Inputs")} />
    </div>,
    <div className="cnChip" key="Work In Progress">
      <span>Work In Progress</span>
      <FiXCircle className="icon" onClick={() => deleteNotification("Work In Progress")} />
    </div>,
    <div className="cnChip" key="Rejected due to Lorem Ipsum reason">
      <span>Rejected due to Lorem Ipsum reason</span>
      <FiXCircle className="icon" onClick={() => deleteNotification("Rejected due to Lorem Ipsum reason")} />
    </div>,
    <div className="cnChip" key="Accepted, wait for confimation">
      <span>Accepted, wait for confimation</span>
      <FiXCircle className="icon" onClick={() => deleteNotification("Accepted, wait for confimation")} />
    </div>,
    <div className="cnChip" key="Rejected due to eiusmod tempor reason">
      <span>Rejected due to eiusmod tempor reason</span>
      <FiXCircle className="icon" onClick={() => deleteNotification("Rejected due to eiusmod tempor reason")} />
    </div>,
    <div className="cnChip" key="Rejected due to Duis aute reason">
      <span>Rejected due to Duis aute reason</span>
      <FiXCircle className="icon" onClick={() => deleteNotification("Rejected due to Duis aute reason")} />
    </div>,
  ]);

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Custom Notifications</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <div className="cNotifications">
                <InputGroup className="mb-3">
                  <Form.Control
                    onClick={(e) => e.currentTarget.select()}
                    placeholder=""
                    id="cnInput"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button variant="primary" id="cnNotification" onClick={addNotification}>
                    Add New Field
                  </Button>
                </InputGroup>

                <h4>Existing Notification</h4>
                <div className="cnChips">{notifications}</div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Step3;
