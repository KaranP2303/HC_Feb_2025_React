
import React, { useState } from "react";
import "../Styles/LoginPageStyle.css";
import LoginPageSvg from '../Assets/LoginPageImgs/LoginPageSvg.svg';
import LoginPageHcLogo from '../Assets/HC_LOGO.svg';
import EmailIcon from '../Assets/LoginPageImgs/EmailIconSvg.svg';
import PasswordLockIcon from '../Assets/LoginPageImgs/PasswordLock.svg';
import GoogleIconSvg from '../Assets/LoginPageImgs/GoogleIconSvg.svg';
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="sign-in">
      <div className="login-container">
        {/* Left Image Section */}
        <div className="login-image">
            <img
                src={LoginPageSvg}
                alt="Illustration"
                />
        </div>
        

        {/* Form Section */}
        <form className="login-form" onSubmit={handleLogin}>
          <img
            className="logo"
            src={LoginPageHcLogo}
            alt="App Logo"
          />
          <h2 className="login-title">Login to Your Account</h2>

          {/* Input Fields */}
          <div className="input-group">
            <img className="icon" src={EmailIcon} alt="Email Icon" />
            <input
            className="email-value"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <img className="icon" src={PasswordLockIcon} alt="Password Icon" />
            <input
                className="password-value"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            Login
          </button>

          {/* Forgot Password */}
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>

          {/* Divider */}
          <div className="divider">
            <span className="line"></span>
            <span className="or">Or</span>
            <span className="line"></span>
          </div>

          {/* Google Login Button */}
          <button className="google-btn">
            <img src={GoogleIconSvg} alt="Google Icon" />
            Continue with Google
          </button>

          {/* Sign Up Link */}
          <p className="signup-text">
            Don’t have an account? <Link to='/sign-up'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

