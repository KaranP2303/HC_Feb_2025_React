import React from 'react';
import '../Styles/HeaderAndFooterStyle.css';
import SocialIcon1 from '../Assets/SocialIcon1.svg';
import SocialIcon2 from '../Assets/SocialIcon2.svg';
import SocialIcon3 from '../Assets/SocialIcon3.svg';
import SocialIcon4 from '../Assets/SocialIcon4.svg';

// const Footer = () => {
//   return (
//     <div class="footer">
//       <div class="background2">
//         <div class="frame-48">
//           <div class="frame-47">
//             <img
//               class="whats-app-image-2024-02-21-at-17-30-12"
//               src="whats-app-image-2024-02-21-at-17-30-11.png"
//             />
//             <div class="frame-46">
//               <div class="link7">
//                 <img class="social-icon-1-png2" src="social-icon-1-png1.png" />
//               </div>
//               <div class="link7">
//                 <img class="social-icon-2-png2" src="social-icon-2-png1.png" />
//               </div>
//               <div class="link7">
//                 <img class="social-icon-4-png2" src="social-icon-4-png1.png" />
//               </div>
//               <div class="link7">
//                 <img class="social-icon-3-png2" src="social-icon-3-png1.png" />
//               </div>
//             </div>
//           </div>
//           <div class="horizontal-divider2"></div>
//         </div>
//         <div class="rectangle"></div>
//         <div class="frame-49">
//           <div class="heading-4-indonesia">Indonesia</div>
//           <div
//             class="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-ut-elit-tellus"
//           >
//             Lorem ipsum dolor sit amet consectetur
//             <br />
//             adipiscing elit ut elit tellus.
//           </div>
//           <div
//             class="call-us-1-123-234-1234-we-are-open-from-monday-to-friday-00-90-am-17-00-pm"
//           >
//             Call Us : 1 (123) 234 1234
//             <br />
//             We are open from Monday to Friday
//             <br />
//             00.90 AM - 17.00 PM
//           </div>
//         </div>
//         <div class="frame-50">
//           <div class="heading-4-quick-links">Quick Links</div>
//           <div class="list2">
//             <div class="item-link">
//               <img class="svg2" src="svg1.svg" />
//               <div class="about-us2">About Us</div>
//             </div>
//             <div class="item-link">
//               <img class="svg3" src="svg2.svg" />
//               <div class="services">Services</div>
//             </div>
//             <div class="item-link">
//               <img class="svg4" src="svg3.svg" />
//               <div class="faq">FAQ</div>
//             </div>
//             <div class="item-link">
//               <img class="svg5" src="svg4.svg" />
//               <div class="pricing-plan">Pricing Plan</div>
//             </div>
//             <div class="item-link">
//               <img class="svg6" src="svg5.svg" />
//               <div class="blog">Blog</div>
//             </div>
//           </div>
//         </div>
//         <div class="frame-51">
//           <div class="heading-4-resources">Resources</div>
//           <div class="list2">
//             <div class="item-link">
//               <img class="svg7" src="svg6.svg" />
//               <div class="privacy-policy">Privacy Policy</div>
//             </div>
//             <div class="item-link">
//               <img class="svg8" src="svg7.svg" />
//               <div class="terms-service">Terms Service</div>
//             </div>
//             <div class="item-link">
//               <img class="svg9" src="svg8.svg" />
//               <div class="documentation">Documentation</div>
//             </div>
//             <div class="item-link">
//               <img class="svg10" src="svg9.svg" />
//               <div class="contact">Contact</div>
//             </div>
//             <div class="item-link">
//               <img class="svg11" src="svg10.svg" />
//               <div class="press-file">Press File</div>
//             </div>
//           </div>
//         </div>
//         <div class="frame-52">
//           <div class="heading-4-subscribe">Subscribe</div>
//           <div
//             class="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-ut-elit-tellus"
//           >
//             Lorem ipsum dolor sit amet consectetur
//             <br />
//             adipiscing elit ut elit tellus.
//           </div>
//         </div>
//         <div class="form">
//           <div class="input2">
//             <div class="container2">
//               <div class="email2">Email</div>
//             </div>
//           </div>
//           <div class="button2">
//             <div class="subscribe-now">Subscribe Now</div>
//           </div>
//         </div>
//       </div>
//       <div class="background3">
//         <div class="horizontal-border">
//           <div class="heading-6-copyright-2024-rometheme-all-rights-reserved">
//             Copyright © 2025 Hackers Crowd. All Rights Reserved.
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer


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
          <div className="horizontal-divider"></div>
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
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              {resources.map((resource, index) => (
                <li key={index}>{resource}</li>
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
        <div className="horizontal-border">
          <p>Copyright © 2025 Hackers Crowd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

