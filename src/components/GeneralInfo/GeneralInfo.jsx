import { useState } from "react";
import "./GeneralInfo.css";

const GeneralInfo = () => {
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

  return (
    <div className="info-container">
      <div className="info-title">General Information</div>
      <label id="fullname" htmlFor="fullname">
        {" "}
        Enter your full Name
      </label>
      <input
        className="input"
        id="fullname"
        type="text"
        value={fullName}
        onChange={handleFullName}
      />
      <label id="email" htmlFor="email">
        Enter your E-mail
      </label>
      <input
        className="input"
        id="email"
        type="text"
        value={email}
        onChange={handleEmail}
      />

      <label id="number" htmlFor="number">
        Enter your number
      </label>
      <input
        className="input"
        id="number"
        type="number"
        value={phone}
        onChange={handlePhone}
      />

      <label id="adress" htmlFor="adress">
        Enter your adress
      </label>
      <input
        className="input"
        id="adress"
        type="text"
        value={adress}
        onChange={handleAdress}
      />
    </div>
  );
};
export default GeneralInfo;
