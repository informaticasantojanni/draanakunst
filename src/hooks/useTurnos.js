import { useContext } from "react";
import { TurnosContext } from "../context/TurnosContext";

export const useTurnos = () => {

    const { showConfirmForm,
        setShowConfirmForm,
        selectedEvent,
        setSelectedEvent } = useContext(TurnosContext);

    return {
        showConfirmForm,
        setShowConfirmForm,
        selectedEvent,
        setSelectedEvent
    };

}