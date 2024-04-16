import { Accordion, Form, Button, InputGroup } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";
import { useWizard } from "react-use-wizard";

const Step3 = () => {
  const { handleStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 4");
  });

  // Delete notification
  const deleteNotification = (e) => {
    const chip = e.target.closest(".cnChip");
    if (chip) {
      chip.remove();
    }
  };

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Custom Notifications</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <div className="cNotifications">
                <InputGroup className="mb-3">
                  <Form.Control />
                  <Button variant="primary" id="cnNotification">
                    Add New Field
                  </Button>
                </InputGroup>

                <h4>Existing Notification</h4>
                <div className="cnChips">
                  <div className="cnChip">
                    <span>File attachment incorrect</span>
                    <FiXCircle className="icon" onClick={deleteNotification} />
                  </div>
                  <div className="cnChip">
                    <span>Waiting for Inputs</span>
                    <FiXCircle className="icon" onClick={deleteNotification} />
                  </div>
                  <div className="cnChip">
                    <span>Work In Progress</span>
                    <FiXCircle className="icon" onClick={deleteNotification} />
                  </div>
                  <div className="cnChip">
                    <span>Rejected due to Lorem Ipsum reason</span>
                    <FiXCircle className="icon" onClick={deleteNotification} />
                  </div>
                  <div className="cnChip">
                    <span>Accepted, wait for confimation</span>
                    <FiXCircle className="icon" onClick={deleteNotification} />
                  </div>
                  <div className="cnChip">
                    <span>Rejected due to eiusmod tempor reason</span>
                    <FiXCircle className="icon" onClick={deleteNotification} />
                  </div>
                  <div className="cnChip">
                    <span>Rejected due to Duis aute reason</span>
                    <FiXCircle className="icon" onClick={deleteNotification} />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Step3;
