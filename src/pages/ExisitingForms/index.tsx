import { useState } from "react";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FormSearch from "@/components/ui/FormSearch";
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
              {selectedItem && <Breadcrumbs bc={selectedItem} isActive={!!selectedItem} onClick={handleGoBack} />}

              <h2>Existing Forms</h2>
            </div>

            {/* Search */}
            <FormSearch />
          </div>

          {/* Business Units */}
          <BusinessUnits onSelectItem={setSelectedItem} />
        </div>
      </section>
    </>
  );
};

export default ExistingFormsPage;
