import React from 'react'
import "./HomeContact.css"
import { Link } from 'react-router-dom';

const HomeContact = () => {
  return (



    <div className="homeContact  mt-5 mb-5">
      <div className="main-container">
        <div className="homeContact--container">

          <div className="homeContact__cell">
            <div className="homeContact__cell__icon">
              <span class="material-symbols-outlined google-icon">call</span>
            </div>
            <div className="homeContact__cell__text">
              <p>11-1234-5678</p>
            </div>
          </div>

          <div className="homeContact__email">
            <div className="homeContact__email__icon">
              <span class="material-symbols-outlined google-icon">mail</span>
            </div>
            <div className="homeContact__email__text">
              < Link className="link-to" to="/contact" >Envie su consulta</Link>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default HomeContact