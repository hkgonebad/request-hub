import { Accordion } from "react-bootstrap";

import { useWizard } from "react-use-wizard";
import ClientDetail from "@/pages/ExisitingForms/ui/ClientDetail";
import { SubBusinessUnit } from "@/models/interfaces";

const Step4 = ({ item }: { item: SubBusinessUnit }) => {
  const { handleStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 5");
  });

  return (
    <div className="wzStep">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Preview Form</Accordion.Header>
          <Accordion.Body>
            <div className="wzItem wzItemWell">
              <ClientDetail clientDetails={item} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Step4;
