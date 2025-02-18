
import Footer from './AllComponents/HeaderAndFooter/Footer';
import Header from './AllComponents/HeaderAndFooter/Header';
import './App.css';
import HC_logo from './AllComponents/Assets/HC_LOGO.svg';
import Training from './AllComponents/HomePageContents/Training';

function App() {
  return (
    <div className="App">
      <Header logo={HC_logo} />
      <main >
        <Training />
      </main>
      <Footer logo={HC_logo}/>
    </div>
  );
}

export default App;
