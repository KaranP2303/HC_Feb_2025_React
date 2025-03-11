// export const DashboardContainer = () => {
//   const [content, setContent] = useState("Welcome to the Dashboard! Select an option from the sidebar.");

//   const loadContent = (page) => {
//     switch (page) {
//       case "home":
//         setContent("This is the home page content.");
//         console.log(content);
//         break;
//       case "profile":
//         setContent("This is the profile page content.");
//         console.log(content);
//         break;
//       case "settings":
//         setContent("This is the settings page content.");
//         console.log(content);
//         break;
//       default:
//         setContent("Welcome to the Dashboard! Select an option from the sidebar.");
//         console.log(content);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Header */}
//       <header className="header">
//         <h1>Dashboard Header</h1>
//       </header>

//       {/* Content Wrapper */}
//       <div className="content-wrapper">
//         {/* Sidebar */}
//         <aside className="sidebar">
//           <nav>
//             <ul>
//               <li>
//                 <button onClick={() => loadContent("home")}>Home</button>
//               </li>
//               <li>
//                 <button onClick={() => loadContent("profile")}>Profile</button>
//               </li>
//               <li>
//                 <button onClick={() => loadContent("settings")}>Settings</button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="main-content">
//           <p>{content}</p>
//         </main>
//       </div>
//     </div>
//   );
// };



import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import '../Styles/DashboardStyle/DashboardContainerStyle.css';
import { Aside } from "./Aside";
import { DashboardHeader } from "./DashboardHeader";
import { LeaderboardPage } from "./LeaderBoardPage";
import { Route, Routes } from "react-router-dom";
import { UserProfilePage } from "../UserPages/UserProfilePage";

export const DashboardContainer = () => {
  const [content, setContent] = useState("Welcome to the Dashboard! Select an option from the sidebar.");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const loadContent = (page) => {
    switch (page) {
      case "home":
        setContent("This is the home page content.");
        break;
      case "profile":
        setContent("This is the profile page content.");
        break;
      case "settings":
        setContent("This is the settings page content.");
        break;
      default:
        setContent("Welcome to the Dashboard! Select an option from the sidebar.");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard-container">
      <DashboardHeader/>
      

      {/* Content Wrapper */}
      <div className="content-wrapper">
        <Aside isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          loadContent={loadContent}/>
        {/* Main Content */}
        <main className="main-content">
          {/* <LeaderboardPage /> */}
          <Routes>
            <Route index element={<UserProfilePage/>} />
            <Route path="/profile" element={<UserProfilePage/>} />
            <Route path="/leaderboard" element={<LeaderboardPage/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

