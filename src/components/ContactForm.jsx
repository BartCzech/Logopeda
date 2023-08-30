import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author_name: "",
    email: "",
  });

  const [messageStatus, setMessageStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Immediately set message status to "sending"
    setMessageStatus("sending");

    // Sending the form data as JSON
    fetch("https://logopeda-backend.onrender.com/messages/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.message) {
          setMessageStatus("success");
          setFormData({
            title: "",
            text: "",
            author_name: "",
            email: "",
          });
        } else {
          setMessageStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setMessageStatus("error");
      });
  };

  return (
    <div className="form-container">
      <h1>Napisz do mnie wiadomość</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author_name"
          placeholder="Imię"
          value={formData.author_name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Tytuł"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="text"
          placeholder="Tutaj wpisz swoją wiadomość"
          rows="4"
          value={formData.text}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Wyślij wiadomość</button>
        {messageStatus === "sending" && (
          <p className="sending-message">Wysyłam wiadomość...</p>
        )}
        {messageStatus === "success" && (
          <p className="success-message">Wiadomość wysłana!</p>
        )}
        {messageStatus === "error" && (
          <p className="error-message">Błąd strony :( Proszę o kontakt bezpośrendnio przez email!</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
