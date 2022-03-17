import React, { useState, useEffect } from "react";
import { getPosts } from "./api";
import AddPost from "./AddPost";
import { render } from "react-dom";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const { setToken, token } = props;

  useEffect(async () => {
    const p = await getPosts();
    const posts = p.data.posts;
    console.log(posts);
    setPosts(posts);
  }, []);

  return (
    <div>
      <button onClick={() => <AddPost />}>Add Post</button>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <button
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
