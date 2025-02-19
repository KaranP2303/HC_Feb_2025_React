
import Footer from './AllComponents/HeaderAndFooter/Footer';
import Header from './AllComponents/HeaderAndFooter/Header';
import './App.css';
import HC_logo from './AllComponents/Assets/HC_LOGO.svg';
import Banner1 from './AllComponents/HomePageContents/Banner1';
import Training from './AllComponents/HomePageContents/Training';
import MovingBanner from './AllComponents/HomePageContents/Movingbanner'
import Testimonials from './AllComponents/HomePageContents/Testimonials';
import CyberSecurityCTA from './AllComponents/HomePageContents/CyberSecurityCTA';
import CyberStats from './AllComponents/HomePageContents/CyberStats';

function App() {
  return (
    <div className="App">
      <Header logo={HC_logo} />
      <main >
        <Banner1 />
        <MovingBanner/>
        <Training />
        <CyberStats />
        <CyberSecurityCTA/>
        <Testimonials />
      </main>
      <Footer logo={HC_logo}/>
    </div>
  );
}

export default App;
