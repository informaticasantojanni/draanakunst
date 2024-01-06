import React, { useState } from 'react'
import "./appointmentView.css"
import FormConfirmation from '../components/FormConfirmation';
import CalendarEvents from '../components/CalendarEvents';
import { useTurnos } from '../../../hooks/useTurnos';

const AppointmentView = () => {

 const {showConfirmForm} = useTurnos();
  return (
    <div className='appointments--container'>
      {showConfirmForm ? <FormConfirmation />  : <CalendarEvents />}

    </div>
  );
}

export default AppointmentView
