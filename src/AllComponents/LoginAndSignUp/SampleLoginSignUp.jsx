// import React from 'react';
// import '../Styles/SampleLoginSignUpStyle.css';

// export const SampleLoginSignUp = () => {
//     const container = document.querySelector('.container');
//     const registerBtn = document.querySelector('.register-btn');
//     const loginBtn = document.querySelector('.login-btn');

//     registerBtn.addEventListener('click', () => {
//         container.classList.add('active');
//     })

//     loginBtn.addEventListener('click', () => {
//         container.classList.remove('active');
//     })
//   return (
//     <div class="sample-container">
//         <div class="form-box login">
//             <form action="#">
//                 <h1>Login</h1>
//                 <div class="input-box">
//                     <input type="text" placeholder="Username" required />
//                     <i class='bx bxs-user'></i>
//                 </div>
//                 <div class="input-box">
//                     <input type="password" placeholder="Password" required />
//                     <i class='bx bxs-lock-alt' ></i>
//                 </div>
//                 <div class="forgot-link">
//                     <a href="#">Forgot Password?</a>
//                 </div>
//                 <button type="submit" class="btn">Login</button>
//                 <p>or login with social platforms</p>
//                 <div class="social-icons">
//                     <a href="#"><i class='bx bxl-google' ></i></a>
//                     <a href="#"><i class='bx bxl-facebook' ></i></a>
//                     <a href="#"><i class='bx bxl-github' ></i></a>
//                     <a href="#"><i class='bx bxl-linkedin' ></i></a>
//                 </div>
//             </form>
//         </div>

//         <div class="form-box register">
//             <form action="#">
//                 <h1>Registration</h1>
//                 <div class="input-box">
//                     <input type="text" placeholder="Username" required />
//                     <i class='bx bxs-user'></i>
//                 </div>
//                 <div class="input-box">
//                     <input type="email" placeholder="Email" required />
//                     <i class='bx bxs-envelope' ></i>
//                 </div>
//                 <div class="input-box">
//                     <input type="password" placeholder="Password" required />
//                     <i class='bx bxs-lock-alt' ></i>
//                 </div>
//                 <button type="submit" class="btn">Register</button>
//                 <p>or register with social platforms</p>
//                 <div class="social-icons">
//                     <a href="#"><i class='bx bxl-google' ></i></a>
//                     <a href="#"><i class='bx bxl-facebook' ></i></a>
//                     <a href="#"><i class='bx bxl-github' ></i></a>
//                     <a href="#"><i class='bx bxl-linkedin' ></i></a>
//                 </div>
//             </form>
//         </div>

//         <div class="toggle-box">
//             <div class="toggle-panel toggle-left">
//                 <h1>Hello, Welcome!</h1>
//                 <p>Don't have an account?</p>
//                 <button class="btn register-btn">Register</button>
//             </div>

//             <div class="toggle-panel toggle-right">
//                 <h1>Welcome Back!</h1>
//                 <p>Already have an account?</p>
//                 <button class="btn login-btn">Login</button>
//             </div>
//         </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import '../Styles/SampleLoginSignUpStyle.css';

export const SampleLoginSignUp = () => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className="sample-section">
            <div className={`sample-container ${isRegister ? 'active' : ''}`}>
                {/* Login Form */}
                <div className="form-box login">
                    <form action="#">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="forgot-link">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p>or login with social platforms</p>
                        <div className="social-icons">
                            <a href="#"><i className='bx bxl-google'></i></a>
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-github'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </form>
                </div>

                {/* Registration Form */}
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
                        <button type="submit" className="btn">Register</button>
                        <p>or register with social platforms</p>
                        <div className="social-icons">
                            <a href="#"><i className='bx bxl-google'></i></a>
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-github'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </form>
                </div>

                {/* Toggle Panel */}
                <div className="toggle-box">
                    <div className="toggle-panel toggle-left">
                        <h1>Hello, Welcome!</h1>
                        <p>Don't have an account?</p>
                        <button className="btn register-btn" onClick={() => setIsRegister(true)}>Register</button>
                    </div>

                    <div className="toggle-panel toggle-right">
                        <h1>Welcome Back!</h1>
                        <p>Already have an account?</p>
                        <button className="btn login-btn" onClick={() => setIsRegister(false)}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
