import { useState } from "react";
import Header from "./components/Header/Header";
import Patients from "./components/Patients";
import * as patients from "../src/components/data/PatientData.json";

let patientArray = [];
patients['patients'].forEach(element => {
  let course = {
    id: element.id,
    name: element.name,
    disease: element.disease
  }
  patientArray.push(course);
});

const App = () => {
  const [patientList, setPatientList] = useState(patientArray);
  const searchHandler = (event) => {
    let query = event.target.value.toLowerCase();
    console.log(query);

    let newList = [];
    let regex = new RegExp(`${query}`);

    let found = false;
    patientArray.forEach(element => {
      if (regex.test(element.name.toLowerCase())) {
        newList.push(element);
        found = true;
        console.log('found', element.name)
        return;
      }
      if (regex.test(element.disease.toLowerCase())) {
        newList.push(element);
        found = true;
        console.log('found', element.disease)
        return;
      }
    });
    if (found) {
      setPatientList(newList);
      console.log(found);
    }
    else {
      setPatientList(patientArray);
      console.log(found);
    }
  }

  return (
    <div className="container">
      <Header search = {searchHandler}/>
      {patientList.length > 0 ? (
        <Patients patients={patientList} />
      ) : (
        "No patients To show"
      )}
    </div>
  );
};

export default App;
