import React from 'react';
import '../Styles/HackathonButtonStyle.css';
import HackathoneIcon from '../Assets/hackathonSvg.svg';

export const HackathonButton = () => {
  return (
        <button className="hackathon-button-right-button">
            <img className="hackathon-button-right-icon" src={HackathoneIcon} alt="" />
            Request a demo
        </button>
  )
}
