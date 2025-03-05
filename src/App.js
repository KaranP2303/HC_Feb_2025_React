

import Header from './AllComponents/HeaderAndFooter/Header';
import './App.css';
import HC_logo from './AllComponents/Assets/HC_LOGO.svg';
import Banner2 from './AllComponents/HomePageContents/Banner2';
import { Footer } from './AllComponents/HeaderAndFooter/Footer';
import { Router,Routes,Route, useLocation } from 'react-router-dom';
import { HomePageContainer } from './AllComponents/HomePageContents/HomePageContainer';
import { LoginPage } from './AllComponents/LoginAndSignUp/LoginPage';
import { SignUpPage } from './AllComponents/LoginAndSignUp/SignUpPage';
import { PackagesDetails } from './AllComponents/UserViewPages/PackagesDetails';
import { AboutUsPage } from './AllComponents/UserViewPages/AboutUsPage';
import { SampleLoginSignUp } from './AllComponents/LoginAndSignUp/SampleLoginSignUp';

function App() {
  const location = useLocation();
  // Hide Header & Footer on these routes
  const hideHeaderFooter = ["/login", "/sign-up"].includes(location.pathname);
  return (
    // <Router>
      <div className="App">
        {!hideHeaderFooter && <Banner2/>}
        {!hideHeaderFooter && <Header logo={HC_logo} />}
        <main >
          <Routes>
            <Route path='/' element={<HomePageContainer />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/sign-up' element={<SignUpPage />}/>
            <Route path='/course-packages' element={<PackagesDetails />}/>
            <Route path='/about-us' element={<AboutUsPage />}/>
            <Route path='/sample' element={<SampleLoginSignUp />}/>
          </Routes>
          
        </main>
        {!hideHeaderFooter && <Footer/>}
      </div>
    // </Router>
    
  );
}

export default App;
