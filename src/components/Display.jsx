import { useState } from "react";

const Display = ({
  fullName,
  email,
  phone,
  adress,
  highschool,
  university,
  workPlace,
}) => {
  const [full_Name, setFull_Name] = useState();
  const [e_mail, setE_mail] = useState();
  const [phon_e, setPhon_e] = useState();
  const [adres_s, setAdres_s] = useState();
  const [high_school, setHigh_school] = useState();
  const [uni_versity, setUni_versity] = useState();
  const [work_Place, setWork_Place] = useState();

  function handleClick() {
    setFull_Name(fullName);
    setE_mail(email);
    setPhon_e(phone);
    setAdres_s(adress);
    setHigh_school(highschool);
    setUni_versity(university);
    setWork_Place(workPlace);
  }
  return (
    <div className="display-container">
      <button onClick={handleClick}>Set CV</button>
      <div className="general-section">
        Name: {full_Name}, email: {e_mail}, phone:{phon_e}, adress : {adres_s}
      </div>
      <div className="educational-exp">
        High school: {high_school}, University: {uni_versity}{" "}
      </div>
      <div className="practical-exp"> Work place : {work_Place} </div>
    </div>
  );
};
export default Display;
