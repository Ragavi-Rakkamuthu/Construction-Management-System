import React from 'react'
import './Newsletter.css'
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsTrophyFill } from "react-icons/bs";
function Newsletter() {
  return (
    <div className="dad">
      <div className="mom">
        <BsSuitcaseLgFill className='icons1'/>
        <h4>10</h4>
        <hr />
        <p>Years on the Market</p>
      </div>
      <div className="mom">
        <FaSmile className='icons1'/>
        <h4>95</h4>
        <hr />
        <p>Operational Brigades</p>
      </div>
      <div className="mom">
      <BsBarChartLineFill className='icons1' />
        <h4>359</h4>
        <hr />
        <p>Units Engineering</p>
      </div>
      <div className="mom">
      <BsTrophyFill className='icons1'/>
        <h4>46</h4>
        <hr />
        <p>Employees of the Company</p>
      </div>
    </div>
  )
}

export default Newsletter
