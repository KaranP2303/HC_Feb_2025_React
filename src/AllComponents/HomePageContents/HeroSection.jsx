import '../Styles/HeroSectionStyle.css';
import BgVideo from '../Assets/HeroSectionBG.mp4';
import React from "react";
import  Typewriter  from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-section-frame">
        <div className="title">
          <Typewriter
          options={{
            strings: [
              "Think Like a Hacker,<br/>Defend Like a Pro ...",
            ],
            autoStart: true,
            loop: true,
            delay: 220,
            deleteSpeed: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Think Like a Hacker,<br/>Defend Like a Pro")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
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
