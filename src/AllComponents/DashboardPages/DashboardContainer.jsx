import React, { useState } from "react";
import '../Styles/DashboardStyle/DashboardContainerStyle.css';
import { Aside } from "./Aside";
import { DashboardHeader } from "./DashboardHeader";
import { LeaderboardPage } from "./LeaderBoardPage";
import { Route, Routes } from "react-router-dom";
import { UserProfilePage } from "../UserPages/UserProfilePage";
import { TrainingModule } from "./TrainingModule";
import { UserEditProfile } from "../UserPages/UserEditProfile";

export const DashboardContainer = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
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
          />
        {/* Main Content */}
        <main className="main-content">
          {/* <LeaderboardPage /> */}
          <Routes>
            <Route index element={<UserProfilePage/>} />
            <Route path="/profile" element={<UserProfilePage/>} />
            <Route path="/leaderboard" element={<LeaderboardPage/>} />
            <Route path="/training-module" element={<TrainingModule/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

