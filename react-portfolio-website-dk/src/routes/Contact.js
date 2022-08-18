import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm.js'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTACT." text="Hey, Lets Talk"/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact