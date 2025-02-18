// import React from 'react';
// import '../Styles/TrainingStyle.css';
// import SocialIcon1 from '../Assets/SocialIcon1.svg';
// import SocialIcon2 from '../Assets/SocialIcon2.svg';
// import SocialIcon3 from '../Assets/SocialIcon3.svg';
// import SocialIcon4 from '../Assets/SocialIcon4.svg';
// import LearnSvg from '../Assets/LearnMore_svgArrow.svg'

// const Training = () => {
//   return (
//     <div class="frame-19">
//         <div class="frame-18">
//           <div class="frame-15">
//             <div class="link3">
//               <img class="social-icon-1-png" src={SocialIcon1} />
//             </div>
//             <div class="link3">
//               <img class="social-icon-2-png" src={SocialIcon2} />
//             </div>
//             <div class="link3">
//               <img class="social-icon-4-png" src={SocialIcon4} />
//             </div>
//             <div class="link3">
//               <img class="social-icon-3-png" src={SocialIcon3} />
//             </div>
//             <div class="vertical-divider"></div>
//           </div>
//           <div class="frame-16">
//             <div class="frame-14">
//               <div class="frame-13">
//                 <div class="frame-12">
//                   <div class="heading-2-we-protect-your">Anyone Can Learn</div>
//                   <div class="link4">
//                     <div class="heading-1">
//                       <div class="cyber-security-with-hackers-crowd">
//                         cyber security with Hackers Crowd
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="horizontal-divider"></div>
//               </div>
//               <div
//                 class="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-ut-elit-tellus-luctus-nec-ullamcorper-mattis-pulvinar-dapibus-leo"
//               >
//                 Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit
//                 tellus
//                 <br />
//                 luctus nec ullamcorper mattis, pulvinar dapibus leo.
//               </div>
//             </div>
//             <div class="link5">
//               <img class="svg" src={LearnSvg} />
//               <div class="learn-more">Learn More</div>
//             </div>
//           </div>
//         </div>
//         <div class="form-contact-form">
//           <div class="frame-112">
//             <div class="heading-3-free-consultation">Free Consultation</div>
//           </div>
//           <div class="input">
//             <div class="full-name">Full Name</div>
//           </div>
//           <div class="input">
//             <div class="email">Email</div>
//           </div>
//           <div class="input">
//             <div class="phone-no">Phone No.</div>
//           </div>
//           <div class="input">
//             <div class="url">URL</div>
//           </div>
//           <div class="input">
//             <div class="company-name">Company Name</div>
//           </div>
//           <div class="button">
//             <div class="get-consultations">Get Consultations</div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Training


import React from 'react';
import '../Styles/TrainingStyle.css';
import SocialIcon1 from '../Assets/SocialIcon1.svg';
import SocialIcon2 from '../Assets/SocialIcon2.svg';
import SocialIcon3 from '../Assets/SocialIcon3.svg';
import SocialIcon4 from '../Assets/SocialIcon4.svg';
import LearnSvg from '../Assets/LearnMore_svgArrow.svg';

const socialIcons = [SocialIcon1, SocialIcon2, SocialIcon3, SocialIcon4];
const inputFields = ['Full Name', 'Email', 'Phone No.', 'URL', 'Company Name'];

const Training = () => {
  return (
    <div className="training-container">
      <div className="social-links">
        {socialIcons.map((icon, index) => (
          <div className="social-icon" key={index}>
            <img src={icon} alt={`social-icon-${index}`} />
          </div>
        ))}
        <div className="vertical-divider"></div>
      </div>
      <div className="content-section">
        <h2 className="subheading">Anyone Can Learn</h2>
        <h1 className="main-heading">Cyber Security with Hackers Crowd</h1>
        <div className="horizontal-divider"></div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="learn-more-btn">
          <img src={LearnSvg} alt="Learn More" />
          <span>Learn More</span>
        </div>
      </div>
      <div className="form-container">
        <h3 className="form-title">Free Consultation</h3>
        {inputFields.map((field, index) => (
          <div className="input-field" key={index}>{field}</div>
        ))}
        <button className="submit-btn">Get Consultations</button>
      </div>
    </div>
  );
};

export default Training;

