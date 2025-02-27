// import '../Styles/AboutOurServiceStyle.css';
// import React from "react";

// export const AboutOurService = () => {
//   return (
//     <div className="about-our-service">
//       <div className="about-our-service-frame">
//         <div className="div-wrapper">
//           <p className="text-wrapper">
//             Epic Beginnings: Unveiling Our Essence, <br /> Crafting Futures with Excellence.
//           </p>
//         </div>
//       </div>

//       <div className="group">
//          <div class="image-container">
//          {[
//           { title: "Master a New Skill", desc: "Learn Popular Offensive and <br/> Defensive Security" },
//           { title: "Hackathons", desc: "HC CERTIFIED BUG BOUNTY HUNTER" },
//           { title: "CBBH", desc: "HC CERTIFIED BUG BOUNTY HUNTER" },
//           { title: "CBBH", desc: "HC CERTIFIED BUG BOUNTY HUNTER" },
//         ].map((item, index) => (
//           <div key={index} className={`content-box about-our-service-frame-${index + 2}  `}>
//             <div className="frame-content">
//               <div className="about-our-service-frame-title">{item.title} </div>
//               <p className="about-our-service-frame-description" dangerouslySetInnerHTML={{ __html: item.desc }}>

                
//               </p>
//             </div>
//             <div className="price-container">
//               <span className="price-label">Get Certified for</span>
//               <span className="price">$450</span>
//             </div>
//           </div>
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// };


import '../Styles/AboutOurServiceStyle.css';
import React from "react";
import AboutOurServiceSvg from '../Assets/AboutOurServicesSvg.svg'
import { AboutOurServiceRobot } from '../Assets/DynamicSvg/AboutOurServiceRobot';

export const AboutOurService = () => {
  return (
    <div className="about-our-service">
      <div className="about-our-service-frame">
        <div className="div-wrapper">
          <p className="text-wrapper">
            Epic Beginnings: Unveiling Our Essence, <br /> Crafting Futures with Excellence.
          </p>
        </div>
      </div>

      {/* <div className="group">
         <div class="image-container">
         {[
          { title: "Master a New Skill", desc: "Learn Popular Offensive and <br/> Defensive Security" },
          { title: "Hackathons", desc: "HC CERTIFIED BUG BOUNTY HUNTER" },
          { title: "CBBH", desc: "HC CERTIFIED BUG BOUNTY HUNTER" },
          { title: "CBBH", desc: "HC CERTIFIED BUG BOUNTY HUNTER" },
        ].map((item, index) => (
          <div key={index} className={`content-box about-our-service-frame-${index + 2}  `}>
            <div className="frame-content">
              <div className="about-our-service-frame-title">{item.title} </div>
              <p className="about-our-service-frame-description" dangerouslySetInnerHTML={{ __html: item.desc }}>

                
              </p>
            </div>
            <div className="price-container">
              <span className="price-label">Get Certified for</span>
              <span className="price">$450</span>
            </div>
          </div>
        ))}
        </div>
      </div> */}
      {/* <div className="about-our-service-container">
        <div className="about-our-service-left-content-column">Column 1</div>
        <div className="column center-column">
          <img src={AboutOurServiceSvg} alt="Overlapping" className="overlapping-image" />
        </div>
        <div className="about-our-service-right-content-column">Column 3</div>
      </div> */}
      <div className="img" >
        <AboutOurServiceRobot masterANewSkill={"hiiii im am karan"} />
      </div>
      
    </div>
  );
};


