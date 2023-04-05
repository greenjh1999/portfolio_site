import React, { useState } from "react";


const ContactForm = () => {
  const [status, setStatus] = useState("submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, useremail, message } = e.target.elements;
let details = {
  name: name.value,
  useremail: useremail.value,
  message: message.value,
};
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("submit");
    let result = await response.json();
    alert(result.status);
  };
  

  return (
    <div className="body-Container">
    <h2>Contact Me Below.</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      
      <div>
        <label htmlFor="useremail">Your Email:</label>
        <input type="email" id="useremail" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
    </div>
  );
};

export default ContactForm;

