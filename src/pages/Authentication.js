import React from "react";
import { useState } from "react";
const style = {
  backgroundColor: "#819dc9",
  width: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "10px",
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
function Authentication() {
  const [Name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <form style={style}>
        <h2>Login to your account</h2>
        <label>
          Name:
          <input
            type="text"
            value={Name}
            style={inputstyle}
            onChange={(e) => setname(e.target.value)}
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Authentication;
