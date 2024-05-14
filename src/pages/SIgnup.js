import React from "react";
import { useState } from "react";
const style = {
  backgroundColor: "#819dc9",
  width: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "5px",
  padding: "10px",
  border: "2px solid grey",
  borderRadius: "5px",
  boxShadow: "3px 3px 3px 3px  #4a4c4f",
};
const inputstyle = {
  padding: "8px",
  margin: "10px",
  border: "2px solid grey",
  borderRadius: "5px",
  width: "220px",
};
const buttonstyle = {
  backgroundColor: "#146EB4",
  margin: "5px",
  width: "60px",
  height: "27px",
  borderRadius: "3px",
};
function SIgnup() {
  const [firstName, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <form style={style}>
        <h2>Login to your account</h2>
        <label>
          Firstname:
          <input
            type="text"
            value={firstName}
            style={inputstyle}
            onChange={(e) => setfirstname(e.target.value)}
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            value={lastname}
            style={inputstyle}
            onChange={(e) => setlastname(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={phone}
            style={inputstyle}
            onChange={(e) => setphone(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            style={inputstyle}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={password}
            style={inputstyle}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <button type="submit" style={buttonstyle}>
          SignUp
        </button>
      </form>
    </div>
  );
}

export default SIgnup;
