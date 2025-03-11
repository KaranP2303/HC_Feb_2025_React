import React from 'react';
import '../Styles/HomePageStyles/Banner2Style.css';
import EmailSvg from '../Assets/EmailSvg.svg';
import CallUsSvg from '../Assets/CallUsSvg.svg';

const Banner2 = () => {
  return (
    <div className="top-bar">
      <div className="mail">
        <img className="vector" src={EmailSvg} alt="Mail Icon" />
        <div className="support-hackerscrowd-com">Support@hackerscrowd.com</div>
      </div>
      <div className="frame-10">
        <div className="mail">
          <img className="vector2" src={CallUsSvg} alt="Call Icon" />
          <div className="call-us">Call Us</div>
        </div>
        <div className="mail">
          <div className="contact-us">Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default Banner2
