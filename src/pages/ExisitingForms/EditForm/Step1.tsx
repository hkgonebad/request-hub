import { useState } from "react";
import { Accordion, Button, Form, InputGroup, Modal, Stack } from "react-bootstrap";
import { FiEdit, FiMove, FiTrash2 } from "react-icons/fi";
import { useWizard } from "react-use-wizard";
import OtpInput from "react-otp-input";

const Step1 = () => {
  const { handleStep } = useWizard();
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 2");
  });

  // Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Mandatory Fields for User Validation </Accordion.Header>
          <Accordion.Body>
            {/* 1 */}
            <Stack className="wzItem" direction="horizontal" gap={2}>
              <FiMove className="icon dragIcon" />
              <span>1</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="wzForm1">
                <label htmlFor="" className="me-auto">
                  Select User
                </label>
                <input type="radio" className="btn-check" name="options" id="option1" />
                <label className="btn btn-info btn-check-toggle" htmlFor="option1">
                  Customer
                </label>
                <input type="radio" className="btn-check" name="options" id="option2" />
                <label className="btn btn-info btn-check-toggle" htmlFor="option2">
                  Employee
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
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="wzForm1">
                <Form.Control placeholder="Enter Mobile Number" />
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
              <span>4</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="wzForm3">
                <Form.Control placeholder="Enter Email Id" />
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
              <span>5</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="wzForm3">
                <label htmlFor="" className="me-auto">
                  OTP Validation
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  skipDefaultStyles={true}
                  containerStyle="otpInput"
                  inputType="text"
                  renderInput={(props) => <input {...props} className="form-control" />}
                />
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
              <span>6</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group captcha">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1" className="captchaImg">
                    <img src="https://via.placeholder.com/35" alt="" />
                  </InputGroup.Text>
                  <Form.Control placeholder="Enter Captcha" />
                </InputGroup>
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

            {/* 6 */}
            <Stack className="wzItem" direction="horizontal" gap={2}>
              <FiMove className="icon dragIcon" />
              <span>7</span>
              <Form.Group className="d-flex align-items-center gap-2 form-group" controlId="wzForm3">
                <Form.Select aria-label="Default select example">
                  <option>Select From Pre-defined Field </option>
                  <option value="1">Customer</option>
                  <option value="2">Employee</option>
                </Form.Select>
                <label htmlFor="">Or</label>
                <Form.Control placeholder="Customize" />
              </Form.Group>

              {/*  */}
              <Stack className="actionBtns ms-auto" direction="horizontal" gap={2}>
                <button className="btn btn-primary" onClick={handleShow}>
                  Add New Field
                </button>
              </Stack>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Form Fields</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="formModal">
        <Modal.Header closeButton>
          <Modal.Title>Add New Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addField">
            <Form.Group className="mb-3" controlId="formBasicList">
              <Form.Label>Predefined List</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Predefined List</option>
                <option value="1">Customer</option>
                <option value="2">Employee</option>
              </Form.Select>
            </Form.Group>
            <div className="text-center">
              <h5>Or Create New (Customize)</h5>
            </div>

            <div className="row">
              <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Field Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter Field Title" />
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Field Title</Form.Label>
                  <br />
                  <Form.Check type="radio" inline label="Optional" name="addfield" id="afo" />
                  <Form.Check type="radio" inline label="Mandatory" name="addfield" id="afm" />
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3" controlId="formBasicType">
                  <Form.Label>Input Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Dropdown Checklist</option>
                    <option value="1">Text</option>
                    <option value="2">Number</option>
                    <option value="3">Email</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-danger" onClick={handleClose}>
            Cancel
          </button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Step1;
