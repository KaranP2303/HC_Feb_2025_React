import "../Styles/HomePageStyles/WhyHcAcademyStyle.css";
import { WhyAcademySection } from "./WhyAcademySection";

export const WhyHCAcademy = () => {
 
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
      {/* <FlippingBoxes /> */}
      <WhyAcademySection/>
      
    </div>
  );
};


