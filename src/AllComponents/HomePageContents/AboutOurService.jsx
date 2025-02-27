import '../Styles/AboutOurServiceStyle.css';
import React from "react";
import { AboutOurServiceRobot } from '../Assets/DynamicSvg/AboutOurServiceRobot';

export const AboutOurService = () => {
  const data = {
    obj1: [{ title: "Master a New Skill", desc: "Learn Popular Offensive and <br/> Defensive Security" ,costTitle:"Get Certified for",costValue:"$450"}],
    obj2: [{ title: "Hackathons", desc: "HC CERTIFIED BUG BOUNTY HUNTER" ,costTitle:"Get Certified for",costValue:"$450" }],
    obj3: [{ title: "CBBH", desc: "HC CERTIFIED BUG BOUNTY HUNTER" ,costTitle:"Get Certified for",costValue:"$450" }],
    obj4: [{ title: "CBBH", desc: "HC CERTIFIED BUG BOUNTY HUNTER" ,costTitle:"Get Certified for",costValue:"$450" }],
  };
  return (
    <div className="about-our-service">
      <div className="about-our-service-frame">
        <div className="div-wrapper">
          <p className="text-wrapper">
            Epic Beginnings: Unveiling Our Essence, <br /> Crafting Futures with Excellence.
          </p>
        </div>
      </div>
      <div className="about-our-service-robot-img" >
        <AboutOurServiceRobot data={data} />
      </div>
      
    </div>
  );
};


