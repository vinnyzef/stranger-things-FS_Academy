import React, { useState, useEffect } from "react";
import { loginUser, registerUser, test } from "./api";
import SignUp from "./SignUp";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { loggedIn, setLoggedIn, token, setToken } = props;

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
        console.log(result.success)
        if (result.success === true) {
          setLoggedIn(true);
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
          setSignInStatus(true);

          <SignUp
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            token={token}
            setToken={setToken}
          />;
        }}
      >
        {" "}
        Dont have an account? Sign up
      </button>
    </>
  );
};
export default Login;
