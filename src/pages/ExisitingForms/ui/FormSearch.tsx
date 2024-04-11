import { InputGroup, Button, Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const FormSearch = () => {
  return (
    <div className="bhSearch">
      <InputGroup className="">
        <Form.Control placeholder="Search" />
        <Button variant="outline">
          <FiSearch className="icon" />
        </Button>
      </InputGroup>
    </div>
  );
};

export default FormSearch;
