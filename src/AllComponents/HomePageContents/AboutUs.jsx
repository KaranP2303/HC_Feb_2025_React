import '../Styles/AboutUsStyle.css';
import React from "react";
import AboutUsSvg from '../Assets/AboutUsSvg.svg'

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Heading */}
      <div className="frame-22">
        <div className="frame-23">
          <h2 className="epic-beginnings-unveiling-our-essence-crafting-futures-with-excellence">
            Epic Beginnings: Unveiling Our Essence, Crafting Futures with Excellence.
          </h2>
        </div>
      </div>

      {/* Images & Certifications */}
      <div className="group-579325">
        <img className="vector-16" src="vector-160.svg" alt="Decorative" />
        <div className="group-36809">
          <img className="vr-11-9" src="vr-11-90.png" alt="VR Image" />
          <img className="dl-2" src={AboutUsSvg} alt="DL Image" />
        </div>

        {/* Certification Cards */}
        <div className="frame-1000004401">
          <div className="frame-1000004396">
            <h3 className="master-a-new-skill">Master a New Skill</h3>
            <p className="learn-popular-offensive-and-defensive-security">
              Learn Popular Offensive and Defensive Security
            </p>
          </div>
          <div className="frame-1000004397">
            <p className="get-certified-for">Get Certified for</p>
            <p className="_450">$450</p>
          </div>
        </div>

        <div className="frame-1000004398">
          <div className="frame-10000043962">
            <h3 className="hackathons">Hackathons</h3>
            <p className="hc-certified-bug-bounty-hunter">
              HC CERTIFIED BUG BOUNTY HUNTER
            </p>
          </div>
          <div className="frame-10000043972">
            <p className="get-certified-for">Get Certified for</p>
            <p className="_4502">$450</p>
          </div>
        </div>

        <div className="frame-1000004403">
          <div className="frame-10000043962">
            <h3 className="cbbh">CBBH</h3>
            <p className="hc-certified-bug-bounty-hunter">
              HC CERTIFIED BUG BOUNTY HUNTER
            </p>
          </div>
          <div className="frame-10000043972">
            <p className="get-certified-for">Get Certified for</p>
            <p className="_4502">$450</p>
          </div>
        </div>

        <div className="frame-1000004402">
          <div className="frame-1000004396">
            <h3 className="cbbh2">CBBH</h3>
            <p className="hc-certified-bug-bounty-hunter">
              HC CERTIFIED BUG BOUNTY HUNTER
            </p>
          </div>
          <div className="frame-1000004397">
            <p className="get-certified-for">Get Certified for</p>
            <p className="_450">$450</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <img className="vector-12" src="vector-120.svg" alt="Decorative" />
        <img className="vector-13" src="vector-130.svg" alt="Decorative" />
        <img className="vector-15" src="vector-150.svg" alt="Decorative" />
        <div className="ellipse-25"></div>
        <div className="ellipse-26"></div>
        <div className="ellipse-27"></div>
        <div className="ellipse-28"></div>
      </div>
    </div>
  );
};

export default AboutUs;
