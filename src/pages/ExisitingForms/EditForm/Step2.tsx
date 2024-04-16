import { SubBusinessUnit } from "@/models/interfaces";
import { Accordion, Card, Form, Stack } from "react-bootstrap";
import { FiUploadCloud } from "react-icons/fi";
import { useWizard } from "react-use-wizard";

const Step2 = ({ item }: { item: SubBusinessUnit }) => {
  const { handleStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 3");
  });

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Logo</Accordion.Header>
          <Accordion.Body>
            {/* 1 */}
            <div className="wzItem wzItemWell">
              <div className="row">
                <div className="col-md-4">
                  <Card className="dc-card">
                    <Card.Header>
                      <h4>Logo Files</h4>
                    </Card.Header>
                    <Card.Body>
                      <div className="card-image">
                        <img src={item.img} alt="" />
                      </div>
                      <hr />
                      {/* BRowse Files Button with icon */}
                      <Stack direction="horizontal">
                        <FiUploadCloud className="icon" />
                        <input type="file" className="form-control" />
                      </Stack>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-md-4">
                  <Card className="dc-card">
                    <Card.Header>
                      <h4>Logo Alignment</h4>
                    </Card.Header>
                    <Card.Body>
                      <Form.Group controlId="wzForm1" className="form-check-inline">
                        <Form.Check inline type="radio" name="logoAlignment" label="Left" id="logoLeft" />
                        <Form.Check inline type="radio" name="logoAlignment" label="Center" id="logoCenter" />
                        <Form.Check inline type="radio" name="logoAlignment" label="Right" id="logoRight" />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-md-4">
                  <Card className="dc-card">
                    <Card.Header>
                      <h4>Color Theme</h4>
                    </Card.Header>
                    <Card.Body>
                      <Form.Group controlId="wzForm1" className="">
                        <Form.Select aria-label="Default select example">
                          <option>Choose Color</option>
                          <option value="1">Red</option>
                          <option value="2">Blue</option>
                          <option value="3">Green</option>
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
