import { SubBusinessUnit } from "@/models/interfaces";

import { Stack } from "react-bootstrap";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

import { useParams } from "react-router-dom";
import { Wizard, useWizard } from "react-use-wizard";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

// Wizard Navigation Menu items
const navItems = [
  { label: "Webform Configuration", id: 0 },
  { label: "Styling / Branding", id: 1 },
  { label: "Customer Notifications", id: 2 },
  { label: "Preview Form", id: 3 },
  { label: "Raise Request", id: 4 },
];

const EditForm = ({ item }: { item: SubBusinessUnit }) => {
  const { id } = useParams<{ id: string }>();
  console.log(item, id);

  // const Wrapper = () => <AnimatePresence exitBeforeEnter />;

  //
  const WizardNav = () => {
    const { activeStep, goToStep } = useWizard();
    return (
      <div className="wizardNav">
        <Stack className="nav" direction="horizontal">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`${activeStep === index ? "active" : ""} btn`}
              onClick={() => {
                goToStep(index);
              }}
            >
              <span>{index + 1}</span>
              {item.label}
            </button>
          ))}
        </Stack>
        <Stack className="wizardHeader" direction="horizontal">
          <div className="wzImg me-auto">
            <img src={item.img} alt="" />
          </div>
          <Stack className="wzMeta" direction="horizontal">
            <b>
              Last Update: <span>22/03/2019</span>
            </b>
            <b>
              By Admin Config: <span>Amit Ray</span>
            </b>
            <b>
              Business Approval By: <span>Shailesh Naik</span>
            </b>
          </Stack>
        </Stack>
      </div>
    );
  };

  // Wizard Footer
  const WizardFooter = () => {
    const { nextStep, previousStep, isLoading, isLastStep, isFirstStep } = useWizard();
    return (
      <div className="wizardFooter">
        <Stack className="btns" direction="horizontal">
          <a className="btn btn-link text-secondary">
            <FiEye className="icon" /> Preview
          </a>
          <button className="btn btn-outline-light" onClick={() => previousStep()} disabled={isFirstStep || isLoading}>
            Cancel
          </button>
          <button className="btn btn-outline-light">Save Draft</button>
          <button className="btn btn-primary" onClick={() => nextStep()} disabled={isLastStep || isLoading}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </Stack>
      </div>
    );
  };

  return (
    <section className="block stepsWizard">
      <div className="container">
        <hr />

        {/* Actions */}
        <Stack className="cdAction ms-auto justify-content-end" direction="horizontal">
          <button className="btn btn-link text-success" disabled>
            Edit Form <FiEdit2 />
          </button>
          <button className="btn btn-link text-danger">
            Delete Form <FiTrash2 />
          </button>
        </Stack>

        {/* Wizard */}
        <div className="wizard">
          <Wizard startIndex={0} header={<WizardNav />} footer={<WizardFooter />}>
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
          </Wizard>
        </div>
      </div>
    </section>
  );
};

export default EditForm;
