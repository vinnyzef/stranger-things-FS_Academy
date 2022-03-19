import React, { useState, useEffect } from "react";
import { getPosts, handleDelete, test } from "./api";
import AddPost from "./AddPost";
import { render } from "react-dom";

const PostList = (props) => {
  const { setToken, token, posts, setPosts } = props;
  
  function deletePosts (id) {
    handleDelete(id)
    const newPosts = posts.filter(post => post._id !== id)
    setPosts(newPosts);
    
  }
  useEffect(async () => {
    const p = await getPosts();
    const posts = p.data.posts;
    console.log(p.author)
    const postId = posts.id;
    console.log(posts.id)
    console.log(posts);
    console.log(posts._id)
    setPosts(posts);
    

  // console.log(deletePosts)
  }, []);

  // console.log(posts[0]._id)
  

  const filterByUsername = async () => {
    const me = await test();
    const usernameToFilter = me.username;
    const newPosts = posts.filter(post => post.author.username === usernameToFilter);
    setPosts(newPosts);
  }

// function isAuthor(postId){

// }
//   isAuthor();

  return (
    <div>
      {/* <button onClick={() => <AddPost setPosts={setPosts} posts={posts} />}>
        Add Post
      </button> */}
      {/* <AddPost setPosts={setPosts} posts={posts} /> */}
      <button onClick={filterByUsername}>Filter By Username</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>{post.location}</p>
          <p>{post.willDeliver}</p> 
          <button onClick={() => deletePosts(post._id)}>Delete Post</button>
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
  )
};

export default PostList;
