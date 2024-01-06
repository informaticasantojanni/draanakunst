import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useTurnos } from '../../../hooks/useTurnos';

/*
Google Appscript WebApp Version Web
https://script.google.com/u/1/home/projects/1vXH2wIi3OAo_i6-mgFW36JVberpJBb4fjcK9G3A-ebRxOY_POeEzdmqU/edit

Google Appscript WebApp Version API Cuenta BA
https://script.google.com/home/projects/1cpBvXksSbCJ5ccgPtvj1V6_yaX8cNWMUu7j3EZqrSBuMvonjTZYOxulV/edit

URL Fetch Google Cuenta BA
https://script.google.com/macros/s/AKfycbxhO2wz9WJe4N0L9u_nOQLS7UvuXJGTFH44sfNMHXECDTlOSc-nPIhtnkeO0ad72GS7Xg/exec
 */

const useGoogleCalendar = () => {


    const URL_FETCH_GOOGLE = "https://script.google.com/macros/s/AKfycby8J8erqbSvhhfdONhU3FUZwhuocvXn1RL2htG900iXjSxpPkraVKGAxb2ZNix64Auu/exec"
    const GET_EVENT_BY_ID = "getEventByID";
    const GET_EVENTS_BY_TIME_RANGE = "getEventsByTimeRange";
    const GET_EVENTS_FOR_DAY = "getEventsForDay";

    const today = new Date();
    const [date, setDate] = useState(today);
    const [virtualEvents, setVirtualEvents] = useState([]);
    const [presencialEvents, setPresencialEvents] = useState([]);

    const { showConfirmForm,
        setShowConfirmForm,
        selectedEvent,
        setSelectedEvent } = useTurnos();

    const handleGetEventsForDay = (date) => {
        setDate(date);
        // Prepara data object with calendar data
        const request = {
            type: GET_EVENTS_FOR_DAY,
            data: {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate()
            }
        }

        fetchUrl(request);
        // console.log("Day selected is: ", date.getFullYear(), date.getMonth(), date.getDate())

    }

    const buildAvailableEvents = (dateEvents) => {
        console.log("dateEvents length are: ", dateEvents.length);
        if (dateEvents.length > 0) {
            const tempVirtualEvents = dateEvents.filter(event => event.title.toLowerCase() === "virtual")
                .map(event => {
                    return {
                        eventId: event.eventId,
                        title: event.title,
                        day: event.day,
                        month: event.month,
                        startTime: event.startTime,
                        endTime: event.endTime,
                        type: "Virtual"
                    }
                });
            const tempPresencialEvents = dateEvents.filter(event => event.title.toLowerCase() === "presencial")
                .map(event => {
                    return {
                        eventId: event.eventId,
                        title: event.title,
                        day: event.day,
                        month: event.month,
                        startTime: event.startTime,
                        endTime: event.endTime,
                        type: "Presencial"
                    }
                });

            setVirtualEvents(tempVirtualEvents.length > 0 ? tempVirtualEvents : null);
            setPresencialEvents(tempPresencialEvents.length > 0 ? tempPresencialEvents : null)
        } else {
            setVirtualEvents(null);
            setPresencialEvents(null);
        }

    }


    const handleGetEventsByTimeRange = () => {
        // Prepara data object with form input data
        const request = {
            type: GET_EVENTS_BY_TIME_RANGE,
            data: {
                rangeStart: 0,
                rangeEnd: 10
            }
        }
        // fetchUrl(request);
    }


    const handleGetEventById = (eventId) => {
        const request = {
            type: GET_EVENT_BY_ID,
            data: {
                event_id: eventId
            }
        }
        // fetchUrl(request);
    }

    const fetchUrl = (request) => {
        // Fetch Gmail to send email
        fetch(URL_FETCH_GOOGLE, {
            method: 'POST',
            redirect: "follow",
            dataType: 'json',
            accepts: 'application/json',
            body: JSON.stringify(request)
        })
            .then((response) => response.json())
            .then((dateEvents) => {
                // Handle the response from the Google Apps Script endpoint
                buildAvailableEvents(dateEvents); //call this function to build the events arrays
            })
            .catch((error) => {
                console.log('Error:', error.message);
            });
    }

    const disablePreviusDates = ({ date, view }) => {
        // Disable all days before today
        // console.log('Current date:', date);
        // console.log('Today:', new Date());
        return date < new Date();
    };

    const handleSelect = (event) => {
        console.log("This is the id of the event: ", event);
        setSelectedEvent(event);
        setShowConfirmForm(true);

    }

    return {
        disablePreviusDates,
        handleGetEventsForDay,
        date,
        virtualEvents,
        presencialEvents,
        handleSelect,
    };
}

export default useGoogleCalendar;


