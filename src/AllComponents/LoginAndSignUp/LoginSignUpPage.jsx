import React, { useEffect, useState } from 'react';
import '../Styles/LoginAndSignupStyle/SampleLoginSignUpStyle.css';
import loginImg from '../Assets/LoginPageImgs/LoginPageSvg.svg';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '../Assets/LoginPageImgs/EmailIconSvg.svg';
import PasswordLockIcon from '../Assets/LoginPageImgs/PasswordLock.svg';
import LoginPageHcLogo from '../Assets/HC_LOGO.svg';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser,clearErrors,registerUser} from '../FunctionalityComponents/State/actions/authActions'

export const LoginSignUpPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [registerFormData, setRegisterFormData] = useState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      nationality: "",
      country: "",
      phoneNumber:"",
      referal: "",
      termsAccepted: false,
    });
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const { token, user, loading, error,successMessage } = useSelector((state) => state.auth);

      // Handle Change for both forms
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (isRegister) {
            // If it's the signup form, update registerFormData
            setRegisterFormData((prev) => ({ 
                ...prev, 
                [name]: type === "checkbox" ? checked : value 
            }));
        } else {
            // If it's the login form, update credentials
            setCredentials((prev) => ({ 
                ...prev, 
                [name]: value 
            }));
        }
    };
    

      const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (!registerFormData.termsAccepted) {
          alert("You must accept the Terms & Conditions.");
          return;
        }
        dispatch(registerUser(registerFormData));
      };
    
      // Handle Form Submission
      const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credentials));
      };
    
      // Redirect after successful login
      useEffect(() => {
        if (token && user) {
          switch (user.userRole) {
            case "sys_admin":
            case "user_L1":
            case "user_L2":
              navigate("/dashboard");
              break;
            default:
              navigate("/");
          }
        }
      }, [token, user, navigate]);
    
      // Clear errors on component unmount
      useEffect(() => {
        return () => {
          setTimeout(() => {
            dispatch(clearErrors());
          }, 5000);
        };
      }, [dispatch]);
    return (
        <div className="sample-section">
            <div className={`sample-container ${isRegister ? 'active' : ''}`}>
                 <div className="sign-in-form-box sample-login">
                    <form onSubmit={handleLoginSubmit} className='sample-login-form'>
                        <img
                            className="sign-in-logo"
                            src={LoginPageHcLogo}
                            alt="App Logo"
                        />
                        <h2 className="sign-in-title">Login to Your Account</h2>
                        {error && <p className="rqst-failed-text">*{error}</p>}
                        <div className="sign-in-input-group">
                            <img className="sign-in-icon" src={EmailIcon} alt="Email Icon" />
                            <input
                            className="sign-in-email-value"
                            type="text"
                            placeholder="Email"
                            id='loginUsername'
                            value={credentials.email}
                            onChange={handleChange}
                            name='email'
                            required
                            />
                        </div>

                        <div className="sign-in-input-group">
                            <img className="sign-in-icon" src={PasswordLockIcon} alt="Password Icon" />
                            <input
                                className="sign-in-password-value"
                            type="password"
                            placeholder="Password"
                            id='loginPassword'
                            value={credentials.password}
                            onChange={handleChange}
                            name='password'
                            required
                            />
                        </div>
                        <button type="submit" className="sign-in-btn">
                            {/* Login */}{loading ? "Logging in..." : "Login"}
                        </button>
                        <Link to="/forgot-password" className="sign-in-forgot-password-link">
                            Forgot Password?
                        </Link>
                    </form>
                </div>

                <div className="sign-up-form-box register">
                    {/* <form onSubmit={handleRegisterSubmit} className="signup-form">
                        <div className="signup-form-logo">
                            <img className="signup-form-logo-img" src={LoginPageHcLogo} alt="" />
                        </div>
                        <h2 className="signup-form-title">Create Your Account</h2>
                        <div className="signup-form-name">
                            <input type="text" name=""  placeholder="firstname" id="firstname" />
                            <input type="text" name=""  placeholder="lastname" id="lastname" />
                        </div>
                        <input type="text" name=""  placeholder="username" id="username" />
                        <input type="text" name=""  placeholder="email" id="email" />
                        <input type="text" name=""  placeholder="password" id="password" />
                        <div className="signup-form-nationality-data">
                            <input type="text" name=""  placeholder="nationality" id="nationality" />
                            <input type="text" name=""  placeholder="country" id="country" />
                        </div>
                        <input type="text" name="" placeholder='refereal code' id="referal" />
                        <div className="singup-terms-container">
                            <input type="radio" id="terms" className="checkbox" />
                            <label htmlFor="terms">I agree to the Terms & Conditions</label>
                        </div>
                        <button type="submit" className='sign-in-btn login-btn'>Sign Up</button>
                    </form> */}
                    <form onSubmit={handleRegisterSubmit} className="signup-form">
                      <div className="signup-form-logo">
                        <img className="signup-form-logo-img" src={LoginPageHcLogo} alt="" />
                      </div>
                      <h2 className="signup-form-title">Create Your Account</h2>
                      {error && <p className="rqst-failed-text">*{error}</p>}
                      {successMessage && <p className="rqst-success-text">*{successMessage}</p>}
                      <div className="signup-form-name">
                        <input type="text" name="firstname" placeholder="Firstname" value={registerFormData.firstname} onChange={handleChange} required />
                        <input type="text" name="lastname" placeholder="Lastname" value={registerFormData.lastname} onChange={handleChange} required />
                      </div>
                      <input type="text" name="username" placeholder="Username" value={registerFormData.username} onChange={handleChange} required />
                      <input type="email" name="email" id='email' placeholder="Email" value={registerFormData.email} onChange={handleChange} required />
                      <input type="password" name="password" id='password' placeholder="Password" value={registerFormData.password} onChange={handleChange} required />
                      <div className="signup-form-nationality-data">
                        <input type="text" name="nationality" placeholder="Nationality" value={registerFormData.nationality} onChange={handleChange} />
                        <input type="text" name="country" placeholder="Country" value={registerFormData.country} onChange={handleChange} />
                      </div>
                      <input type="text" name="phoneNumber" placeholder="Phone Number" value={registerFormData.phoneNumber} onChange={handleChange} />
                      <input type="text" name="referal" placeholder="Referral Code (Optional)" value={registerFormData.referal} onChange={handleChange} />
                      <div className="signup-terms-container">
                        <input type="checkbox" name="termsAccepted" className="checkbox" checked={registerFormData.termsAccepted} onChange={handleChange} />
                        <label htmlFor="termsAccepted">I agree to the Terms & Conditions</label>
                      </div>
                      <button type="submit" className="sign-in-btn login-btn">Sign Up</button>
                    </form>
                </div>
 
                <div className="toggle-box">
                    <div className="toggle-panel toggle-left">
                    <img className='sign-in-toggle-box-svg' src={loginImg} alt="" />
                    <span className='sign-in-toggle-panel-title'>Hello, Welcome!</span>
                    <p className='sign-in-toggle-panel-desc'>Don't have an account?</p>
                    <button className="sign-in-toggle-panel-btn sign-up-btn" onClick={() => setIsRegister(true)}>Register</button>
                    </div>

                    <div className="toggle-panel toggle-right">
                <img className='sign-in-toggle-box-svg' src={loginImg} alt="" />
                    <h1 className='sign-in-toggle-panel-title'>Welcome Back!</h1>
                    <p className='sign-in-toggle-panel-desc'>Already have an account?</p>
                    <button className="sign-in-toggle-panel-btn sign-in-btn" onClick={() => setIsRegister(false)}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
