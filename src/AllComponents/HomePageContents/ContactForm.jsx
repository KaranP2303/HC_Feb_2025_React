import '../Styles/ContactFormStyle.css';
import React from "react";
import ContactUsRobotSvg from '../Assets/ContactUsRobotSvg.svg'


export const ContactForm = () => {
  return (
    <div className="contact-form"> 
      <div className="banner">
        <div className="contact-form-frame">
          <div className="frame-wrapper">
            <div className="content">
              <h2 className="heading">Get in Touch with Us</h2>
              <h1 className="sub-heading">Have questions? <br /> Let’s connect!</h1>
              <p className="description">
                We’d love to hear from you! Reach out with your questions, and <br /> our team will respond soon.
              </p>
            </div>
          </div>
        </div>

        <form className="form">
          <h3 className="form-heading">Get early access to <br /> our Academy</h3>

          <div className="input-group">
            <label className="label">Full Name</label>
            <input type="text" className="input" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label className="label">Phone No.</label>
            <input type="tel" className="input" placeholder="Enter your phone number" />
          </div>

          <div className="input-group">
            <label className="label">Email Address</label>
            <input type="email" className="input" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label className="label">Message</label>
            <textarea className="textarea" placeholder="Type your message"></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        <img
          className="illustration"
          alt="Exploring data"
          src={ContactUsRobotSvg}
        />
      </div>
    </div>
  );
}

