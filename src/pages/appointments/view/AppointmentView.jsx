import React, { useState } from 'react'
import "./appointmentView.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

/*
Google Appscript WebApp Version Web
https://script.google.com/u/1/home/projects/1vXH2wIi3OAo_i6-mgFW36JVberpJBb4fjcK9G3A-ebRxOY_POeEzdmqU/edit

Google Appscript WebApp Version API Cuenta BA
https://script.google.com/u/1/home/projects/1KOF3RPWvAXBxoBZ3cfjoVXi5wyGsm0xNm_C1_N1I2cCFsIR-ya0VxoSX/edit

URL Fetch Google Cuenta BA
https://script.google.com/macros/s/AKfycbxhO2wz9WJe4N0L9u_nOQLS7UvuXJGTFH44sfNMHXECDTlOSc-nPIhtnkeO0ad72GS7Xg/exec
 */

const AppointmentView = () => {
  const URL_FETCH_GOOGLE = "https://script.google.com/macros/s/AKfycby8J8erqbSvhhfdONhU3FUZwhuocvXn1RL2htG900iXjSxpPkraVKGAxb2ZNix64Auu/exec"
  const GET_EVENT_BY_ID = "getEventByID";
  const GET_EVENTS_BY_TIME_RANGE = "getEventsByTimeRange";
  const GET_EVENTS_FOR_DAY = "getEventsForDay";

  const today = new Date();
  const [date, setDate] = useState(today);


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
        console.log("Day selected is: ", date.getFullYear(), date.getMonth(), date.getDate())
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
    fetchUrl(request);
  }


  const handleGetEventById = (eventId) => {
    const request = {
      type: GET_EVENT_BY_ID,
      data: {
        event_id: eventId
      }
    }
    fetchUrl(request);
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
      .then((data) => {
        // Handle the response from the Google Apps Script endpoint
        console.log("Response status: ", data);
        // console.log("Response data: ", data.events);
        // setBtnSubmitText("Enviado!");
        // setTimeout(() => { setBtnSubmitText('Enviar') }, 2000);
        // Reset form fields after submission

      })
      .catch((error) => {
        console.log('Error:', error.message);
      });
  }


  return (
    <div>
      <button onClick={() => handleGetEventsByTimeRange()}>Get Calendar Events</button>
      <button onClick={() => handleGetEventById("28spqq5fj38h0i9shmlev22efm@google.com")}>Get Calendar Events</button>

      <Calendar onChange={handleGetEventsForDay} value={date} />
    </div >
  )
}

export default AppointmentView
