import React from 'react';
import '../Styles/HeaderAndFooterStyle.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { logoutUser } from '../FunctionalityComponents/State/actions/authActions';

const navLinks = [
  { name: "Learn", href: "#" },
  { name: "For Compete", href: "#" },
  { name: "For Education", href: "#" },
  { name: "For Business", href: "#" },
  { name: "Pricing", href: "course-packages" },
  { name: "About Us", href: "/about-us" },
];

const Header = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch logout action
  };
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
      {!token ? (
        <>
        <Link to={'/login'} className="login">Log In</Link>
        <Link to={'/signup'} className="join">Join For Free</Link>
        </>
      ):(
        <Link to={'/login'} className="logout" onClick={handleLogout}> <BiLogOutCircle className="logout-icon"/>Log Out</Link>
      )
      }
      </div>
    </header>
  );
};

export default Header;

