import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import Login from "./Login";
import { useToken } from "./api";
import SignUp from "./SignUp";

const App = (props) => {
  const { name } = props;
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [signInNeeded, setNeedToSignIn] = useState(false);

  return (
    <>
      <SignUp
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        token={token}
        setToken={setToken}
        signInNeeded={signInNeeded}
        setNeedToSignIn={setNeedToSignIn}
      />
      <Login
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        token={token}
        setToken={setToken}
        signInNeeded={signInNeeded}
        setNeedToSignIn={setNeedToSignIn}
      />
      {token ? (
        <>
          {" "}
          <h1> Welcome, {}</h1> <PostList />{" "}
        </>
      ) : null}
    </>
  );
};

export default hot(App);
//new thing
// jhbfidubsfg
// commit
