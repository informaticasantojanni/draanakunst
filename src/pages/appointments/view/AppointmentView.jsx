import React from 'react'
import "./appointmentView.css"

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
  const GET_EVENTS_BY_TIME = "getEventsByTime";

  const handleGetEvents = () => {
    // Prepara data object with form input data
    // const request = {
    //   type: GET_EVENTS_BY_TIME,
    //   data: {
    //     rangeStart: 0,
    //     rangeEnd: 10
    //   }
    // }
    const request = {
      type: GET_EVENT_BY_ID,
      data: {
        event_id: "68niefdb2n4nghuimv1u95ddav@google.com"
      }
    }

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
        console.log("Response status: ", data[0].startTime);
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
      <button onClick={handleGetEvents}>Get Calendar Events</button>
    </div>
  )
}

export default AppointmentView
