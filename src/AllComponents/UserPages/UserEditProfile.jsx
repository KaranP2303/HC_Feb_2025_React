import { Avatar } from '@mui/material';
import '../Styles/UserProfileStyle/UserEditProfileStyle.css';
import { FaUser, FaEnvelope, FaLock, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

import React, { useState } from 'react';

export const UserEditProfile = () => {
    const [avatar, setAvatar] = useState("/static/images/avatar/1.jpg");
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setAvatar(imageUrl);
        }
      };
  return (
    <div className="edit-user-section">
        <div className="edit-user-title-section">
            <Avatar
                alt="Remy Sharp"
                src={avatar}
                className="user-edit-profile-pic"
                sx={{ width: 100, height: 100, marginBottom: 2 }}
            />
            <input
                accept="image/*"
                style={{ display: "none" }}
                id="avatar-upload"
                type="file"
                onChange={handleAvatarChange}
            />
            <label htmlFor="avatar-upload">
                <button className='user-edit-change-avatar' variant="contained" component="span">
                    Change Avatar
                </button>
            </label>
        </div>
        <div className="user-edit-form-section">
            <form  className='user-edit-form'>
                <div className="user-edit-form-name-div user-edit-input-box">
                    <div className="user-edit-input-wrapper">
                        <FaUser className='user-edit-icon' />
                        <input className='user-edit-input-field' type="text" placeholder='Firstname' />
                    </div>
                    <div className="user-edit-input-wrapper">
                        <FaUser className='user-edit-icon' />
                        <input className='user-edit-input-field' type="text" placeholder='Lastname' />
                    </div>
                </div>
                <div className="user-edit-input-wrapper">
                    <FaUser className='user-edit-icon' />
                    <input  className='user-edit-input-field'  type="text" placeholder='Username' />
                </div>
                <div className="user-edit-input-wrapper">
                    <FaEnvelope className='user-edit-icon' />
                    <input className='user-edit-input-field' type="text" placeholder='Email' />
                </div>
                <div className="user-edit-input-wrapper">
                    <FaLock className='user-edit-icon' />
                    <input className='user-edit-input-field' type="password" placeholder='Password' />
                </div>
                <div className="user-edit-nationality-div user-edit-input-box">
                    <div className="user-edit-input-wrapper">
                        <FaGlobe className='user-edit-icon' />
                        <input className='user-edit-input-field' type="text" placeholder='Nationality' />
                    </div>
                    <div className="user-edit-input-wrapper">
                        <FaMapMarkerAlt className='user-edit-icon' />
                        <input className='user-edit-input-field' type="text" placeholder='Country of origin' />
                    </div>
                </div>
                <button className='user-edit-form-button'>Save Changes</button>
            </form>
        </div>
    </div>
  )
}
