import React, { useState, useEffect } from "react";
import {
  getPosts,
  handleDelete,
  test,
  handleUpdate,
  getSpecificPosts,
} from "./api";
import AddPost from "./AddPost";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import MessageBox from "./Message";

const PostList = (props) => {
  const buttonOn = false;
  const {
    setToken,
    token,
    posts,
    setPosts,
    // specificPost,
    // setSpecificPost,
  } = props;

  const updatePosts = async (id) => {
    const me = await test();
    const usernameToFilter = me.username;
    if (id === usernameToFilter) {
      return true;
    } else {
      return false;
    }
  };

  function deletePosts(id) {
    handleDelete(id);
    const newPosts = posts.filter((post) => post._id !== id);
    setPosts(newPosts);
  }
  useEffect(async () => {
    const p = await getPosts();
    const posts = p.data.posts;
    console.log(p.author);
    const postId = posts.id;
    console.log(posts.id);
    console.log(posts);
    console.log(posts._id);
    setPosts(posts);

    // console.log(deletePosts)
  }, []);

  // console.log(posts[0]._id)

  const filterByUsername = async () => {
    const me = await test();
    const usernameToFilter = me.username;
    const newPosts = posts.filter(
      (post) => post.author.username === usernameToFilter
    );
    setPosts(newPosts);
  };

  // function isAuthor(postId){

  // }
  //   isAuthor();

  const randColor = ["teal", "blue", "cyan", "aqua", "navy", "aquamarine"];
  return (
    <div>
      {/* <button onClick={() => <AddPost setPosts={setPosts} posts={posts} />}>
        Add Post
      </button> */}
      {/* <AddPost setPosts={setPosts} posts={posts} /> */}
      <button
        style={{
          display: "flex",
          textAlign: "center",
          backgroundColor: "darkgray",
        }}
        onClick={filterByUsername}
      >
        Filter By Username
      </button>
      {posts.map((post) => (
        <div
          style={{
            backgroundColor: "lightgray",
            color: "white",
            marginTop: "0px",
            WebkitTextStroke: ".2px black",
            border: "solid 2px darkgray",
          }}
          key={post.id}
        >
          <h2
            style={{
              color: randColor[Math.floor(Math.random() * randColor.length)],
              backgroundColor: "darkgray",
            }}
          >
            {post.title}
          </h2>
          <div style={{ color: "black" }}>
            <p> Description: {post.description}</p>
            <p>Price:{post.price}</p>
            <p>Location:{post.location}</p>
            <p>Willing to Deliver: {post.willDeliver}</p>
          </div>
          <button
            style={{
              display: "flex",
              textAlign: "center",
              backgroundColor: "darkgray",
            }}
            onClick={() => deletePosts(post._id)}
          >
            Delete Post
          </button>
          <MessageBox postId={post._id}></MessageBox>

          {/* <button onClick={setSpecificPost(post._id)}>
            <Link to="/postview">View Post</Link>
          </button> */}
        </div>
      ))}
      <button
        style={{
          marginTop: "10px",

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "darkgray",
        }}
        onClick={() => {
          //removes token
          localStorage.removeItem("token");
          //sets state of token to empty token
          setToken(localStorage.getItem("token"));
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default PostList;
