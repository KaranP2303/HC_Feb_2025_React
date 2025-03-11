import '../Styles/LoginAndSignupStyle/SignUpPageStyle.css';
import React from 'react';
import SignupPageImg from '../Assets/LoginPageImgs/LoginPageSvg.svg';
import HcLogo from '../Assets/HC_LOGO.svg';
import GoogleIconSvg from '../Assets/LoginPageImgs/GoogleIconSvg.svg'
import { Link } from 'react-router-dom';

export const SignUpPage = () => {

  return (
    <div className="signup-section">
        <div className="signup-container">
            <div className="signup-image-div">
                <img className="signup-image" src={SignupPageImg} alt="" />
            </div>
            <form className="signup-form">
                <div className="signup-form-logo">
                    <img className="signup-form-logo-img" src={HcLogo} alt="" />
                </div>
                <h2 className="signup-form-title">Create Your Account</h2>
                <div className="signup-form-name">
                    <input type="text" name=""  placeholder="firstname" id="" />
                    <input type="text" name=""  placeholder="lastname" id="" />
                </div>
                <input type="text" name=""  placeholder="username" id="" />
                <input type="text" name=""  placeholder="email" id="" />
                <input type="text" name=""  placeholder="password" id="" />
                <div className="signup-form-nationality-data">
                    <input type="text" name=""  placeholder="nationality" id="" />
                    <input type="text" name=""  placeholder="country" id="" />
                </div>
                <input type="text" name="" placeholder='refereal code' id="" />
                <div className="singup-terms-container">
                    <input type="radio" id="terms" className="checkbox" />
                    <label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>
                <button type="submit" className='login-btn'>Sign Up</button>

                <div className="signup-form-divider">
                    <span className="signup-form-line"></span>
                    <span className="signup-form-or">Or</span>
                    <span className="signup-form-line"></span>
                </div>

                {/* Google Login Button */}
                <button className="signup-form-google-btn">
                    <img src={GoogleIconSvg} alt="Google Icon" />
                    Continue with Google
                </button>

                {/* Sign Up Link */}
                <p className="signup-text">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </form>
        </div>

     </div>
  );
};