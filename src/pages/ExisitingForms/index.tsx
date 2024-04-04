import { InputGroup, Button, Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const ExistingFormsPage = () => {
  return (
    <section className="block">
      <div className="container">
        <div className="blockHeader">
          <div className="bhTitle">
            <h2>Existing Forms</h2>
          </div>

          <div className="bhSearch">
            <InputGroup className="mb-3">
              <Form.Control placeholder="Search" />
              <Button variant="outline">
                <FiSearch />
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingFormsPage;
