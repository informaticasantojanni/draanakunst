import React from 'react'
import "./PageHeader.css"
import "../../styles.css"

const PageHeader = ({ title }) => {
    return (
        <div className="header">
            <div className="header--container">
                <h2 className='titleSec2'>{title}</h2>
            </div>
        </div>
    )
}

export default PageHeader