import React from "react";
import "./Contact.css";
import { useLanguage } from "../../Context/LanguageContext";

const Contact = () => {
  const { content } = useLanguage();
  const contact = content.contactPage; 

  return (
    <div className="contactPage">
      <h1 className="contact-title">{contact.title}</h1>
      <p className="contact-description">{contact.description}</p>
      <div className="contact-info">
        <p>
          <strong>{contact.emailLabel}: </strong>
          <a href="mailto:keremdoleksoz@gmail.com">keremdoleksoz@gmail.com</a>
        </p>
        <p className="location-info">{contact.location} </p>
      </div>
    </div>
  );
};

export default Contact;
