import { useWizard } from "react-use-wizard";

const Step1 = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    alert("Going to step 2");
  });

  return (
    <>
      <button onClick={() => previousStep()}>Previous ⏮️</button>
      <button onClick={() => nextStep()}>Next ⏭</button>
    </>
  );
};

export default Step1;
