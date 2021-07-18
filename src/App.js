import { useState } from "react";
import Header from "./components/Header/Header";
import Patients from "./components/Patients";
import patients from "./data/PatientData";
const App = () => {
  return (
    <div className="container">
      <Header />
      console.log(patients)
      {patients.length > 0 ? (
        <Patients patients={patients} />
      ) : (
        "No patients To show"
      )}
    </div>
  );
};

export default App;
