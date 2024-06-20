import React from 'react'
import './NewDishes.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';
import gal1 from '../Assets/gal1.jpeg'
import gal2 from '../Assets/gal2.jpg'
import gal3 from '../Assets/gal3.jpg'
import gal4 from '../Assets/gal4.jpg'
import gal5 from '../Assets/gal5.jpg'
import gal6 from '../Assets/gal6.jpg'
import gal7 from '../Assets/gal7.jpg'
import gal8 from '../Assets/gal8.jpg'
import gal9 from '../Assets/gal9.jpg'

const NewDishes = () => {
  return (
    // <div className='newdishes' >
    //     <h1>new arraives</h1>
    //     <hr />
    //     <div className="arrives">
    //         {new_collections.map((item,i)=>{
    //         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    //     })}
    //     </div>
      
    // </div>
    <div className="work">
      <div className="tops">
        <h1>our creative works</h1>
          <ul>
            <li>Illustration</li>
            <li> Vector Design</li>
            <li>Construction Work</li>
            <li>Web Design</li>
          </ul>
      </div>
      <div className="gall">
        <img src={gal1} alt="" />
        <img src={gal2} alt="" />
        <img src={gal4} alt="" />
        <img src={gal5} alt="" />
        <img src={gal8} alt="" />
        <img src={gal9} alt="" />
        <img src={gal3} alt="" />
        <img src={gal6} alt="" />
        <img src={gal7} alt="" />
      </div>
    </div>
  )
}

export default NewDishes
