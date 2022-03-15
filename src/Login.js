import React, { useState, useEffect } from "react";
import { loginUser, registerUser, test } from "./api";
import SignUp from "./SignUp";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const {
    loggedIn,
    setLoggedIn,
    token,
    setToken,
    signInNeeded,
    setNeedToSignIn,
  } = props;

  const loginUser = (userObject) => {
    console.log(userObject);
    fetch(
      "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userObject),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(result.success);
        if (result.success === true) {
          setLoggedIn(true);
          setNeedToSignIn(false)
        }
      })
      .catch(console.error);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = {
      user: {
        username: user,
        password: pass,
      },
    };
    setToken(localStorage.getItem("token"));
    loginUser(temp);
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
      <button onClick={handleSubmit}>Enter</button>
      <button
        onClick={() => {
          setNeedToSignIn(true);
        }}
      >
        {" "}
        Dont have an account? Sign up
      </button>
    </>
  );
};
export default Login;
