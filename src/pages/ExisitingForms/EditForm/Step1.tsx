import { useState } from "react";
import { Accordion, Button, Form, Modal, Stack } from "react-bootstrap";
import { FiEdit, FiMove, FiTrash2 } from "react-icons/fi";
import { useWizard } from "react-use-wizard";

const Step1 = () => {
  const { handleStep } = useWizard();
  const [show, setShow] = useState(false);

  // Attach an optional handler
  handleStep(() => {
    alert("Proceeding to Team Assignment");
  });

  // Modal
  const handleClose = () => setShow(false);

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Mission Parameters</Accordion.Header>
          <Accordion.Body>
            {/* 1 */}
            <Stack className="wzItem" direction="horizontal" gap={2}>
              <FiMove className="icon dragIcon" />
              <span>1</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="missionType">
                <label className="me-auto">Mission Type</label>
                <input type="radio" className="btn-check" name="missionType" id="missionTypeRescue" />
                <label className="btn btn-info btn-check-toggle" htmlFor="missionTypeRescue">
                  Rescue
                </label>
                <input type="radio" className="btn-check" name="missionType" id="missionTypeCombat" />
                <label className="btn btn-info btn-check-toggle" htmlFor="missionTypeCombat">
                  Combat
                </label>
                <input type="radio" className="btn-check" name="missionType" id="missionTypeIntelligence" />
                <label className="btn btn-info btn-check-toggle" htmlFor="missionTypeIntelligence">
                  Intelligence
                </label>
              </Form.Group>

              {/*  */}
              <Stack className="actionBtns ms-auto" direction="horizontal" gap={2}>
                <a href="#!" className="btn btnEdit text-success">
                  <FiEdit />
                </a>
                <a href="#!" className="btn btnDelete text-danger">
                  <FiTrash2 />
                </a>
              </Stack>
            </Stack>

            {/* 2 */}
            <Stack className="wzItem" direction="horizontal" gap={2}>
              <FiMove className="icon dragIcon" />
              <span>2</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="threatLevel">
                <label className="me-auto">Threat Level</label>
                <Form.Select aria-label="Select threat level">
                  <option>Select Threat Level</option>
                  <option value="1">Level 1 - Minor Threat</option>
                  <option value="2">Level 2 - Moderate Threat</option>
                  <option value="3">Level 3 - Major Threat</option>
                  <option value="4">Level 4 - Global Threat</option>
                  <option value="5">Level 5 - Multiversal Threat</option>
                </Form.Select>
              </Form.Group>

              {/*  */}
              <Stack className="actionBtns ms-auto" direction="horizontal" gap={2}>
                <a href="#!" className="btn btnEdit text-success">
                  <FiEdit />
                </a>
                <a href="#!" className="btn btnDelete text-danger">
                  <FiTrash2 />
                </a>
              </Stack>
            </Stack>

            {/* 3 */}
            <Stack className="wzItem" direction="horizontal" gap={2}>
              <FiMove className="icon dragIcon" />
              <span>3</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="missionLocation">
                <label className="me-auto">Mission Location</label>
                <Form.Select aria-label="Select mission location">
                  <option>Select Location</option>
                  <option value="1">New York City</option>
                  <option value="2">Los Angeles</option>
                  <option value="3">London</option>
                  <option value="4">Tokyo</option>
                  <option value="5">Wakanda</option>
                  <option value="6">Space</option>
                  <option value="7">Other Dimension</option>
                </Form.Select>
              </Form.Group>

              {/*  */}
              <Stack className="actionBtns ms-auto" direction="horizontal" gap={2}>
                <a href="#!" className="btn btnEdit text-success">
                  <FiEdit />
                </a>
                <a href="#!" className="btn btnDelete text-danger">
                  <FiTrash2 />
                </a>
              </Stack>
            </Stack>

            {/* 4 */}
            <Stack className="wzItem" direction="horizontal" gap={2}>
              <FiMove className="icon dragIcon" />
              <span>4</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="missionPriority">
                <label className="me-auto">Mission Priority</label>
                <Form.Select aria-label="Select mission priority">
                  <option>Select Priority</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                  <option value="4">Critical</option>
                </Form.Select>
              </Form.Group>

              {/*  */}
              <Stack className="actionBtns ms-auto" direction="horizontal" gap={2}>
                <a href="#!" className="btn btnEdit text-success">
                  <FiEdit />
                </a>
                <a href="#!" className="btn btnDelete text-danger">
                  <FiTrash2 />
                </a>
              </Stack>
            </Stack>

            {/* 5 */}
            <Stack className="wzItem" direction="horizontal" gap={2}>
              <FiMove className="icon dragIcon" />
              <span>5</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="missionDescription">
                <label className="me-auto">Mission Description</label>
                <Form.Control as="textarea" rows={3} placeholder="Enter mission details" />
              </Form.Group>

              {/*  */}
              <Stack className="actionBtns ms-auto" direction="horizontal" gap={2}>
                <a href="#!" className="btn btnEdit text-success">
                  <FiEdit />
                </a>
                <a href="#!" className="btn btnDelete text-danger">
                  <FiTrash2 />
                </a>
              </Stack>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Field Label</Form.Label>
              <Form.Control type="text" placeholder="Enter field label" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Field Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Field Type</option>
                <option value="1">Text</option>
                <option value="2">Number</option>
                <option value="3">Date</option>
                <option value="4">Select</option>
                <option value="5">Radio</option>
                <option value="6">Checkbox</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Step1;
