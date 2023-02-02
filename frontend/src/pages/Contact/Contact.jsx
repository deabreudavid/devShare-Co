import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Mettre ici le code pour envoyer le message à l'API, à un serveur, etc.
    console.warn("Message envoyé :", formData);
  };

  return (
    <div className="contactBody">
      <h1>Page de contact</h1>
      <form className="formBody" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactPage;
