import { useState } from "react";

import Breadcrumbs from "@/pages/ExisitingForms/ui/Breadcrumbs";
import FormSearch from "@/pages/ExisitingForms/ui/FormSearch";
import BusinessUnits from "@/pages/ExisitingForms/BusinessUnits";
import { BusinessUnit } from "@/models/interfaces";
import CreateUnit from "./Create";

const ExistingFormsPage = () => {
  const [selectedItem, setSelectedItem] = useState<BusinessUnit | null>(null);

  // console.log(selectedItem);

  const handleGoBack = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section className="block blockTitle">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              {/* Conditionally render breadcrumbs */}
              {selectedItem && <Breadcrumbs bc={selectedItem} isActive={!!selectedItem} onClick={handleGoBack} />}

              <h2>Existing Forms</h2>
            </div>

            {/* Search */}
            <FormSearch />
          </div>
        </div>
      </section>

      {/* Business Units */}
      <BusinessUnits onSelectItem={setSelectedItem} />

      {/* Create New */}
      <CreateUnit />
    </>
  );
};

export default ExistingFormsPage;
