import { Form, Stack } from "react-bootstrap";

const CreateUnit = () => {
  return (
    <>
      <section className="block blockTitle pt-0">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              <h2>Create New Mission</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="block pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Name</Form.Label>
                <Form.Control type="text" placeholder="Enter mission name" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Description</Form.Label>
                <Form.Control type="text" placeholder="Enter mission description" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Type</Form.Label>
                <Form.Select aria-label="Select mission type">
                  <option>Select Type</option>
                  <option value="1">Rescue</option>
                  <option value="2">Combat</option>
                  <option value="3">Intelligence</option>
                  <option value="4">Defense</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Category</Form.Label>
                <Form.Select aria-label="Select mission category">
                  <option>Select Category</option>
                  <option value="1">Earth Defense</option>
                  <option value="2">Space Operations</option>
                  <option value="3">Multiverse Protection</option>
                  <option value="4">Special Investigations</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Threat Level</Form.Label>
                <Form.Select aria-label="Select threat level">
                  <option>Select Threat Level</option>
                  <option value="1">Level 1 - Minor Threat</option>
                  <option value="2">Level 2 - Moderate Threat</option>
                  <option value="3">Level 3 - Major Threat</option>
                  <option value="4">Level 4 - Global Threat</option>
                  <option value="5">Level 5 - Multiversal Threat</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Priority</Form.Label>
                <Form.Select aria-label="Select mission priority">
                  <option>Select Priority</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                  <option value="4">Critical</option>
                </Form.Select>
              </Form.Group>
            </div>
            {/* Mission logo, Contact, Base Location, etc */}
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Logo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Leader</Form.Label>
                <Form.Control type="text" placeholder="Enter mission leader name" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Mission Location</Form.Label>
                <Form.Control type="text" placeholder="Enter mission location" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Launch Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Estimated Duration</Form.Label>
                <Form.Control type="text" placeholder="e.g., 48 hours" />
              </Form.Group>
            </div>
          </div>

          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <button className="btn btn-outline-danger">Cancel</button>
            <button className="btn btn-primary">Create Mission</button>
          </Stack>
        </div>
      </section>
    </>
  );
};

export default CreateUnit;
