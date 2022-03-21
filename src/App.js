import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import Login from "./Login";
import { useToken } from "./api";
import SignUp from "./SignUp";
import AddPost from "./AddPost";
import PostView from "./PostView";
// import { View, StyleSheet } from "react-native";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
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
  //
  const [specificPost, setSpecificPost] = useState("");

  useEffect(() => {
    setToken(!!localStorage.getItem("token"));
  }, []);

  const history = useHistory();
  function handleNavClick() {
    history.pushState("/login");
  }
  const buttonStyle = {
    display: "flex",
    textAlign: "center",
    backgroundColor: "darkgray",
  };

  return (
    <Router >
      <div style={{ backgroundColor: "lightgray" }}>
      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          backgroundColor: "gray",
          color: "white",
          WebkitTextStroke: "1px black",
          fontWeight: "bolder",
        }}
      >
        <h1>Welcome to Stranger's Things</h1>
      </div>
      <div
        id="navbar"
        style={{
          display: "flex",
          fontFamily: "sans-serif",
          justifyContent: "flex-end",
          backgroundColor: "lightgrey",
        }}
      >
        <button style={buttonStyle} onClick={async () => test()}>
          Test User
        </button>
        <button style={buttonStyle}>
          <Link to="/login">Go to Login</Link>
        </button>
        <button style={buttonStyle}>
          <Link to="/signup">Go to Signup</Link>
        </button>
        <button style={buttonStyle}>
          <Link to="/posts">Go to posts</Link>
        </button>
        <button style={buttonStyle}>
          <Link to="/addPost">Add Post</Link>
        </button>
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
                <h1
                  style={{
                    display: "flex",
                    fontFamily: "sans-serif",
                    justifyContent: "center",
                    backgroundColor: "lightgrey",
                    color: "white",
                    WebkitTextStroke: "1px black",
                  }}
                >
                  {" "}
                  Welcome, User
                </h1>{" "}
                <PostList
                  setToken={setToken}
                  token={token}
                  posts={posts}
                  setPosts={setPosts}
                  // specificPost={specificPost}
                  // setSpecificPost={setSpecificPost}
                />
              </>
            </Route>
          ) : null}

          {/* <Route path={"/postview"}>
            <PostView
              posts={posts}
              setPosts={setPosts}
              specificPost={specificPost}
              setSpecificPost={setSpecificPost}
            />
          </Route> */}

          <Route path={"/addpost"}>
            <AddPost setPosts={setPosts} posts={posts} />
          </Route>

          <Route path={"/"}>
            {token ? (
              <PostList
                setToken={setToken}
                token={token}
                posts={posts}
                setPosts={setPosts}
              />
            ) : (
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
      </div>
    </Router>
  );
};

export default hot(App);
//new thing
// jhbfidubsfg
// commit
