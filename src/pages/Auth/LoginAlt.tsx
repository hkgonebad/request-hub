import { useState } from "react";

import logo from "@/assets/img/logos/reliance-retail.svg";
import { Stack, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { FiRefreshCcw } from "react-icons/fi";

const LoginAlt = () => {
  const [otp, setOtp] = useState("");

  return (
    <section className="login loginAlt">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-md-8">
            <div className="loginHero mb-3">
              <h4>Welcome To</h4>
              <h2>Data Subject Rights (DSR) Platform</h2>
              <p>
                Reliance Industries Limited and its subsidiaries (which together comprise “RIL”), are committed to
                meeting legal and regulatory requirements regarding data protection and privacy where it conducts its
                business activities. We at Reliance Industries Limited (RIL) respect your data principal rights. In
                accordance with applicable legal requirements, RIL will provide opportunity to exercise data subject
                rights, which are available to the individuals in the context of their engagement with RIL. Such rights
                may include the right to request access to their personal data, to correct inaccurate or incomplete
                personal data or to object to the processing of their personal data.
              </p>

              <p>
                Each Data Subject Request is validated and tracked to closure. As per the applicable law, and the
                engagement of data subject with RIL, there might be other rights available such as right to be
                forgotten, right to withdraw consent, right to data portability, etc.
              </p>

              <p>
                RIL will ensure its compliance and deploy all required measures to help data subjects exercise their
                rights granted. These rights empower individuals to have greater control over their personal data and
                ensure that their privacy is respected.
              </p>

              <h4>For Any Query Regarding DSR platform, Contact Us on :</h4>
              <h3>+91 - 9867-421-000 / +91 - 9867-422-111 </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="loginForm">
              <img src={logo} alt="" />

              <form action="">
                <Form.Group className="d-flex align-items-center gap-2 form-group mb-3" controlId="wzForm1">
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

                <div className="form-group mb-3">
                  <input type="text" className="form-control" name="mobile" placeholder="Mobile Number" />
                </div>
                <div className="form-group mb-3">
                  <input type="email" className="form-control" name="email" placeholder="Email ID" />
                </div>
                <div className="form-group mb-1 text-end forgotText">
                  <Link to="" className="text-warning">
                    Forgot Password ?
                  </Link>
                </div>

                <Form.Group className="form-group formOtp form-group mb-3" controlId="wzForm3">
                  <label htmlFor="" className="me-auto otpLabel">
                    OTP Validation
                  </label>
                  <a href="#!" className="otpResend">
                    Resend OTP
                  </a>
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

                <Form.Group className="d-flex align-items-center gap-2 form-group captcha form-group mb-3">
                  <InputGroup className="">
                    <InputGroup.Text id="basic-addon1" className="captchaImg">
                      <img src="https://via.placeholder.com/35" alt="" />
                    </InputGroup.Text>
                    <Form.Control placeholder="Enter Captcha" />
                    <Button variant="primary" id="refreshCaptcha">
                      <FiRefreshCcw />
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Stack direction="horizontal" gap={2} className="btns ">
                  <Link to="/home" className="btn btn-primary w-100">
                    Proceed
                  </Link>
                </Stack>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginAlt;
