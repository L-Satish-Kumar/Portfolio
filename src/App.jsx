import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Qualifications from './components/qualifications/Qualifications'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      {/* <Services /> */}
      <Qualifications />
      <Contact />
    </main>
    </>
  )
}

export default App
