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

  return (
    <>
      {loggedIn ? (
        <h1>Welcome, {}</h1>
      ) : (
        <Login
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          token={token}
          setToken={setToken}
        />
      )}
      {loggedIn ? <PostList /> : null}
    </>
  );
};

export default hot(App);
//new thing
// jhbfidubsfg
// commit
