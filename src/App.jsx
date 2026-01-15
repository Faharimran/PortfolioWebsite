import React from 'react'
import  BlurBackground  from './components/BlurBackground'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Expriences from './components/Expriences'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
// import TestimonialsTest from './components/TestimonialsTest'


import DragonCursor from './components/DragonCursor'
const App = () => {
  return (
    <>
    <BlurBackground/>
    <NavBar />
    <main className='relative z-10 antialiased overflow-x-hidden max-w-7xl mx-auto cursor-none hover:cursor-none'>
      <DragonCursor/>
      <Hero/>
      <Projects/>
      <About/>
      <Expriences/>
      <Testimonials/>
      <Contacts/>
      {/* <TestimonialsTest/> */}
      
      
      
    </main>
    </>
  )
}

export default App