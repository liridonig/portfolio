import React, { useRef, useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length <= 0 ||
      email.length <= 0 ||
      subject.length <= 0 ||
      message.length <= 0
    ) {
      setError(true);
    }
    if (name && email && subject && message) {
      sendEmail();
      e.target.reset();
    }
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_yd58vam",
        "template_gxgrxpb",
        form.current,
        "eQvUknXz0qLLGYBhH"
      )
      .then(
        (result) => {
          const success = document.querySelector(".success");
          success.textContent = "Your message was send succesfully!";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="btn-header">
        <div className="btn-info">
          <h4 className="btn-info-title standby">
            <RiContactsFill></RiContactsFill> Contact
          </h4>
          <h3 className="btn-info-subtitle standby">
            Let's Work <span>Together!</span>
          </h3>
        </div>
      </div>
      <div className="contact-form standby">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="contact-inputs">
            <label>Full name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="contact-input"
              name="user_name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            {error && name.length <= 0 ? (
              <span>Full Name can't be empty</span>
            ) : (
              ""
            )}
          </div>
          <div className="contact-inputs">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your email adress"
              className="contact-input"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {error && email.length <= 0 ? (
              <span>Please provide a valid email address!</span>
            ) : (
              ""
            )}
          </div>
          <div className="contact-inputs">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            ></input>
            {error && subject.length <= 0 ? (
              <span>Subject can't be empty</span>
            ) : (
              ""
            )}
          </div>
          <div className="contact-inputs">
            <label>Message</label>
            <textarea
              placeholder="Write your message"
              className="contact-textarea"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {error && message.length <= 0 ? (
              <span>Message can't be empty</span>
            ) : (
              ""
            )}
          </div>
          <div className="contact-btn">
            <button type="submit" value="Send" className="test1">
              SEND
            </button>
          </div>
          <p className="success"></p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
