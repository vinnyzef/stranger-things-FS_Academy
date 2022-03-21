import React, { useState } from "react";

const PostView = (props) => {
  const { setPosts, posts, specificPost, setSpecificPost } = props;
console.log(specificPost)
  const newPosts = posts.filter((post) => post._id == specificPost);
  console.log(newPosts);
  const post = newPosts[0];
  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
        <p>{post.willDeliver}</p>
      </div>
    </>
  );
};
export default PostView;
