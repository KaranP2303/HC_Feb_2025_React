import './App.css';
import { Routes,Route } from 'react-router-dom';
import { DashboardContainer } from './AllComponents/DashboardPages/DashboardContainer';
import { UserRoutingPage } from './AllComponents/UserRoutingPage';

function App() {
 return (
    <div className="App">
        <Routes>
          <Route path='/*' element={<UserRoutingPage />}/>
          <Route path='/dashboard/*' element={<DashboardContainer />}/>
        </Routes>
    </div>
    
  );
}

export default App;
