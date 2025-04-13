import { SubBusinessUnit } from "@/models/interfaces";
import { Accordion, Card, Form } from "react-bootstrap";
import { FiUsers, FiShield, FiZap } from "react-icons/fi";
import { useWizard } from "react-use-wizard";

const Step2 = ({ item }: { item: SubBusinessUnit }) => {
  const { handleStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Team assignment confirmed");
  });

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Team Assignment</Accordion.Header>
          <Accordion.Body>
            {/* 1 */}
            <div className="wzItem wzItemWell">
              <div className="row">
                <div className="col-md-4">
                  <Card className="dc-card">
                    <Card.Header>
                      <h4>
                        <FiUsers className="icon" /> Primary Team
                      </h4>
                    </Card.Header>
                    <Card.Body>
                      <div className="card-image">
                        <img src={item.img} alt="Team Avatar" />
                      </div>
                      <hr />
                      <Form.Group controlId="primaryTeam">
                        <Form.Select aria-label="Select primary team">
                          <option>Select Primary Team</option>
                          <option value="1">Avengers</option>
                          <option value="2">X-Men</option>
                          <option value="3">Fantastic Four</option>
                          <option value="4">Guardians of the Galaxy</option>
                        </Form.Select>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-md-4">
                  <Card className="dc-card">
                    <Card.Header>
                      <h4>
                        <FiShield className="icon" /> Support Team
                      </h4>
                    </Card.Header>
                    <Card.Body>
                      <Form.Group controlId="supportTeam" className="form-check-inline">
                        <Form.Check inline type="checkbox" label="S.H.I.E.L.D. Agents" id="shield" />
                        <Form.Check inline type="checkbox" label="Wakandan Forces" id="wakanda" />
                        <Form.Check inline type="checkbox" label="Asgardian Warriors" id="asgard" />
                        <Form.Check inline type="checkbox" label="Sorcerers" id="sorcerers" />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-md-4">
                  <Card className="dc-card">
                    <Card.Header>
                      <h4>
                        <FiZap className="icon" /> Power Level
                      </h4>
                    </Card.Header>
                    <Card.Body>
                      <Form.Group controlId="powerLevel" className="">
                        <Form.Select aria-label="Select power level">
                          <option>Choose Power Level</option>
                          <option value="1">Alpha (Street Level)</option>
                          <option value="2">Beta (City Level)</option>
                          <option value="3">Gamma (World Level)</option>
                          <option value="4">Omega (Cosmic Level)</option>
                        </Form.Select>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Step2;
