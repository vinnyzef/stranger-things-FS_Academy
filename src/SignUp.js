import React, { useState, useEffect } from "react";
import { registerUser, test } from "./api";

const SignUp = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { token, setToken, setNeedToSignIn, signInNeeded } = props;

  //moved loginuser to here for fixing a scope issue on line 2 (setting state of token)
  const registerUser = async (userObject) => {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/register",
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
        //sets local and token value to a valid token
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("username", userObject.user.username);
        setToken(localStorage.getItem("token"));
        //makes sign in boolean falso to avoid rendering signup form again
        setNeedToSignIn(false);
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

    registerUser(temp);
    //clears temp object for future inputs
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
//username: "cats"
//_id: "6235f4a6893a050017015659"
//username: "cats"
//_id: "6235f4a6893a050017015659"