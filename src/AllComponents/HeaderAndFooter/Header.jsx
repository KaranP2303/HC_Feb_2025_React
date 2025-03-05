import React from 'react';
import '../Styles/HeaderAndFooterStyle.css';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: "Learn", href: "#" },
  { name: "For Compete", href: "#" },
  { name: "For Education", href: "#" },
  { name: "For Business", href: "#" },
  { name: "Pricing", href: "course-packages" },
  { name: "About Us", href: "/about-us" },
];

const Header = (props) => {
  return (
    <header className="header">
      <img className="header-logo" src={props.logo} alt="HC Logo" />
      
      <nav className="nav">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.href} className="nav-link">
            {link.name}
          </Link>
        ))}
      </nav>
      
      <div className="auth-buttons">
        <Link to={'/login'} className="login">Log In</Link>
        <Link to={'/sign-up'} className="join">Join For Free</Link>
      </div>
    </header>
  );
};

export default Header;

