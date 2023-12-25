import React, { useEffect, useState } from 'react';
import './navbar.css';
import NavDesktop from './components/NavDesktop';
import NavMobile from './components/NavMobile';


const Navbar = () => {

    const [mobileView, setMobileView] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div>
            {
                (mobileView) ? <NavMobile /> : <NavDesktop />
            }

        </div>
    )

}

export default Navbar