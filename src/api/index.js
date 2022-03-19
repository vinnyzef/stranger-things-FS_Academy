import { React, useState } from "react";


export const getPosts = async () => {
  const key = localStorage.getItem("token");
  console.log(key);
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorizaton':  `Bearer ${key}` 
    }
  });
  const json = await response.json();
  console.log(json);
  return json;
};



export const test = async () => {
  const key = localStorage.getItem("token");
  return fetch(
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${key}`,
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      return result.data
    })
    .catch(console.error);
};

 export const handleDelete = async (postId) => {
  const token = localStorage.getItem("token");
    console.log('postId', postId)
    fetch(`https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(response => response.json())
      .then(result => {

        console.log(result);
      })
      .catch(console.error);
      
    };