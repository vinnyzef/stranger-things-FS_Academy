import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, setLoggedIn } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(true);
    setUsername("");
    setPassword("");
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <>
      <form>
        <input
          value={username}
          onChange={handleChange}
          placeholder="UserName"
        ></input>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
        ></input>
      </form>
      <button onClick={handleSubmit}>Enter</button>
    </>
  );
};
export default Login;
