import React, { useState } from "react";
import emailjs from "emailjs-com";
import validator from "validator";
import Loader from "./Loader";
import Header from "./Header";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    if (!validator.isEmail(contactData.email)) {
      setDisable(false);
      return setError("Please enter a valid email.");
    }

    const templateParams = {
      to_name: "Surendu Suresh",
      from_name: contactData.name,
      message: contactData.message,
      reply_to: contactData.email,
    };
    emailjs
      .send(
        "gmail",
        "template_2epc7mg",
        templateParams,
        "user_wk5BFOTyC0cN83le4l8LU"
      )
      .then(
        (response) => {
          setSuccess(true);
          setDisable(false);
          setContactData({ name: "", email: "", message: "" });
          console.log("Success", response.status, response.text);
        },
        (err) => {
          setError("Something went wrong. Please try again.");
          setDisable(false);
          console.log("Failed ...", err);
        }
      );
  };

  const changeHandler = (value) => (event) => {
    setError(false);
    setSuccess(false);
    setContactData({ ...contactData, [value]: event.target.value });
  };

  const showSuccess = () => (
    <div className="contact__messages">
      <h3>Thank you for your message.</h3>
    </div>
  );

  const showError = () => {
    return (
      <div className="contact__messages">
        <h3>{error}</h3>
      </div>
    );
  };

  const contactForm = () => {
    return (
      <>
        <Header />
        <div className="contact__form-border">
          <form className="contact__form" onSubmit={formSubmit}>
            <h2>Your Details</h2>
            <label className="contact__form-label required">Name</label>
            <input
              type="text"
              className="contact__form-input"
              placeholder="John Doe"
              required
              value={contactData.name}
              onChange={changeHandler("name")}
            />
            <label className="contact__form-label required">Email</label>
            <input
              type="email"
              className="contact__form-input"
              placeholder="someone@example.com"
              required
              value={contactData.email}
              onChange={changeHandler("email")}
            />
            <label className="contact__form-label required">Message</label>
            <textarea
              className="contact__form-textarea"
              required
              value={contactData.message}
              onChange={changeHandler("message")}
            />
            {success ? showSuccess() : null}
            {!!error ? showError() : null}
            {disable ? <Loader /> : null}
            <button className="contact__form-button" disabled={disable}>
              Send
            </button>
          </form>
        </div>
      </>
    );
  };

  return (
    <div className="">
      <div className="flex">
        <div>
          <h2 className="contact__title">Contact Form</h2>          
          {contactForm()}
        </div>
      </div>
    </div>
  );
};

export default Contact;
