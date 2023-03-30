import React from "react";
import { RiContactsFill } from "react-icons/ri";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title">
            <RiContactsFill></RiContactsFill> Contact1
          </h4>
          <h3 className="btn-info-subtitle">
            Let's Work <span>Together!</span>
          </h3>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="contact-inputs">
            <label>Full name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-inputs">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your email adress"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-inputs">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-inputs">
            <label>Message</label>
            <textarea
              placeholder="Write your message"
              className="contact-textarea"
            ></textarea>
          </div>
          <div className="contact-btn">
            <a>SEND MESSAGE</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
