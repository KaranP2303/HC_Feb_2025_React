import '../Styles/HeroSectionStyle.css';

import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="frame">
        <div className="title">
          Think Like a Hacker, <br /> Defend Like a Pro
        </div>
        <p className="subtitle">
          <span className="text-normal">
            Learn, Hack, Secure - Build Your Future in CyberSecurity with
          </span>{" "}
          <span className="text-bold">Hackers Crowd</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

