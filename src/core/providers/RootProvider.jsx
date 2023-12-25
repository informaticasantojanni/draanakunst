import React from 'react'
import { HelmetProvider } from "react-helmet-async";

const RootProvider = ({children}) => {
    return (
        <HelmetProvider>
            {children}
        </HelmetProvider>
    )
}

export default RootProvider