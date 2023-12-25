import React from 'react'
import "./generalLayout.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const GeneralLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default GeneralLayout