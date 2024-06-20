import React from 'react'

const Explore = () => {
  return (
    <div>
      <div className='hireus'>
        <h2>Get your plan..!</h2>
      <div className="container1">
        {/* <h1>send us your plan</h1> */}
        <div className="fields1">
          <input type="text" placeholder='Your Name' />
          {/* <input type="email" placeholder=' Email Address' /> */}
          <input type="phone"placeholder='Phone' />
          <textarea type="text"placeholder='Specifications'/>
        </div>
        <button>Send</button>
        
      </div>
      
    </div>
    </div>
  )
}

export default Explore
