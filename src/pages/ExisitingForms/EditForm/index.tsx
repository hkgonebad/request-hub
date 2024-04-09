import { SubBusinessUnit } from "@/models/interfaces";

import { Stack } from "react-bootstrap";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { Wizard } from "react-use-wizard";
import { motion, AnimatePresence } from "framer-motion";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const EditForm = ({ item }: { item: SubBusinessUnit }) => {
  console.log(item);

  const Wrapper = () => <AnimatePresence mode="wait" />;

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

        <Wizard startIndex={0} wrapper={<Wrapper />}>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
        </Wizard>
      </div>
    </section>
  );
};

export default EditForm;
