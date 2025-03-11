import '../Styles/HomePageStyles/FlippingBoxesStyle.css';
import { useState } from "react";
import GuidedCourseIcon from '../Assets/GuidedCoursesSvg.svg';
import PenTestingIcon from '../Assets/PenTestingSvg.svg';
import HighlyPracticleIcon from '../Assets/HighlyPracticleSvg.svg';
import GetCertifiedIcon from '../Assets/GetCertifiedSvg.svg';
import UnlimitedAndOnlineIcon from '../Assets/UnlimitedAndOnlineSvg.svg';
import JobAndSkillIcon from '../Assets/JobAndSkillSvg.svg';


const features = [
  {
    id: 1,
    img: GuidedCourseIcon,
    title: "Guided Courses",
    subtitle: "For every skill level, from beginner to advanced",
    description: "This is the description for Card 1.",
  },
  {
    id: 2,
    img: PenTestingIcon,
    title: "In-Browser Pen testing VN",
    subtitle: "Tackle all lab exercise from your browser",
    description: "This is the description for Card 2.",
  },
  {
    id: 3,
    img: HighlyPracticleIcon,
    title: "Highly Practicle",
    subtitle: "Practice in a real world Environment",
    description: "This is the description for Card 3.",
  },
  {
    id: 4,
    img: GetCertifiedIcon,
    title: "Get Certified",
    subtitle: "Standout in a job market and skyrocket your resume",
    description: "This is the description for Card 4.",
  },
  {
    id: 5,
    img: UnlimitedAndOnlineIcon,
    title: "Unlimited & Online",
    subtitle: "On demand access from everywhere",
    description: "This is the description for Card 5.",
  },
  {
    id: 6,
    img: JobAndSkillIcon,
    title: "Job & Skill Path",
    subtitle: "Achieve Job Proficiency or learn new skill",
    description: "This is the description for Card 6.",
  },
];

export const FlippingBoxes = () => {
  const [flipped, setFlipped] = useState(Array(features.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="flipping-boxes">
      <div className="feature-container">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`feature-card ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
            onMouseEnter={() => handleFlip(index)}
            onMouseLeave={() => handleFlip(index)}
          >
            {!flipped[index] ? (
              <>
                <img src={feature.img} alt={feature.title} className="feature-icon" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="flipping-box-feature-subtitle">{feature.subtitle}</p>
              </>
            ) : (
              <p className="feature-description">
                {feature.description || "Description not available"}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

