// import '../Styles/SignUpPageStyle.css';

// import React, { useState } from 'react'

// export const SignUpPage = (props) => {
// 	const [input1, onChangeInput1] = useState('');
//   return (
//     <div className="contain">
// 			<div className="scroll-view">
// 				<div className="row-view">
// 					<img
// 						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/w28rckpv.png"} 
// 						className="image"
// 					/>
// 					<div className="column">
// 						<div className="view">
// 							<img
// 								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/v1m8huwz.png"} 
// 								className="image2"
// 							/>
// 						</div>
// 						<div className="view2">
// 							<span className="text" >
// 								{"Login to Your Account"}
// 							</span>
// 						</div>
// 						<div className="column2">
// 							<div className="row-view2">
// 								<button className="button-row-view"
// 									onClick={()=>alert("Pressed!")}>
// 									<img
// 										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/qtbjwmqd.png"} 
// 										className="image3"
// 									/>
// 									<span className="text2" >
// 										{"First Name"}
// 									</span>
// 								</button>
// 								<button className="button-row-view2"
// 									onClick={()=>alert("Pressed!")}>
// 									<img
// 										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/cwjkdagp.png"} 
// 										className="image3"
// 									/>
// 									<span className="text2" >
// 										{"Last Name"}
// 									</span>
// 								</button>
// 							</div>
// 							<div className="row-view3">
// 								<img
// 									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/3mnaapwy.png"} 
// 									className="image4"
// 								/>
// 								<span className="text3" >
// 									{"Username"}
// 								</span>
// 							</div>
// 							<div className="row-view4">
// 								<img
// 									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/p98w8y6p.png"} 
// 									className="image5"
// 								/>
// 								<span className="text3" >
// 									{"Email"}
// 								</span>
// 							</div>
// 							<div className="column3">
// 								<div className="view3">
// 									<div className="row-view5">
// 										<div className="row-view6">
// 											<img
// 												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/9dqofi9o.png"} 
// 												className="image6"
// 											/>
// 											<span className="text4" >
// 												{"Password"}
// 											</span>
// 										</div>
// 										<img
// 											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/fgzldcq0.png"} 
// 											className="image7"
// 										/>
// 									</div>
// 								</div>
// 								<span className="text3" >
// 									{"Minimum length is 8 characters."}
// 								</span>
// 							</div>
// 							<div className="row-view2">
// 								<button className="button-row-view"
// 									onClick={()=>alert("Pressed!")}>
// 									<img
// 										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/lo9ymu35.png"} 
// 										className="image3"
// 									/>
// 									<span className="text5" >
// 										{"Nationality"}
// 									</span>
// 								</button>
// 								<button className="button-row-view2"
// 									onClick={()=>alert("Pressed!")}>
// 									<img
// 										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/1eh75g3h.png"} 
// 										className="image3"
// 									/>
// 									<span className="text6" >
// 										{"Country Of Residence"}
// 									</span>
// 								</button>
// 							</div>
// 							<input
// 								placeholder={"Referral Code (Optional)"}
// 								value={input1}
// 								onChange={(event)=>onChangeInput1(event.target.value)}
// 								className="input"
// 							/>
// 							<div className="row-view7">
// 								<div className="box">
// 								</div>
// 								<span className="text7" >
// 									{"I agree to the Terms and Conditions"}
// 								</span>
// 							</div>
// 							<button className="button"
// 								onClick={()=>alert("Pressed!")}>
// 								<span className="text8" >
// 									{"Sign Up"}
// 								</span>
// 							</button>
// 						</div>
// 						<div className="column4">
// 							<div className="column5">
// 								<div className="row-view8">
// 									<div className="box2">
// 									</div>
// 									<span className="text9" >
// 										{"Or"}
// 									</span>
// 									<div className="box3">
// 									</div>
// 								</div>
// 								<div className="view4">
// 									<div className="row-view9">
// 										<img
// 											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/nW6Q5clgLb/80lq4dao.png"} 
// 											className="image8"
// 										/>
// 										<span className="text10" >
// 											{"Google"}
// 										</span>
// 									</div>
// 								</div>
// 							</div>
// 							<span className="text11" >
// 								{"Don’t have an account? Sign Up"}
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//   )
// }


import '../Styles/SignUpPageStyle.css';
import React, { useState } from 'react';
import SignupPageImg from '../Assets/LoginPageImgs/LoginPageSvg.svg';
import HcLogo from '../Assets/HC_LOGO.svg';
import GoogleIconSvg from '../Assets/LoginPageImgs/GoogleIconSvg.svg'

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
                    Already have an account? <a href="#">Sign In</a>
                </p>
            </form>
        </div>

     </div>
  );
};