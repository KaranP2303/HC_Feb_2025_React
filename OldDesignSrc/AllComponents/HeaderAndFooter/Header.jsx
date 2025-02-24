import React from 'react';
import '../Styles/HeaderAndFooterStyle.css';

// const Header = () => {
//   return (
//     // <div class="header">
//     //     <img
//     //       class="whats-app-image-2024-02-21-at-17-30-1"
//     //       src={HC_logo}
//     //     />
//     //     <div class="list">
//     //       <div class="frame-1">
//     //         <div class="learn">Learn</div>
//     //         <div class="for-compete">For Compete</div>
//     //         <div class="for-education">For Education</div>
//     //         <div class="for-business">For Business</div>
//     //         <div class="pricing">Pricing</div>
//     //         <div class="about-us">About Us</div>
//     //       </div>
//     //     </div>
//     //     <div class="frame-11">
//     //       <div class="link">
//     //         <div class="log-in">Log In</div>
//     //       </div>
//     //       <div class="link2">
//     //         <div class="join-for-free">Join For Free</div>
//     //       </div>
//     //     </div>
//     //   </div>
//   )
// }

// export default Header

const navLinks = [
  { name: "Learn", href: "#" },
  { name: "For Compete", href: "#" },
  { name: "For Education", href: "#" },
  { name: "For Business", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About Us", href: "#" },
];

const Header = (props) => {
  return (
    <header className="header">
      <img className="header-logo" src={props.logo} alt="HC Logo" />
      
      <nav className="nav">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="nav-link">
            {link.name}
          </a>
        ))}
      </nav>
      
      <div className="auth-buttons">
        <button className="login">Log In</button>
        <button className="join">Join For Free</button>
      </div>
    </header>
  );
};

export default Header;

