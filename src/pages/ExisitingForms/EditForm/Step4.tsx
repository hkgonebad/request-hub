import { Accordion, Card, ListGroup } from "react-bootstrap";
import { useWizard } from "react-use-wizard";
import { FiUsers, FiZap, FiPackage, FiMapPin, FiClock } from "react-icons/fi";

const Step4 = () => {
  const { handleStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Mission preview confirmed");
  });

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Mission Preview</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <Card className="mb-4">
                <Card.Header>
                  <h4>Mission Overview</h4>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <FiMapPin className="icon" /> Location: New York City
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <FiClock className="icon" /> Duration: 48 hours
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <FiZap className="icon" /> Threat Level: Gamma (World Level)
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Header>
                  <h4>
                    <FiUsers className="icon" /> Assigned Teams
                  </h4>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Primary: Avengers</ListGroup.Item>
                    <ListGroup.Item>Support: S.H.I.E.L.D. Agents</ListGroup.Item>
                    <ListGroup.Item>Backup: Wakandan Forces</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  <h4>
                    <FiPackage className="icon" /> Allocated Resources
                  </h4>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Iron Man Suit Mark 85</ListGroup.Item>
                    <ListGroup.Item>Vibranium Shield</ListGroup.Item>
                    <ListGroup.Item>Mjolnir</ListGroup.Item>
                    <ListGroup.Item>Infinity Gauntlet</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Step4;
