import React from 'react';
import '../Styles/HeaderAndFooterStyle.css';

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

