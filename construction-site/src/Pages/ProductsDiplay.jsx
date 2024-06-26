import React, { useContext } from 'react'
import './CSS/ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'
const ProductsDiplay = (props)=> {
  const {all_product}= useContext(ShopContext);
  return (
    <div className=' productdisplay'>
      <img className='productdisplay-banner' src={props.banner} alt="" />
      {/* <div className="productdisplay-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="productdisplay-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div> */}
      <div className="productdisplay-product">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image}/>
          }
          else{
            return null;
          } 
        })}
      </div>
      <div className="loadmore">
        <p> <Link to='/explore' style={{textDecoration: "none", color: "#000" , fontWeight: "700"}} > My Plan </Link></p>
      </div>
    </div>
  )
}

export default ProductsDiplay
