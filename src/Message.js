import React, { useState } from "react";
import { messages } from "./api";
const MessageBox = (props) => {
  const { postId } = props;
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    messages(postId, message);
    setMessage("");
  };
  return (
    <div className="message">
      <label htmlFor="message">Message</label>
      <br></br>
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};
export default MessageBox;
