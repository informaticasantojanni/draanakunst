import React from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import { navItems } from "./navItems"


const NavDesktop = () => {


  return (
    <nav>
      <div className="navDesktop--container">
        <div className="navDesktop__logo">
          <p className='titlePri3'><strong>Dra.</strong> Ana <strong> Kunst </strong></p>
        </div>
        <div className="navDesktop__links">
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="linkTo textLinks" to={item.link}>{item.label}</Link></li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavDesktop