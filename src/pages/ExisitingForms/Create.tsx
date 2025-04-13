import { useState } from "react";
import CreateUnitModal, { FormType, FormData } from "./ui/CreateUnitModal";

const CreateUnit = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState<FormType>(FormType.MISSION);

  const handleOpenModal = (type: FormType) => {
    setFormType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      {/* Not needed for now */}
      {/* <section className="block blockTitle pt-0">
        <div className="container">
          <div className="blockHeader">
            <div className="bhTitle">
              <h2>Create New</h2>
            </div>
            <div className="bhForm d-flex gap-2">
              <button className="btn btn-primary" onClick={() => handleOpenModal(FormType.MISSION)}>
                Create New Mission
              </button>
              <button className="btn btn-success" onClick={() => handleOpenModal(FormType.TEAM)}>
                Create New Team
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Modal Component */}
      <CreateUnitModal show={showModal} onHide={handleCloseModal} onSubmit={handleSubmit} formType={formType} title={formType === FormType.MISSION ? "Create New Mission" : "Create New Team"} />
    </>
  );
};

export default CreateUnit;
