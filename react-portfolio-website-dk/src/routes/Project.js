import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS." text="Some of my works"/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Project