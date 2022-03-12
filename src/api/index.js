export const getPosts = async () => {
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts";
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
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
      localStorage.setItem("userKey", result.data.token);
    })
    .catch(console.error);
};

export const test = async () => {
  const token = localStorage.getItem("userKey");
  console.log(token);
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/test/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
