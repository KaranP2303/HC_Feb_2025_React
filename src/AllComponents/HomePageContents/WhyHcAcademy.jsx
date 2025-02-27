import React, { useState } from "react";
import "../Styles/WhyHcAcademyStyle.css";

// export const WhyHCAcademy = () => {
//   return (
//     <div className="why-HC-academy-section">
//       <div className="why-HC-academy-section-frame">
//         <h2 className="why-HC-academy">Why HC Academy</h2>
//         <p className="prepare-for-your">
//           Prepare For Your Future In Cybersecurity With Interactive, Guided
//           Training And Industry Certifications. Learn The Skills Needed To Stand
//           Out From The Competition.
//         </p>
//       </div>

//       <div className="features-grid">
//         <div className="div-features-card">
//           <img className="feature-icon" src="https://c.animaapp.com/pDwCToG9/img/eos-icons-compass.svg" alt="Guided Courses" />
//           <h3 className="feature-title">Guided Courses</h3>
//           <p className="feature-text">For every skill level, from beginner to advanced</p>
//         </div>

//         <div className="div-features-card">
//           <img className="feature-icon" src="https://c.animaapp.com/pDwCToG9/img/vector.svg" alt="In-Browser Pen Testing" />
//           <h3 className="feature-title">In-Browser Pen Testing VN</h3>
//           <p className="feature-text">Tackle all lab exercises from your browser</p>
//         </div>

//         <div className="div-features-card">
//           <img className="feature-icon" src="https://c.animaapp.com/pDwCToG9/img/vector-1.svg" alt="Highly Practical" />
//           <h3 className="feature-title">Highly Practical</h3>
//           <p className="feature-text">Practice in a real-world environment</p>
//         </div>

//         <div className="div-features-card">
//           <img className="feature-icon" src="https://c.animaapp.com/pDwCToG9/img/group@2x.png" alt="Get Certified" />
//           <h3 className="feature-title">Get Certified</h3>
//           <p className="feature-text">Stand out in the job market and boost your resume</p>
//         </div>

//         <div className="div-features-card">
//           <img className="feature-icon" src="https://c.animaapp.com/pDwCToG9/img/group-1@2x.png" alt="Unlimited & Online" />
//           <h3 className="feature-title">Unlimited & Online</h3>
//           <p className="feature-text">On-demand access from anywhere</p>
//         </div>

//         <div className="div-features-card">
//           <img className="feature-icon" src="https://c.animaapp.com/pDwCToG9/img/group-2@2x.png" alt="Job & Skill Path" />
//           <h3 className="feature-title">Job & Skill Path</h3>
//           <p className="feature-text">Achieve job proficiency or learn a new skill</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const features = [
  {
    icon: "https://c.animaapp.com/pDwCToG9/img/eos-icons-compass.svg",
    title: "Guided Courses",
    text: "For every skill level, from beginner to advanced",
  },
  {
    icon: "https://c.animaapp.com/pDwCToG9/img/vector.svg",
    title: "In-Browser Pen Testing VN",
    text: "Tackle all lab exercises from your browser",
  },
  {
    icon: "https://c.animaapp.com/pDwCToG9/img/vector-1.svg",
    title: "Highly Practical",
    text: "Practice in a real-world environment",
  },
  {
    icon: "https://c.animaapp.com/pDwCToG9/img/group@2x.png",
    title: "Get Certified",
    text: "Stand out in the job market and boost your resume",
  },
  {
    icon: "https://c.animaapp.com/pDwCToG9/img/group-1@2x.png",
    title: "Unlimited & Online",
    text: "On-demand access from anywhere",
  },
  {
    icon: "https://c.animaapp.com/pDwCToG9/img/group-2@2x.png",
    title: "Job & Skill Path",
    text: "Achieve job proficiency or learn a new skill",
  },
];
export const WhyHCAcademy = () => {
  const [flipped, setFlipped] = useState(Array(features.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };
  return (
    <div className="why-HC-academy-section">
      <div className="why-HC-academy-section-frame">
        <h2 className="why-HC-academy">Why HC Academy</h2>
        <p className="prepare-for-your">
          Prepare For Your Future In Cybersecurity With Interactive, Guided
          Training And Industry Certifications. Learn The Skills Needed To Stand
          Out From The Competition.
        </p>
      </div>

      <div className="features-grid">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`div-features-card ${flipped[index] ? "flipped" : ""}`}
          onClick={() => handleFlip(index)}
        >
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
              <img className="feature-icon" src={feature.icon} alt={feature.title} />
              <h3 className="feature-title">{feature.title}</h3>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <p className="feature-text">{feature.text}</p>
              <button className="flip-btn">More Info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


