import React from 'react'
import './About.css';
import al1 from '../Assets/abt1.jpg'
import al2 from '../Assets/abt2.jpg'
import al3 from '../Assets/abt3.jpg'
import al4 from '../Assets/abt4.jpg'
import al5 from '../Assets/abt5.jpg'
import al6 from '../Assets/abt6.jpg'
import al7 from '../Assets/abt7.jpg'
import al8 from '../Assets/abt8.jpg'
import al9 from '../Assets/abt9.jpg'

const About = () => {
  return (
    <div className="us">
    <div className="about">
      <h1>About</h1>
        <ul>
          <li>planning</li>
          <li>Construction</li>
          <li>Elevation</li>
          <li>Interior</li>
          <li>Designing</li>
        </ul>
    </div>
    <div className="alist">
      <img src={al1} alt="" />
      <img src={al2} alt="" />
      <img src={al3} alt="" />
      <img src={al4} alt="" />
      <img src={al5} alt="" />
      <img src={al6} alt="" />
      <img src={al7} alt="" />
      <img src={al8} alt="" />
      <img src={al9} alt="" />
    </div>
    <div className="abtpara">
        <p>With over a decade of dedicated service, we have proudly built a reputation for excellence in delivering exceptional construction solutions tailored to our clients' needs. Specializing in construction, elevation planning, designing, and more, our seasoned team brings a wealth of expertise and creativity to every project. Whether it's crafting visionary architectural designs or executing meticulous construction plans, we are committed to surpassing expectations with unparalleled craftsmanship and attention to detail.At NK Construction, we don't just construct buildings; we sculpt dreams into reality, ensuring every structure we create stands as a testament to our unwavering commitment to quality and client satisfaction. Join us on this journey of transformation, where your vision meets our passion for building a better tomorrow.
</p>
    </div>
    <div className='hireus'>
        <h2>Looking for best construction partner ?</h2>
      <div className="container1">
        <h1>send us message</h1>
        <div className="fields1">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder=' Email Address' />
          <input type="phone"placeholder='Phone' />
          <textarea type="text"placeholder='Your Message'/>
        </div>
        <button>Send</button>
        
      </div>
      
    </div>
    </div>
  )
}

export default About
