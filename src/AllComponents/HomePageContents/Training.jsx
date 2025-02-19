
import React from 'react';
import '../Styles/TrainingStyle.css';
import LearnByDoingSvg from '../Assets/LearnByDoingSvg.svg';
import GuidedLearningSvg from '../Assets/GuidedLearningSvg.svg';
import RealWorldTrainingSvg from '../Assets/RealWorldTrainingSvg.svg';
import EngagingFunLessonsSvg from '../Assets/EngagingLessonsSvg.svg';
import OnDemandSvg from '../Assets/OnDemandLearningSvg.svg';
import CostEffectiveSvg from '../Assets/CostEffectiveSvg.svg';


const Training = () => {
  const trainingSteps = [
    { title: "Learn by doing", image: LearnByDoingSvg },
    { title: "Guided learning for all skills", image: GuidedLearningSvg },
    { title: "Real-world training", image: RealWorldTrainingSvg },
    { title: "Engaging and fun lessons", image: EngagingFunLessonsSvg },
    { title: "Online on-demand learning", image: OnDemandSvg },
    { title: "Cost-effective", image: CostEffectiveSvg },
  ];
  return (
    <div className="training-container">
      <div className="training-header">
        <h1>Real-world offensive & defensive cyber-security training</h1>
        <div className="divider"></div>
        <p>
          Access over 900 training labs and learning pathways suited to all levels,
          from the complete beginner to the seasoned hacker. TryHackMe makes
          learning engaging, entertaining, accessible, and affordable.
        </p>
      </div>
      <div className="training-grid">
        {trainingSteps.map((step, index) => (
          <div key={index} className="training-step">
            <div className="step-number-img">
                {/* <p className='step-number-img-count'> {index + 1}.</p> */}
                <img src={step.image} alt={step.title} className="step-image" />
              </div>
            <h4>{step.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;





