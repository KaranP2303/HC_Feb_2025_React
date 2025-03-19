import React from 'react';
import '../Styles/DashboardStyle/AsideStyle.css';
import { FaTachometerAlt, FaCreditCard, FaUsers, FaBriefcase, FaFileAlt, FaHandshake, FaBookOpen} from "react-icons/fa"; 
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Aside = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <nav className='aside-nav'>
        <ul>
          <li>
            <button className='aside-nav-buttons' > 
              <FaTachometerAlt /> {!isCollapsed && "Dashboard"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' > 
              <FaCreditCard /> {!isCollapsed && "Payment"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' > 
              <FaUsers /> {!isCollapsed && "Users"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' > 
              <FaBriefcase /> {!isCollapsed && "Hobs"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons'> 
              <FaFileAlt /> {!isCollapsed && "Proposals"}
            </button>
          </li>
          <li>
            <button  className='aside-nav-buttons' > 
              <FaHandshake /> {!isCollapsed && "InstaDeals Proposals"}
            </button>
          </li>
          <li>
            <button className='aside-nav-buttons' > 
              <Link className='aside-nav-buttons-text' to={"/dashboard/training-module"}>
                <FaBookOpen /> {!isCollapsed && "Training Modules"}
              </Link>
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
