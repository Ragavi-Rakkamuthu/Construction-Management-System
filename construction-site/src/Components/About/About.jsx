import React from 'react';
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
  const handleSendButtonClick = () => {
    // Extracting values from input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Constructing the email body
    const subject = 'Message from Construction Partner Inquiry';
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    // Composing the mailto URL
    const mailtoUrl = `mailto:ragavii0228@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Opening the user's default email client with pre-filled fields
    window.location.href = mailtoUrl;
  };

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
        <p>
        With over a decade of dedicated service, we have proudly built a reputation for excellence in delivering exceptional construction solutions tailored to our clients' needs. Specializing in construction, elevation planning, designing, and more, our seasoned team brings a wealth of expertise and creativity to every project. Whether it's crafting visionary architectural designs or executing meticulous construction plans, we are committed to surpassing expectations with unparalleled craftsmanship and attention to detail.At NK Construction, we don't just construct buildings; we sculpt dreams into reality, ensuring every structure we create stands as a testament to our unwavering commitment to quality and client satisfaction. Join us on this journey of transformation, where your vision meets our passion for building a better tomorrow.
        </p>
      </div>
      <div className='planreq'>
        <h2>Looking for the best construction partner?</h2>
        <div className="request">
          <h1>Send us a message</h1>
          <div className="refields">
            <input id="name" type="text" placeholder='Your Name' />
            <input id="email" type="email" placeholder='Email Address' />
            <input id="phone" type="phone" placeholder='Phone' />
            <textarea id="message" placeholder='Your Message' />
          </div>
          {/* Adding onClick event handler to the Send button */}
          <button onClick={handleSendButtonClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default About;

