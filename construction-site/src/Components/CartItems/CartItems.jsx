import React, {useContext} from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import {ShopContext} from '../../Context/ShopContext';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    // console.log(all_product)
  return (
    <div className='cartitems'>
        <div className="cartitems-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
     {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return (
                            <div className="cartitems-format   cartitems-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>₹{e.new_price} </p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p> ₹{e.new_price * cartItems[e.id]} </p>
                            <img style={{width: '30px', height: '30px'}} className='remove' src={remove_icon}  onClick={()=>{removeFromCart(e.id)}} alt="" />
                            <hr />
                </div>)
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                <h1>cart totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>subtotal</p>
                        <p> ₹{getTotalCartAmount()}</p>
                        {/* <p> {total} </p> */}
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>shipping fee</p>
                        <p>free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>total</h3>
                        <h3> ₹{getTotalCartAmount()} </h3>
                    </div>
                </div>
                <button>proceed to checkout</button>
            </div>
            </div>
        </div> 
  )
}

export default CartItems;
