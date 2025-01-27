import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/icons8-back-48.png'

const Hero = () => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    console.log("Explore button clicked");
    navigate("/explore")
  }
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>"Brewed for the Bold, Sipped with Love."</h1>
        <p>"Coffee is the perfect blend of energy and comfort, bringing people together with every sip. From bold espressos to creamy lattes, each cup is crafted with passion, bringing warmth and flavor to your day."</p>
        <button className="btn" onClick={handleExploreClick}>Explore More <img src={arrow} alt="arrow"/></button>
      </div>
    </div>
  )
}

export default Hero
