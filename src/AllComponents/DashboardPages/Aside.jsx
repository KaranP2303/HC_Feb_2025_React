import React from 'react';
import '../Styles/DashboardStyle/AsideStyle.css';
import { FaTachometerAlt, FaCreditCard, FaUsers, FaBriefcase, FaFileAlt, FaHandshake, FaBookOpen, FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import {  ChevronLeft, ChevronRight } from 'lucide-react';

export const Aside = ({ isCollapsed, toggleSidebar, loadContent }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <nav className='aside-nav'>
        <ul>
          <li>
            <button className='aside-nav-buttons' onClick={() => loadContent("dashboard")}> 
              <FaTachometerAlt /> {!isCollapsed && "Dashboard"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' onClick={() => loadContent("payment")}> 
              <FaCreditCard /> {!isCollapsed && "Payment"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' onClick={() => loadContent("users")}> 
              <FaUsers /> {!isCollapsed && "Users"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' onClick={() => loadContent("hobs")}> 
              <FaBriefcase /> {!isCollapsed && "Hobs"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' onClick={() => loadContent("proposals")}> 
              <FaFileAlt /> {!isCollapsed && "Proposals"}
            </button>
          </li>
          <li>
            <button  className='aside-nav-buttons' onClick={() => loadContent("instaDealsProposals")}> 
              <FaHandshake /> {!isCollapsed && "InstaDeals Proposals"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' onClick={() => loadContent("influencersGuide")}> 
              <FaBookOpen /> {!isCollapsed && "Influencers Guide"}
            </button>
          </li>
        </ul>
      </nav>
      <button className="sidebar-toggle-inside" onClick={toggleSidebar}>
        {isCollapsed ? <ChevronRight className='chevron-icon' /> : <ChevronLeft  className='chevron-icon'/>}
      </button>
    </aside>
  );
};
