import React from 'react'
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import { IoPeople } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
const Popular = () => {
  return (
    // <div className='popular'>
    //   <h1>popular</h1>
    //   <hr />
    //   <div className="popular-item">
    //     {data_product.map((item,i)=>{
    //         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    //     })}
    //   </div>
    // </div>
    <div className="popular">
      <div className="top">
        <h1>Introducing Our Features</h1>
        <hr />
        {/* <p>ihsbvihbrhva</p> */}
      </div>
      <div className="contain">
        <div className="contains">
          <IoPeople className="icons"/>
          <h3>Proffesional Team</h3>
          <p>Crafting dreams into structures, one beam at a time, our professional team builds the foundation of tomorrow.</p>
        </div>
        <div className="contains">
          <BsTelephoneFill  className="icons"/>
          <h3>24/7 Support</h3>
          <p>Our commitment stands tall around the clock, ensuring every construction challenge finds its solution.</p>
        </div>
        <div className="contains">
          <BsFillPiggyBankFill className="icons" />
          <h3>Affordable price</h3>
          <p>Building dreams within reach, our construction site offers affordability without compromising quality</p>
        </div>
        <div className="contains">
          <IoSettings className="icons"/>
          <h3>Construction</h3>
          <p>From blueprint to reality, every brick laid is a testament to our dedication to building the future.</p>
        </div>
        <div className="contains">
           <FaBuilding className="icons"/>
          <h3>Building</h3>
          <p>Transforming visions into solid foundations, one project at a time.</p>
        </div>
        <div className="contains">
          <MdEngineering className="icons"/>
          <h3>Engineering</h3>
          <p>Engineering innovation shapes the landscape of progress, one meticulous detail at a time.</p>
        </div>
      </div>
    </div>
  )
}
export default Popular
