

import Header from './AllComponents/HeaderAndFooter/Header';
import './App.css';
import HC_logo from './AllComponents/Assets/HC_LOGO.svg';
import Banner2 from './AllComponents/HomePageContents/Banner2';
import HeroSection from './AllComponents/HomePageContents/HeroSection';
import Counters from './AllComponents/HomePageContents/Counter';
import { ContactForm } from './AllComponents/HomePageContents/ContactForm';
import { Footer } from './AllComponents/HeaderAndFooter/Footer';
import { AboutOurService } from './AllComponents/HomePageContents/AboutOurService';
import { WhyHCAcademy } from './AllComponents/HomePageContents/WhyHcAcademy';
import { Testimonials } from './AllComponents/HomePageContents/Testimonial';
import { CyberSecurityModules } from './AllComponents/HomePageContents/CyberSecurityModule';

function App() {
  return (
    <div className="App">
      <Banner2/>
      <Header logo={HC_logo} />
      <main >
        <HeroSection/>
        <AboutOurService/>
        <Counters/>
        <WhyHCAcademy/>
        <CyberSecurityModules/>
        <Testimonials />
        <ContactForm />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
