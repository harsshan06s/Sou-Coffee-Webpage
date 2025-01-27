import React from 'react'
import './About.css'
import abt_img from '../../assets/heart.jpg'
import play_icon from '../../assets/play.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={abt_img} alt="" className='abt-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT BREWZY</h3>
            <h2>"Brewzy: Where every sip sparks joy!"</h2>
            <p>Welcome to Brewzy, where every cup tells a story! We’re not just a coffee shop; we’re your daily dose of warmth, energy, and connection. At Brewzy, we believe coffee is more than just a drink—it’s an experience.</p>
            <p>We source the finest Arabica, Robusta, and Liberica beans, crafting brews that celebrate the art of coffee-making. Whether you’re here for a quick espresso, a relaxing latte, or a bold pour-over, every sip is brewed with passion and precision.</p>
            <p>Step into Brewzy for a cozy ambiance, delightful conversations, and the irresistible aroma of freshly brewed coffee. From morning pick-me-ups to unwinding moments, we’re here to make your coffee time the best part of your day.</p>
            <p>Because at Brewzy, every brew is a masterpiece, and every guest is family.</p>
        </div>
    </div>
  )
}

export default About
