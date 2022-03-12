import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import Login from "./Login";

const App = (props) => {
  const { name } = props;
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {loggedIn ? null : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}

      {loggedIn ? <h1>Welcome, {}</h1> : null}
      {loggedIn ? <PostList /> : null}
    </>
  );
};

export default hot(App);
//new thing
// jhbfidubsfg
// commit
