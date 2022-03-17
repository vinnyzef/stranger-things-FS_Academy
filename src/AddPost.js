import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [loc, setLoc] = useState("");
  const [willToDeliver, settWillToDeliver] = useState("");

  const handleSubmit = () => {
    const key = localStorage.getItem("token");
    fetch(
      "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: desc,
            price: price,
            location: loc,
            willDeliver: willToDeliver,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };

  return (
    <>
      {" "}
      <form>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
        ></input>
        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="Description"
        ></input>
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Price"
        ></input>
        <input
          value={loc}
          onChange={(e) => {
            setLoc(e.target.value);
          }}
          placeholder="Location"
        ></input>
        <input
          value={willToDeliver}
          onChange={(e) => {
            settWillToDeliver(e.target.value);
          }}
          placeholder="Willing to Deliver (True/False)"
        ></input>
      </form>
      <button onClick={handleSubmit}> Add new post!</button>
    </>
  );
};
export default AddPost;
