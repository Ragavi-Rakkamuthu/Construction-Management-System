import React from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h4>Contact Us</h4>
        <p className="address">
          NO.298/138,L.N.Puram,Aranthangi,Pudukkottai-614616
        </p>
        <hr className="hradrs"/>
        <p className="email">
          <span>Email:</span>nkconstructionatg@gmail.com
        </p>
        <hr className="hrmail" />
        <p className="phone">
        <span>Phone:</span>8610398078
        </p>
        <hr className="hrphone" />
        <div className="logos">
        <img src="" alt="" />
          <ul>
            <li>Home</li><hr className='line'/>
            <li>Residential</li><hr className='line'/>
            <li>Commercial</li><hr className='line'/>
            <li>Interior</li><hr className='line'/>
            <li>About</li><hr className='line'/>
          </ul>
      </div>
        <p className="rights">&copy; All Rights Reserved. Copyright Building Survey Management System 2023</p>
      </div>
    </div>   
  )
}

export default Footer
