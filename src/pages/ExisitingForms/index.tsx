import { useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BusinessUnits from "@/pages/ExisitingForms/BusinessUnits";
import { BusinessUnit } from "@/models/interfaces";

const ExistingFormsPage = () => {
  const [selectedItem, setSelectedItem] = useState<BusinessUnit | null>(null);

  // console.log(selectedItem);

  const handleGoBack = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section className="block">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              {/* Conditionally render breadcrumbs */}
              {selectedItem && (
                <Breadcrumbs
                  bc={selectedItem}
                  isActive={!!selectedItem}
                  onClick={handleGoBack}
                />
              )}

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

          {/* Business Units */}
          <BusinessUnits onSelectItem={setSelectedItem} />
        </div>
      </section>
    </>
  );
};

export default ExistingFormsPage;
