import React from 'react'
import { NavLink} from 'react-router-dom';
import '../assets/css/style.css';
const Navbar = () => {
  return (
<ul className="navigation-menu">
  <li className="menu-item">
    <NavLink exact to="/" className="menu-link">
      Home
    </NavLink>
  </li>
  <li className="menu-item">
    <NavLink to="/service" className="menu-link">
      Service
    </NavLink>
  </li>
  <li className="menu-item">
    <NavLink to="/about" className="menu-link">
      About
    </NavLink>
  </li>
  <li className="menu-item">
    <NavLink to="/project" className="menu-link">
      Project
    </NavLink>
  </li>
  <li className="menu-item">
    <NavLink to="/blog" className="menu-link">
      Blog
    </NavLink>
  </li>
  <li className="menu-item">
    <NavLink to="/contact" className="menu-link">
      Contact
    </NavLink>
  </li>
</ul>

  )
}

export default Navbar