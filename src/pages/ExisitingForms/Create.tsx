import { Form, Stack } from "react-bootstrap";

const CreateUnit = () => {
  return (
    <>
      <section className="block blockTitle pt-0">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              <h2>Create New</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="block pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Description</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Type</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Type</option>
                  <option value="1">Type 1</option>
                  <option value="2">Type 2</option>
                  <option value="3">Type 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Category</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Sub-Category</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Sub-Category</option>
                  <option value="1">Sub-Category 1</option>
                  <option value="2">Sub-Category 2</option>
                  <option value="3">Sub-Category 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Status</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Status</option>
                  <option value="1">Status 1</option>
                  <option value="2">Status 2</option>
                  <option value="3">Status 3</option>
                </Form.Select>
              </Form.Group>
            </div>
            {/* Upload logo , Contact, Address, etc */}
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Logo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Contact</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Address</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Email</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group controlId="wzForm1" className="mb-3">
                <Form.Label>Form Phone</Form.Label>
                <Form.Control type="text" placeholder="" />
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
