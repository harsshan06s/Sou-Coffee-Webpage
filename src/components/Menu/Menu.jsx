import React from 'react'
import './Menu.css'   
import arabica from '../../assets/arabica.jpg'
import robusta from '../../assets/robusta.jpg'
import liberica from '../../assets/Liberica.jpg'
import m_icon_1 from '../../assets/co1.png'
import m_icon_2 from '../../assets/co2.png'

const Menu = () => {
  return (
    <div className="menu">
      <div className="menus">
        <img src={arabica} alt="" />
        <div className="caption">
            <img src={m_icon_1} alt=" " />
            <p>Arabica Coffee</p>
        </div>
      </div>
      <div className="menus">
        <img src={robusta} alt="" />
        <div className="caption">
            <img src={m_icon_2} alt=" " />
            <p>Robusta Coffee</p>
        </div>
      </div>
      <div className="menus">
        <img src={liberica} alt="" />
        <div className="caption">
            <img src={m_icon_1} alt=" " />
            <p>Liberica Coffee</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
