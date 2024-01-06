import React from 'react'
import "./calendarEvents.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import useGoogleCalendar from '../hooks/useGoogleCalendar';

const CalendarEvents = () => {

    const {
        disablePreviusDates,
        handleGetEventsForDay,
        date,
        virtualEvents,
        presencialEvents,
        handleSelect } = useGoogleCalendar();
     

    return (
        <div>
            <Calendar tileDisabled={disablePreviusDates} onChange={handleGetEventsForDay} value={date} />

            {/* EVENTOS VIRTUALES */}
            <div className='appointments__buttons--container'>
                {virtualEvents && Array.isArray(virtualEvents) && virtualEvents.length > 0 ? (
                    virtualEvents.map((event, index) => (
                        <button
                            className='appointments__buttons--icon'
                            key={index}
                            onClick={() => handleSelect(event)}
                        >{event.title} {event.startTime}</button>
                    ))
                ) : (
                    <p>Sin turnos virtuales disponibles</p>
                )}

            </div>

            {/* EVENTOS PRESENCIALES */}
            <div className='appointments__buttons--container'>
                {presencialEvents && Array.isArray(presencialEvents) && presencialEvents.length > 0 ? (
                    presencialEvents.map((event, index) => (
                        <button
                            className='appointments__buttons--icon'
                            key={index}
                            onClick={() => handleSelect(event)}
                        >{event.title} {event.startTime}</button>
                    ))
                ) : (
                    <p>Sin turnos presenciales disponibles</p>
                )}

            </div>
        </div>
    )
}

export default CalendarEvents
