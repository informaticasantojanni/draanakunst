import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import { navItems } from "./navItems"
import Hamburger from './Hamburger';
import { useEffect } from 'react';


const NavMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerCheckbox, setHamburgerCheckbox] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setHamburgerCheckbox(!hamburgerCheckbox);
    };


    useEffect(() => {
        menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [menuOpen]);


    return (
        <nav>
            <div className="navMobile--container">
                {/* HEADER */}
                < div className={menuOpen ? "navMobile__header expanded" : "navMobile__header"}>
                    <div className="navMobile__header__content">
                        <div>
                            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} hamburgerCheckbox={hamburgerCheckbox} setHamburgerCheckbox={setHamburgerCheckbox} />
                        </div>
                        <div>
                            <p className='titleSec3'>Dra. Ana Kunst</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>


                <div className={menuOpen ? "navMobile__body visible" : "navMobile__body"}>

                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    < Link className="linkTo textLinks" to={item.link} onClick={handleMenuToggle} >{item.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavMobile