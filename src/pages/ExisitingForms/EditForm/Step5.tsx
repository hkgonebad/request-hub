import { Accordion } from "react-bootstrap";

import { useWizard } from "react-use-wizard";

const Step5 = () => {
  const { handleStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Mission Launch Confirmed");
  });

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Mission Launch Confirmation</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <div className="successMessage row align-items-center">
                <div className="smImg col-md-5">
                  <img src="/src/assets/img/success.png" alt="" />
                </div>
                <div className="smContent col-md-7  successText">
                  <h3>Mission Ready</h3>
                  <p>
                    Mission <b className="text-primary">STARK-1001</b> has been successfully configured and is ready for launch!
                  </p>
                  <b>Awaiting final authorization from S.H.I.E.L.D. Director.</b>
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
