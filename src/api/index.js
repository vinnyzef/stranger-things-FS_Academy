import { React, useState } from "react";

export const getPosts = async () => {
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts";
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
};
export const loginUser = (userObject) => {
  console.log(userObject);
  fetch(
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userObject),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};

export const registerUser = async (userObject) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.setItem("token", result.data.token);
    })
    .catch(console.error);
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

      console.log(token);
    })
    .catch(console.error);
};

export const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");

    const userToken = JSON.parse(tokenString);

    //checks state to match token
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  return {
    setToken: saveToken,
    token,
  };
};
