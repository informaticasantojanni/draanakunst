import React, { useState } from 'react'
import "./formConfirmation.css"
import { useTurnos } from '../../../hooks/useTurnos';


const FormConfirmation = () => {

    const {selectedEvent, setShowConfirmForm} = useTurnos();

    const URL_FETCH_GOOGLE = "https://script.google.com/macros/s/AKfycby8J8erqbSvhhfdONhU3FUZwhuocvXn1RL2htG900iXjSxpPkraVKGAxb2ZNix64Auu/exec"
    const UPDATE_EVENT_BY_ID = "updateEventByID";


    // Define state variables for form fields
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [btnSubmitText, setBtnSubmitText] = useState("Confirmar");


    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnSubmitText("Procesndo...");

        // Prepara data object with form input data
        const request = {
            type: UPDATE_EVENT_BY_ID,
            data: {
                eventId: selectedEvent.eventId,
                name: name,
                lastname: lastname,
                email: email,
                phone: phone,
                especialidad: "Clinica"
            }
        }
        console.log("Fetch data is: ", request);
        fetchUrl(request)
    };

    // Fetch Gmail to send email
    const fetchUrl = (request) => {

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
                setBtnSubmitText("Confirmado!");
                setShowConfirmForm(false);
                setTimeout(() => { setBtnSubmitText('Confirmar') }, 2000);
                // Reset form fields after submission
                setName('');
                setLastname('');
                setEmail('');
                setPhone('');

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    return (
        <div className='contactForm mt-5 mb-5'>

            <div className="contactForm--container">

                <div className="contactForm__header">
                    <p className='text2 mb-2'>Usted ha seleccionado un turno en la modalidad {selectedEvent.type} para el día {selectedEvent.day} de {selectedEvent.month} a las {selectedEvent.startTime} Hs</p>
                    <p className='text2 mb-2'>Para confirmar, por favor complete sus datos y haga click en Confirmar, de lo contrario haga click en Cancelar para volver al Calendario:</p>
                </div>

                <div className="contactForm__body">
                    <form onSubmit={handleSubmit}>
                        <div className="contactForm__form text3">

                            <div className="contactForm__form__input">
                                <label>Nombre:</label>
                                <input
                                    className='text2'
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="contactForm__form__input">
                                <label>Apellido:</label>
                                <input
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="contactForm__form__input">
                                <label>Correo electrónico:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>


                            <div className="contactForm__form__input">
                                <label>Telefono:</label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <input className="btn1 contactForm__form__btn--style mt-3" type="submit" value={btnSubmitText} />
                            <input className="btn1 contactForm__form__btn--style mt-3" onClick={()=>{setShowConfirmForm(false)}} value="Cancelar" />

                        </div>

                    </form>
                </div>


            </div>
        </div>
    )
}

export default FormConfirmation