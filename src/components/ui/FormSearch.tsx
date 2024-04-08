import { InputGroup, Button, Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const FormSearch = () => {
  return (
    <div className="bhSearch">
      <InputGroup className="mb-3">
        <Form.Control placeholder="Search" />
        <Button variant="outline">
          <FiSearch />
        </Button>
      </InputGroup>
    </div>
  );
};

export default FormSearch;
