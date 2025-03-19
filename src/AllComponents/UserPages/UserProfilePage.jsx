import '../Styles/UserProfilePageStyle.css';
import VictoryBadgeSvg from '../Assets/Badges/VictoryBadgeSvg.svg';
import DefeatBadgeSvg from '../Assets/Badges/DefeatBadgeSvg.svg';
import React from 'react';
import ProfileImg from '../Assets/ProfileImg.jpg';
import wavingHand from '../Assets/WavingHandSvg.svg';
import UserMedal from '../Assets/UserProfileImg/UserMedalSvg.svg';
import UserRating from '../Assets/UserProfileImg/UserRatingSvg.svg';
import UserProgram from '../Assets/UserProfileImg/UserProgramsSvg.svg';
import UserScore from '../Assets/UserProfileImg/UserScoreSvg.svg';
import programImg from '../Assets/UserProfileImg/ProgramImg.jpg';
import { UserTasksComponent } from './UserTasksComponent';
import { DashboardHexagonChart } from '../ChartsAndGraphs/DashboardHexagonChart';

export const UserProfilePage = () => {
  const programs = [
    { number: 1, progress: 75, image: programImg },
    { number: 2, progress: 50, image: programImg },
    { number: 3, progress: 90, image: programImg },
    { number: 4, progress: 100, image: programImg },
  ];
  
  const badges = [
    { id: 1, icon: VictoryBadgeSvg , label: "Badge 1" },
    { id: 2, icon: DefeatBadgeSvg , label: "Badge 2" },
    { id: 3, icon: VictoryBadgeSvg , label: "Badge 3" },
    { id: 4, icon: DefeatBadgeSvg , label: "Badge 4" }
];
  return (
    <div className="user-profile-page">
      <div className="user-profile-section-row-1">
        <div className="user-profile-section-row-1-badge-col">
            <span className='badges-earned-title'>Badges Earned</span>
            <div className="user-profile-section-row-1-badge-col-badges-group">
              {badges.map((badge) => (
                  <div key={badge.id} className="badge-items">
                      <img src={badge.icon} alt="badge" className='badge-icon' />
                      <span className="badge-label">{badge.label}</span>
                  </div>
              ))}
            </div>
        </div>
        <div className="user-profile-section-row-1-user-data-col">
          <div className="user-profile-section-row-1-user-data-col-text">
            <span className='user-profile-username-text'>
              Hello User 
              <img src={wavingHand} className='waving-hand-svg' alt="waving hand" />
            </span>
            <p className='user-profile-username-text-description'>Let's learn something new today! </p>
          </div>
          <div className='user-profile-pic'>
            <img src={ProfileImg}  alt="User profile pic" />
          </div>
        </div>
      </div>
      <div className="user-profile-section-row-2">
        <div className="user-profile-section-row-2-stats-col">
          <div className="my-progress-col">
            <span className='my-progress-title'>My Progress</span>
            <div className="progress-container">
              <div className="progress-percentage">
                <span className="progress-label">80%</span>
                <p className="pending-progress-label">20%</p>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="box-row">
              <div className="box">
                <div className="box-icon-row">
                  <img src={UserMedal} className='user-profile-box-icon' alt="user medal" />
                </div>
                <span className='learner-champ user-profile-box-label'>Learner champ</span>
              </div>
              <div className="box">
                <div className="box-icon-row">
                  <img src={UserScore} className='user-profile-box-icon' alt="user medal" />
                  <p className='user-score-number'>80%</p>
                </div>
                <span className='user-total-score user-profile-box-label'>Total Score</span>
              </div>
            </div>
            <div className="box-row">
              <div className="box">
                <div className="box-icon-row">
                  <img src={UserRating} className='user-profile-box-icon' alt="user medal" />
                  <p className='user-rating-number'>07</p>
                </div>
                <span className='user-rating-label user-profile-box-label'>My Rating</span>
              </div>
              <div className="box">
                <div className="box-icon-row">
                  <img src={UserProgram} className='user-profile-box-icon' alt="user medal" />
                  <p className='user-programs-number'>04</p>
                </div>
                <span className='user-programs-label user-profile-box-label'>Programs</span>
              </div>
            </div>
          </div>
          <div className="active-program-col">
            <DashboardHexagonChart/>
          </div>
        </div> 
        <div className="user-profile-section-row-2-task-col">
            <UserTasksComponent taskImg={programImg} userTaskTitle={"Today's Tasks"} ButtonTitle={"Check Now"} indexTitle={"Section 3 Program 1"} indexSubTitle={"Tackle all lab excercie from your browser"} />
            <UserTasksComponent taskImg={programImg} userTaskTitle={"Pending Task"} ButtonTitle={"Completed"} indexTitle={"Section 3 Program 1"} indexSubTitle={"Tackle all lab excercie from your browser"}/>
            
        </div>
        
      </div>
    </div>
  )
}
