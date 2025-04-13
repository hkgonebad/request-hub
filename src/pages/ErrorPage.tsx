import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";

const ErrorPage = () => {
  const error: unknown = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "You are not worthy!";
  }

  return (
    <Container fluid className="error-page-container p-0">
      <Row className="flex-wrapper no-pad g-0">
        <Col md={6} className="flex-col">
          <div className="error-copy p-5">
            <h1 className="display-4 fw-bold mb-4">404</h1>
            <h4 className="dynamic-msg mb-3 text-uppercase">Whosoever holds this hammer...</h4>
            <p className="lead mb-4">
              {errorMessage}
              <br />
              Perhaps you should try a different path, mortal.
            </p>
            <div className="d-flex gap-3">
              <Button href="/" variant="primary" className="d-flex align-items-center gap-2 btn-marvel">
                <FiArrowLeft /> Return to Earth (Home)
              </Button>
            </div>
          </div>
        </Col>
        <Col md={6} className="flex-col no-pad toAnimate">
          <div className="error-image-animate">
            <div className="lightning-overlay"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
