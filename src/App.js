import './App.css';
import { Routes,Route } from 'react-router-dom';
import { DashboardContainer } from './AllComponents/DashboardPages/DashboardContainer';
import { UserRoutingPage } from './AllComponents/UserRoutingPage';
import { LoginSignUpPage } from './AllComponents/LoginAndSignUp/LoginSignUpPage';
import { Provider } from 'react-redux';
import store from './AllComponents/FunctionalityComponents/State/store';
import { Unauthorized } from './AllComponents/ErrorPages/Unauthorized';
import ProtectedRoute from './AllComponents/FunctionalityComponents/Routes/PrivateRoutes';

function App() {
 return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={<UserRoutingPage />}/>
          <Route element={<ProtectedRoute allowedRoles={["sys_admin", "user_L1", "user_L2"]} />}>
            <Route path="/dashboard/*" element={<DashboardContainer />} />
          </Route>
          <Route path='/login' element={<LoginSignUpPage />}/>
          <Route path='/signup' element={<LoginSignUpPage />}/>
          <Route element={<ProtectedRoute allowedRoles={["sys_admin", "user_L1", "user_L2"]} />}>
            <Route path='/unauthorized' element={<Unauthorized />}/>
          </Route>
        </Routes>
      </Provider>
    </div>
    
  );
}

export default App;
