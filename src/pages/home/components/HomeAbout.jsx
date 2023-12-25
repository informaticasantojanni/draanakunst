import React, { useEffect, useState } from 'react'
import "./HomeAbout.css"
import "../../../../src/styles.css"
import { Link } from 'react-router-dom';
import aboutImage from '../../../assets/doctor_about_1.jpg';

import { homeAboutText } from "./homeAboutData";


const HomeAbout = () => {

  const [trunkLimit, setTrunkLimit] = useState(150);

  const truncate = (description) => {
    const words = description.split(' ');

    if (words.length <= trunkLimit) {
      return description;
    } else {
      const truncatedWords = words.slice(0, trunkLimit);
      return truncatedWords.join(' ') + '...';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setTrunkLimit(150)
      }if (window.innerWidth > 768 && window.innerWidth < 1200) {
        setTrunkLimit(25)
      } else {
        setTrunkLimit(150)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (


    <div className="main-container">
      <div className="homeAbout mt-5 mb-5">
        <div className="homeAbout--text">
          <p className='homeAbout--text-title titlePri2'>Dra. Ana Kunst</p>
          <p className='homeAbout--text-body text2 mb-2'>{truncate(homeAboutText.body)}
          </p>

          < Link className="btn1" to="/about" >Ver más</Link>

        </div>
        <div className="homeAbout--image">
          <img src={aboutImage} alt="Dra. Levin" />
        </div>
      </div>

    </div>

  )
}

export default HomeAbout