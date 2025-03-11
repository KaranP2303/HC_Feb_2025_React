import React, { useState } from 'react';
import '../Styles/LoginAndSignupStyle/SampleLoginSignUpStyle.css';
import loginImg from '../Assets/LoginPageImgs/LoginPageSvg.svg';
import { Link } from 'react-router-dom';

export const SampleLoginSignUp = () => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className="sample-section">
            <div className={`sample-container ${isRegister ? 'active' : ''}`}>
                <div className="form-box sample-login">
                    <form action="#" className='sample-login-form'>
                        <h1>Login</h1>
                        <div className="sample-box-input-div">
                            <div className="input-box">
                                <input type="text" placeholder="Username" required />
                                <i className='bx bxs-user'></i>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder="Password" required />
                                <i className='bx bxs-lock-alt'></i>
                            </div>
                        </div>
                        <div className="forgot-link">
                            <Link to={'/'}>Forgot Password?</Link>
                        </div>
                        <button type="submit" className="btn submit-btn">Login</button>
                        <p>or login with social platforms</p>
                        <div className="social-icons">
                            <Link to={'/'}><i className='bx bxl-google'></i></Link>
                            <Link to={'/'}><i className='bx bxl-facebook'></i></Link>
                            <Link to={'/'}><i className='bx bxl-github'></i></Link>
                            <Link to={'/'}><i className='bx bxl-linkedin'></i></Link>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <form action="#">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <button type="submit" className="btn submit-btn">Register</button>
                        <p>or register with social platforms</p>
                        <div className="social-icons">
                            <Link to={'/'}><i className='bx bxl-google'></i></Link>
                            <Link to={'/'}><i className='bx bxl-facebook'></i></Link>
                            <Link to={'/'}><i className='bx bxl-github'></i></Link>
                            <Link to={'/'}><i className='bx bxl-linkedin'></i></Link>
                        </div>
                    </form>
                </div>

                <div className="toggle-box">
                    <div className="toggle-panel toggle-left">
                        <img className='toggle-box-svg' src={loginImg} alt="" />
                        <h1>Hello, Welcome!</h1>
                        <p>Don't have an account?</p>
                        <button className="btn register-btn" onClick={() => setIsRegister(true)}>Register</button>
                    </div>

                    <div className="toggle-panel toggle-right">
                    <img className='toggle-box-svg' src={loginImg} alt="" />
                        <h1>Welcome Back!</h1>
                        <p>Already have an account?</p>
                        <button className="btn login-btn" onClick={() => setIsRegister(false)}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
