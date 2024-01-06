import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import TurnosProvider from '../../providers/TurnosProvider';


const RootProvider = ({ children }) => {
    return (
        <HelmetProvider>
            <TurnosProvider>
                {children}
            </TurnosProvider>
        </HelmetProvider>
    )
}

export default RootProvider