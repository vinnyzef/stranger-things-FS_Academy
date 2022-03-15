import React, { useState, useEffect } from "react";
import { registerUser, test } from "./api";

const SignUp = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { loggedIn, setLoggedIn, token, setToken } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = {
      user: {
        username: user,
        password: pass,
      },
    };

    registerUser(temp);
    test();
    setToken(localStorage.getItem("token"));
    temp = {};

    setUser("");
    setPass("");
  };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <form>
        <input value={user} onChange={handleChange} placeholder="user"></input>
        <input
          value={pass}
          onChange={(event) => {
            setPass(event.target.value);
          }}
          placeholder="Password"
        ></input>
      </form>
      <button onClick={handleSubmit}>Sign Up</button>
    </>
  );
};

export default SignUp;
