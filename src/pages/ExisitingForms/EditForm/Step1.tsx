import { useState } from "react";
import { Accordion, Form, InputGroup, Stack } from "react-bootstrap";
import { FiEdit, FiMove, FiTrash2 } from "react-icons/fi";
import { useWizard } from "react-use-wizard";
import OtpInput from "react-otp-input";

const Step1 = () => {
  const { handleStep } = useWizard();
  const [otp, setOtp] = useState("");

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 2");
  });

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
                <button className="btn btn-primary">Add New Field</button>
              </Stack>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Form Fields</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor sit amet</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Step1;
