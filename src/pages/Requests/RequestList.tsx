import { useState } from "react";
import { Form, Offcanvas } from "react-bootstrap";
import { FiEye, FiTrash2, FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const RequestList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Mission ID</th>
              <th>Requested By</th>
              <th>Assigned Hero</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Mission Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>MSN1001</td>
              <td>Nick Fury</td>
              <td>Iron Man</td>
              <td>07/01/2024</td>
              <td>
                <span className="badge bg-warning">On Mission</span>
              </td>
              <td>N/A</td>
              <td>
                <div className="actions">
                  <NavLink to="/requests/view" className="btn btnView">
                    <FiEye />
                  </NavLink>
                  <a href="#!" className="btn btnDelete">
                    <FiTrash2 />
                  </a>
                  <a href="#!" className="btn btnComments" onClick={handleShow}>
                    <FiMessageSquare />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>MSN1002</td>
              <td>Nick Fury</td>
              <td>Captain America</td>
              <td>07/01/2024</td>
              <td>
                <span className="badge bg-success">Completed</span>
              </td>
              <td>Mission accomplished</td>
              <td>
                <div className="actions">
                  <NavLink to="/requests/view" className="btn btnView">
                    <FiEye />
                  </NavLink>
                  <a href="#!" className="btn btnDelete">
                    <FiTrash2 />
                  </a>
                  <a href="#!" className="btn btnComments" onClick={handleShow}>
                    <FiMessageSquare />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>MSN1003</td>
              <td>Nick Fury</td>
              <td>Black Widow</td>
              <td>07/01/2024</td>
              <td>
                <span className="badge bg-danger">Failed</span>
              </td>
              <td>Mission failed - target escaped</td>
              <td>
                <div className="actions">
                  <NavLink to="/requests/view" className="btn btnView">
                    <FiEye />
                  </NavLink>
                  <a href="#!" className="btn btnDelete">
                    <FiTrash2 />
                  </a>
                  <a href="#!" className="btn btnComments" onClick={handleShow}>
                    <FiMessageSquare />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Comments Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mission Comments</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default RequestList;
