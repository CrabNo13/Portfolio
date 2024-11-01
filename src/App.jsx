import { useState } from 'react'
import './App.css'
import { Tv } from '../elements/Tv'
import { Phone } from '../elements/Phone'
import { Navbar } from '../components/navbar'
import { HomePage } from '../elements/Homepage'
import { AboutMe } from '../elements/AboutMe'
import { PhoneMe } from '../elements/PhoneMe'
import { Projects } from '../elements/Projects'
import { Skills } from '../elements/Skills'
import { Experience } from '../elements/Experience'

function App() {

  return (
    <>
      <HomePage />
      <div className='aboutSection'>
        <AboutMe />
        <Tv />
      </div>
      <div className='contactSection'>
        <PhoneMe />
        <Phone />
      </div>
      <Projects />
      <Skills />
      <Experience />
      <Navbar />
    </>
  )
}

export default App
