import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePageContainer } from './HomePageContents/HomePageContainer';
import { PackagesDetails } from './UserViewPages/PackagesDetails';
import { AboutUsPage } from './UserViewPages/AboutUsPage';
import { Footer } from './HeaderAndFooter/Footer';
import Banner2 from './HomePageContents/Banner2';
import Header from './HeaderAndFooter/Header';
import HC_logo from './Assets/HC_LOGO.svg';
import { UserEditProfile } from './UserPages/UserEditProfile';

export const UserRoutingPage = () => {
    const location = useLocation();
    const hideHeaderFooter = ["/login", "/sign-up","/sample","/dashboard"].includes(location.pathname);
  return (
    <>
        {!hideHeaderFooter && <Banner2/>}
        {!hideHeaderFooter && <Header logo={HC_logo} />}
        <Routes>
            <Route index element={<HomePageContainer />}/>
            <Route path='/course-packages' element={<PackagesDetails />}/>
            <Route path='/about-us' element={<AboutUsPage />}/>
            <Route path="/edit-user" element={<UserEditProfile/>} />
        </Routes>
        {!hideHeaderFooter && <Footer/>}
    </>
    
  )
}
