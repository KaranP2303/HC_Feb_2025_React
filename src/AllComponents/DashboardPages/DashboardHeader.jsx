import React, { useState } from 'react';
import '../Styles/DashboardStyle/DashboardHeader.css';
import Hc_Logo from '../Assets/HC_LOGO.svg';
import { Search, Bell, Sun, Info } from "lucide-react";
import ProfileImg from '../Assets/ProfileImg.jpg';
import { Link } from 'react-router-dom';

export const DashboardHeader = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  
  return (
    <div className='dashboard-header'>
      <img className='dashboard-header-logo' src={Hc_Logo} alt="Hc Logo" />

      <div className="header-search-container">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>

        {/* Icons */}
        <div className="icon-group">
          <Bell className="icon"  />
          <Sun className="icon"  />
          <Info className="icon"  />
          <div className="dashboard-header-profile-menu">
            <img src={ProfileImg} className='search-container-profile cursor-pointer' alt=""
              onClick={() => setShowProfileMenu(!showProfileMenu)} />
              {/* Dropdown Menu */}
              <div className={`dropdown-menu ${showProfileMenu ? "visible" : "hidden"}`}>
                <ul>
                  <li><Link className='user-profile-menu-options' to={"/dashboard/profile"}>Profile </Link> </li>
                  <li><Link className='user-profile-menu-options' to={"/dashboard/leaderboard"}>Leaderboard</Link> </li>
                  <li className="logout"><Link className='user-profile-menu-options' to={"/login"}>Logout</Link></li>
                </ul>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

