import { Accordion } from "react-bootstrap";

import { useWizard } from "react-use-wizard";

const Step5 = () => {
  const { handleStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Finish ?");
  });

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Preview Form</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <div className="successMessage row align-items-center">
                <div className="smImg col-md-5">
                  <img src="/src/assets/img/success.png" alt="" />
                </div>
                <div className="smContent col-md-7">
                  <h3>Success</h3>
                  <p>
                    Request <b className="text-primary">ID 12345</b> has been raised Successfully !!!
                  </p>
                  <b>Wait for checker’s confirmation.</b>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Step5;
