import React from 'react';
import './Explore.css';
const Explore = () => {
  const handleSendButtonClick = () => {
    // Extracting values from input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const specifications = document.getElementById('specifications').value;

    // Constructing the email body
    const subject = 'Plan Request';
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSpecifications: ${specifications}`;

    // Composing the mailto URL
    const emailAddress = 'ragavii0228@gmail.com';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Opening the user's default email client with pre-filled fields
    window.location.href = mailtoUrl;
  };

  return (
    <div>
      <div className='hireus'>
        <h2>Get your plan..!</h2>
        <div className="container1">
          <div className="fields1">
            <input id="name" type="text" placeholder='Your Name'/>
            <input id="email" type="email" placeholder='Email Address' />
            <input id="phone" type="phone" placeholder='Phone' />
            <textarea id="specifications" type="text" placeholder='Specifications' />
          </div>
          {/* Adding onClick event handler to the Send button */}
          <button onClick={handleSendButtonClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
