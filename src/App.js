
import Footer from './AllComponents/HeaderAndFooter/Footer';
import Header from './AllComponents/HeaderAndFooter/Header';
import './App.css';
import HC_logo from './AllComponents/Assets/HC_LOGO.svg';
import Training from './AllComponents/HomePageContents/Training';
import Banner1 from './AllComponents/HomePageContents/Banner1';

function App() {
  return (
    <div className="App">
      <Header logo={HC_logo} />
      <main >
        <Banner1 />
        {/* <Training /> */}
      </main>
      <Footer logo={HC_logo}/>
    </div>
  );
}

export default App;
