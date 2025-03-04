
import '../Styles/WhyAcademySectionStyle.css';
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

export const WhyAcademySection = () => {
  return (
    <div className="why-academy-section">
      <div className="why-academy-feature-container">
        {features.map((feature) => (
          <div key={feature.id} className="why-academy-feature-card">
            <div className="why-academy-feature-card-inner">
              <div className="why-academy-feature-card-front">
                <img src={feature.img} alt={feature.title} className="why-academy-feature-icon" />
                <h3 className="why-academy-feature-title">{feature.title}</h3>
                <p className="why-academy-feature-subtitle">{feature.subtitle}</p>
              </div>
              <div className="why-academy-feature-card-back">
                <p className="why-academy-feature-description">
                  {feature.description || "Description not available"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
