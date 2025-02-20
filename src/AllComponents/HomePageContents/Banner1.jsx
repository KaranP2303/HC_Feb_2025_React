import React from 'react';
import '../Styles/Banner1Style.css';
import SocialIcon1 from '../Assets/SocialIcon1.svg';
import SocialIcon2 from '../Assets/SocialIcon2.svg';
import SocialIcon3 from '../Assets/SocialIcon3.svg';
import SocialIcon4 from '../Assets/SocialIcon4.svg';
import LearnSvg from '../Assets/LearnMore_svgArrow.svg';

const socialIcons = [SocialIcon1, SocialIcon2, SocialIcon3, SocialIcon4];
const inputFields = ['Full Name', 'Email', 'Phone No.', 'URL', 'Company Name'];

const Banner1 = () => {
  return (
    <div className="banner1-section">
      <div className="banner1-container">
        <div className="social-links">
          {socialIcons.map((icon, index) => (
            <div className="social-icon" key={index}>
              <img src={icon} alt={`social-icon-${index}`} />
            </div>
          ))}
          <div className="vertical-divider"></div>
        </div>
        <div className="banner1-content-section">
          {/* <h2 className="subheading">Anyone Can Learn</h2> */}
          <h1 className='banner1-subheading'>
            Anyone Can Learn
          </h1>

          <h2 className="banner1-main-heading">cyber security with Hackers Crowd</h2>
          <div className="banner1-horizontal-divider"></div>
          <p className="banner1-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="learn-more-btn">
            <span>Learn More</span>
            <img src={LearnSvg} alt="Learn More" />
          </button>
        </div>
        <div className="form-container">
          <h3 className="form-title">Free Consultation</h3>
          {/* {inputFields.map((field, index) => (
            <div className="input-field" key={index}>{field}</div>
          ))} */}
          <input className="input-field" placeholder='Full Name' type="text" />
          <input className="input-field" type="text" placeholder='Email' />
          <input className="input-field" type="text" placeholder='Phone No.'/>
          <input className="input-field" type="text" placeholder='URL' />
          <input className="input-field" type="text" placeholder='Company Name'/>
          <button className="submit-btn">Get Consultations</button>
        </div>
      </div>
    </div>
    
  );
}

export default Banner1
