import React from 'react';
import { ArrowRight,ArrowLeft } from 'lucide-react';
import '../Styles/UserProfileStyle/UserTasksComponentStyle.css';

export const UserTasksComponent = ({taskImg,userTaskTitle,ButtonTitle,indexTitle,indexSubTitle}) => {
  return (
    <div className="user-task">
        <div className="user-task-title-row">
            <div className="user-task-title-text">
                {userTaskTitle}
            </div>
            <div className="user-tasks-buttons-controller">
                <ArrowLeft className='user-tasks-buttons-controller-left-btn'/>
                <ArrowRight className='user-tasks-buttons-controller-right-btn'/>
            </div>
        </div>
        <div className="user-program-details">
            <div  className="user-task-program-row">
                <div className="user-task-program-image">
                <img src={taskImg} alt="Program "/>
                </div>
                <div className="user-task-program-details">
                <div className="user-task-program-index">{indexTitle}</div>
                <div className="user-task-program-desc">
                    <p className="user-task-program-desc-text"> {indexSubTitle}</p>
                </div>
            </div>
            </div>
        </div>
        <button className='user-profile-task-button'>{ButtonTitle}</button>
    </div>
  )
}
