import { React, useState } from "react";


export const getPosts = async () => {
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts";
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
};



export const test = async () => {
  const key = localStorage.getItem("token");


  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/test/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
