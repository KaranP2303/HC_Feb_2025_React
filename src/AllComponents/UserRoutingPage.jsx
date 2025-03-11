import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomePageContainer } from './HomePageContents/HomePageContainer'
import { LoginPage } from './LoginAndSignUp/LoginPage'
import { SignUpPage } from './LoginAndSignUp/SignUpPage'
import { PackagesDetails } from './UserViewPages/PackagesDetails'
import { AboutUsPage } from './UserViewPages/AboutUsPage'
import { SampleLoginSignUp } from './LoginAndSignUp/SampleLoginSignUp'
import { Footer } from './HeaderAndFooter/Footer'
import Banner2 from './HomePageContents/Banner2'
import Header from './HeaderAndFooter/Header';
import HC_logo from './Assets/HC_LOGO.svg';

export const UserRoutingPage = () => {
    const location = useLocation();
    const hideHeaderFooter = ["/login", "/sign-up","/sample","/dashboard"].includes(location.pathname);
  return (
    <>
        {!hideHeaderFooter && <Banner2/>}
        {!hideHeaderFooter && <Header logo={HC_logo} />}
        <Routes>
            <Route index element={<HomePageContainer />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/sign-up' element={<SignUpPage />}/>
            <Route path='/course-packages' element={<PackagesDetails />}/>
            <Route path='/about-us' element={<AboutUsPage />}/>
            <Route path='/sample' element={<SampleLoginSignUp />}/>
        </Routes>
        {!hideHeaderFooter && <Footer/>}
    </>
    
  )
}
