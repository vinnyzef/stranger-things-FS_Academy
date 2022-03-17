import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import Login from "./Login";
import { useToken } from "./api";
import SignUp from "./SignUp";
import AddPost from "./AddPost";

const App = (props) => {
  const { name } = props;

  //setting token based on local storage
  const [token, setToken] = useState("");
  //boolean used for sign up button in login component
  const [signInNeeded, setNeedToSignIn] = useState(false);

  useEffect(() => {
    setToken(!!localStorage.getItem("token"));
  }, []);

  return (
    <>
      {token ? null : (
        <>
          <Login
            token={token}
            setToken={setToken}
            signInNeeded={signInNeeded}
            setNeedToSignIn={setNeedToSignIn}
          />{" "}
        </>
      )}
      {signInNeeded ? (
        <SignUp
          token={token}
          setToken={setToken}
          signInNeeded={signInNeeded}
          setNeedToSignIn={setNeedToSignIn}
        />
      ) : null}
      {token ? (
        <>
          {" "}
          <h1> Welcome, {}</h1> <PostList setToken={setToken} token={token} />{" "}
          <AddPost />
        </>
      ) : null}
    </>
  );
};

export default hot(App);
//new thing
// jhbfidubsfg
// commit
