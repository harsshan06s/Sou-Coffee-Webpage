import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Title from './components/Title/Title'
import About from './components/About/About'
import Coffee from './components/Coffee/Coffee'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact' 
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState]= useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Bean Types" title="Brews of distinction"/>
        <Menu/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Menu" title="Taste the Brewzy Magic"/>
        <Coffee/>
        <Title subTitle="Testimonials" title="Brewzy Moments, Shared"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get in touch with Us!"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App