import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";
import Display from "./components/Display";

function App() {
  // general info
  const [fullName, SetFullName] = useState("");
  function handleFullName(e) {
    SetFullName(e.target.value);
  }

  const [email, SetEmail] = useState("");
  function handleEmail(e) {
    SetEmail(e.target.value);
  }

  const [phone, SetPhone] = useState("");
  function handlePhone(e) {
    SetPhone(e.target.value);
  }

  const [adress, SetAdress] = useState("");
  function handleAdress(e) {
    SetAdress(e.target.value);
  }
  /////////////////////////////////////////////
  // educational exp

  const [highschool, SetHighschool] = useState("");
  function handleHighschool(e) {
    SetHighschool(e.target.value);
  }

  const [university, SetUniversity] = useState("");
  function handleUniversity(e) {
    SetUniversity(e.target.value);
  }
  /////////////////////////////////////////////
  // Practical exp

  const [workPlace, SetWorkPlace] = useState("");
  function handleWorkPlace(e) {
    SetWorkPlace(e.target.value);
  }

  /////////////////////////////////////////////

  return (
    <div className="grid-container">
      <div className="col-1">
        <GeneralInfo
          fullName={fullName}
          email={email}
          phone={phone}
          adress={adress}
          handleFullName={handleFullName}
          handleEmail={handleEmail}
          handlePhone={handlePhone}
          handleAdress={handleAdress}
        />
        <EducationalExp
          highschool={highschool}
          university={university}
          handleHighschool={handleHighschool}
          handleUniversity={handleUniversity}
        />
        <PracticalExp workPlace={workPlace} handleWorkPlace={handleWorkPlace} />
      </div>
      <div className="col-2">
        <Display
          fullName={fullName}
          email={email}
          phone={phone}
          adress={adress}
          highschool={highschool}
          university={university}
          workPlace={workPlace}
        />
      </div>
    </div>
  );
}

export default App;
