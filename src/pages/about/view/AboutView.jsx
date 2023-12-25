import React from 'react'
import "./aboutView.css"
import AboutCV from '../components/AboutCV'
import AboutHero from '../components/AboutHero'
import PageHeader from '../../../components/pageHeader/PageHeader'

const AboutView = () => {
  return (
    <div>
      <PageHeader title="Sobre mi"/>
      <AboutCV/>
    </div>
  )
}

export default AboutView