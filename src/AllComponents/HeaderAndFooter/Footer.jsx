import React from 'react';
import '../Styles/HeaderAndFooterStyle.css';
import SocialIcon1 from '../Assets/SocialIcon1.svg';
import SocialIcon2 from '../Assets/SocialIcon2.svg';
import SocialIcon3 from '../Assets/SocialIcon3.svg';
import SocialIcon4 from '../Assets/SocialIcon4.svg';
import TickSvg from '../Assets/TickSvg.svg';

const socialIcons = [
  SocialIcon1,
  SocialIcon2,
  SocialIcon3,
  SocialIcon4
];

const quickLinks = ["About Us", "Services", "FAQ", "Pricing Plan", "Blog"];
const resources = ["Privacy Policy", "Terms Service", "Documentation", "Contact", "Press File"];

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="background2">
        <div className="frame-48">
          <div className="frame-47">
            <img className="logo" src={props.logo} alt="Company Logo" />
            <div className="social-icons">
              {socialIcons.map((icon, index) => (
                <img key={index} className="social-icon" src={icon} alt="Social Icon" />
              ))}
            </div>
          </div>
          <div className="footer-horizontal-divider"></div>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Indonesia</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus.</p>
            <p>Call Us : 1 (123) 234 1234</p>
            <p>We are open from Monday to Friday 00:90 AM - 17:00 PM</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-lists-item">
                  <img className='footer-tick-svg' src={TickSvg} alt="tick svg" />
                   {link}
                  </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              {resources.map((resource, index) => (
                <li key={index} className="footer-lists-item">
                  <img className='footer-tick-svg' src={TickSvg} alt="tick svg" />
                  {resource}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section subscribe">
            <h4>Subscribe</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Email" />
              <button className='subscribe-now'>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="background3">
      <div className="footer-horizontal-divider1"></div>
        <div className="horizontal-border">
          <p>Copyright © 2025 Hackers Crowd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

