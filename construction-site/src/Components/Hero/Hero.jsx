import React from 'react'
import './Hero.css';
import dis1 from '../Assets/dis1.jpg';
import dis2 from '../Assets/dis2.jpg';
import dis3 from '../Assets/dis3.jpg';
import dis4 from '../Assets/dis4.jpg';

const Hero = () => {
  return (
    <div className='hero'>
       <ul>
        <li> <img src={dis1} alt="" /> </li>
        <li> <img src={dis2} alt="" /> </li>
        <li> <img src={dis3} alt="" /> </li>
        <li> <img src={dis4} alt="" /> </li>
       </ul>
    </div>
  )
}

export default Hero
