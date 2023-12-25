import React from 'react'
import "./contactView.css"
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'
import PageHeader from '../../../components/pageHeader/PageHeader'

const ContactView = () => {
  return (
    <div>
      <PageHeader title="Contacto" />
      <ContactForm />
    </div>
  )
}

export default ContactView