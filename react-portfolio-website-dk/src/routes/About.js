import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT." text="Hello I'm a Full-Stack Developer"/>
      <Footer />
    </div>
  )
}

export default About