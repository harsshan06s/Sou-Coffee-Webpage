import React from 'react'
import './Coffee.css'
import p1 from '../../assets/c2.jpg'
import p2 from '../../assets/c3.jpg'
import p3 from '../../assets/c4.jpg'
import p4 from '../../assets/c13.jpg'
import arrow from '../../assets/icons8-back-48.png'

const Coffee = () => {
  return (
    <div className='coffee'>
        <div className='photo'>
            <div className='photo-item'>
                <p>Cappuccino</p>
                <img src={p1} alt=""/>
            </div>
            <div className='photo-item'>
                <p>Latte</p>
                <img src={p2} alt=""/>
            </div>
            <div className='photo-item'>
                <p>Espresso</p>
                <img src={p3} alt=""/>
            </div>
            <div className='photo-item'>
                <p>Turkish Coffee</p>
                <img src={p4} alt=""/>
            </div>
        </div>
        <button className='btn'>Keep Brewing—See More Coffee!<img src={arrow} alt=""/></button>
    </div>
  )
}

export default Coffee
