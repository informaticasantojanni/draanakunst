import React, {useState} from "react";
import { TurnosContext } from "../context/TurnosContext";

const TurnosProvider = ({ children }) => {
    const [showConfirmForm, setShowConfirmForm] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    return (

        <TurnosContext.Provider
            value={{
                showConfirmForm,
                setShowConfirmForm,
                selectedEvent,
                setSelectedEvent
            }}
        >
            {children}
        </TurnosContext.Provider>
    );
};

export default TurnosProvider;

