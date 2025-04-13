import { Form, Stack } from "react-bootstrap";

const CreateUnit = () => {
  return (
    <>
      <section className="block blockTitle pt-0">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              <h2>Create New Team</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="block pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Name</Form.Label>
                <Form.Control type="text" placeholder="Enter team name" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Description</Form.Label>
                <Form.Control type="text" placeholder="Enter team description" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Type</Form.Label>
                <Form.Select aria-label="Select team type">
                  <option>Select Type</option>
                  <option value="1">Main Team</option>
                  <option value="2">Special Ops</option>
                  <option value="3">Support Team</option>
                  <option value="4">Training Team</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Category</Form.Label>
                <Form.Select aria-label="Select team category">
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
                <Form.Label>Team Specialization</Form.Label>
                <Form.Select aria-label="Select team specialization">
                  <option>Select Specialization</option>
                  <option value="1">Combat</option>
                  <option value="2">Technology</option>
                  <option value="3">Magic</option>
                  <option value="4">Intelligence</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Status</Form.Label>
                <Form.Select aria-label="Select team status">
                  <option>Select Status</option>
                  <option value="1">Active</option>
                  <option value="2">Standby</option>
                  <option value="3">Training</option>
                  <option value="4">Inactive</option>
                </Form.Select>
              </Form.Group>
            </div>
            {/* Team logo, Contact, Base Location, etc */}
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Logo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Leader</Form.Label>
                <Form.Control type="text" placeholder="Enter team leader name" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Base Location</Form.Label>
                <Form.Control type="text" placeholder="Enter base location" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Team Email</Form.Label>
                <Form.Control type="email" placeholder="Enter team email" />
              </Form.Group>
            </div>
          </div>

          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <button className="btn btn-outline-danger">Cancel</button>
            <button className="btn btn-primary">Create</button>
          </Stack>
        </div>
      </section>
    </>
  );
};

export default CreateUnit;
