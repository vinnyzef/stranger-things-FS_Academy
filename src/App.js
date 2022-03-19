import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import Login from "./Login";
import { useToken } from "./api";
import SignUp from "./SignUp";
import AddPost from "./AddPost";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"
// import { Route } from "react-router";
// import { useHistory } from "react-router"
import { test } from "./api";

const App = (props) => {
  const { name } = props;
  const [posts, setPosts] = useState([]);
  //setting token based on local storage
  const [token, setToken] = useState("");
  //boolean used for sign up button in login component
  const [signInNeeded, setNeedToSignIn] = useState(false);

  useEffect(() => {
    setToken(!!localStorage.getItem("token"));
  }, []);

  const history = useHistory();
  function handleNavClick() {
    history.pushState("/login")
  }

  return (
    <Router>
      <div>
      <h1>Welcome to Stranger's Things</h1>
      </div>
      <div id="navbar">
        <button onClick={async () => test()}>Test User</button>
        <button><Link to="/login">Go to Login</Link></button>
        <button><Link to="/signup">Go to Signup</Link></button>
        <button><Link to="/posts">Go to posts</Link></button>
        <button><Link to="/addPost">AddPost</Link></button>

      </div>
      {/* <button onClick={() => handleNavClick()}></button> */}
    <>

    <Switch>
    <Route path={"/signup"}>
      {signInNeeded ? (
        <SignUp
          token={token}
          setToken={setToken}
          signInNeeded={signInNeeded}
          setNeedToSignIn={setNeedToSignIn}
        />
      ) : null}
    </Route>

    {token ? (
    <Route exact path={"/posts"}>
        <>
          {" "}
          <h1> Welcome, {}</h1> <PostList setToken={setToken} token={token} posts={posts} setPosts={setPosts} />{" "}
        </>
    </Route>
    ) : null}

    <Route path={"/addpost"}>
      <AddPost setPosts={setPosts} posts={posts}/>
    </Route>

    <Route path={"/"}>
      {token ? <PostList setToken={setToken} token={token} posts={posts} setPosts={setPosts} /> : (
        <> 
          <Login
            token={token}
            setToken={setToken}
            signInNeeded={signInNeeded}
            setNeedToSignIn={setNeedToSignIn}
          />{" "}
        </>
      )}
    </Route>
    </Switch>

    </>
    </Router>
  )};

export default hot(App);
//new thing
// jhbfidubsfg
// commit
