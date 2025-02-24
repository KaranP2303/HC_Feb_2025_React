import React from "react";
import "../Styles/CyberSecurityLessonsStyle.css";
import CyberSecurity101Svg from '../Assets/CyberSecurity101Svg.svg';
import PreSecuritySvg from '../Assets/PreSecuritySvg.svg';
import SocLevel1Svg from '../Assets/SocLevel1Svg.svg';

const CyberSecurityLessons = () => {
  return (
    <div className="frame-34">
      <div className="frame-35">
        <div className="section-text">
            <div className="cs-lesson-heading">
                <h2 className="title">Learn and practice through gamified lessons</h2>
                <button className="load-more">Load More</button>
            </div>
          
          <div className="horizontal-divider"></div>
          <p className="description">
            Follow structured paths and reinforce your skills in a real-world environment by
            completing guided objective-based tasks and challenges. Learning cyber security on
            TryHackMe is fun and addictive. Earn points by answering questions, taking on
            challenges, and maintaining your hacking streak through short lessons.
          </p>
        </div>
      </div>
      {/* <div className="frame-33">
        {[
          { title: "Cyber Security 101", image: CyberSecurity101Svg },
          { title: "Pre Security", image: PreSecuritySvg },
          { title: "SOC Level 1", image: SocLevel1Svg },
        ].map((item, index) => (
          <div
            key={index}
            className="heading"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="heading-text">{item.title}</div>
          </div>
        ))}
      </div> */}
      <div className="frame-33">
        {[
            { title: "Cyber Security 101", image: CyberSecurity101Svg },
            { title: "Pre Security", image: PreSecuritySvg },
            { title: "SOC Level 1", image: SocLevel1Svg },
        ].map((item, index) => (
            <div key={index} className="heading">
            <div
                className="heading-image"
                style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            {/* <div className="heading-text">{item.title}</div> */}
            </div>
        ))}
        </div>

    </div>
  );
};

export default CyberSecurityLessons;
