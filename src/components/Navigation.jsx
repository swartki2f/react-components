import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
 return (
  <div>
   <ul>
    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
     <li>Accuil</li>
    </NavLink>
    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
     <li>A-propos</li>
    </NavLink>
   </ul>
  </div>
 );
};

export default Navigation;