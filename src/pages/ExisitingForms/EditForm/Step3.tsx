import { Accordion, Form, Button, InputGroup, Offcanvas, ListGroup } from "react-bootstrap";
import { FiXCircle, FiPackage, FiTool, FiDroplet } from "react-icons/fi";
import { useState } from "react";
import { useWizard } from "react-use-wizard";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Resource Data
const resourceData = ["Iron Man Suit Mark 85", "Vibranium Shield", "Mjolnir", "Infinity Gauntlet", "Tesseract", "Eye of Agamotto", "Pym Particles"];

// Create a Resource component
const Resource = ({ text, handleShow, deleteResource }: { text: string; handleShow: () => void; deleteResource: (value: string) => void }) => (
  <div className="cnChip" key={text}>
    <span onClick={handleShow}>{text}</span>
    <FiXCircle className="icon" onClick={() => deleteResource(text)} />
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
    alert("Resource allocation confirmed");
  });

  // Add resource
  const addResource = () => {
    if (inputValue.trim()) {
      setInputValue("");
      setResources((prevResources) => [...prevResources, inputValue]);
    }
  };

  // Delete resource
  const deleteResource = (value: string) => {
    setResources((prevResources) => prevResources.filter((resource) => resource !== value));
  };

  // Resources state
  const [resources, setResources] = useState(resourceData);

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Resource Allocation</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <div className="cNotifications">
                <h4>Available Resources</h4>
                <div className="cnChips mb-4">
                  {resources.map((resource) => (
                    <Resource key={resource} text={resource} handleShow={handleShow} deleteResource={deleteResource} />
                  ))}
                </div>

                {/* Resource Categories */}
                <ListGroup className="mb-3">
                  <ListGroup.Item>
                    <FiPackage className="icon" /> Equipment
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FiTool className="icon" /> Tools
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FiDroplet className="icon" /> Consumables
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FiPackage className="icon" /> Special Items
                  </ListGroup.Item>
                </ListGroup>

                {/* Add Resource */}
                <InputGroup className="mb-3">
                  <Form.Control onClick={(e) => e.currentTarget.select()} placeholder="Add New Resource" id="cnInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                  <Button variant="primary" id="cnNotification" onClick={addResource}>
                    Add
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Add Resource Details */}
      <Offcanvas show={show} onHide={handleClose} placement="bottom" name="Resource Details">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Resource Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Group className="mb-3">
            <Form.Label>Resource Name</Form.Label>
            <Form.Control type="text" placeholder="Enter resource name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Resource Description</Form.Label>
            <ReactQuill theme="snow" />
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
