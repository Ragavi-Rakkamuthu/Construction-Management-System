import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo_big from '../Assets/logo_big.png';
import { Link } from 'react-router-dom';
// import{AiFillAudio} from 'react-icons/ai';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu,setMenu] = useState('shop');
  return (
    <div className='navbar'>
      <div className='nav-left'>
        {/* <img src={logo_big} alt=''/> */}
        {/* <AiFillAudio style={{fontsize:'40px'}}/>  */}
        <p>NK planers & Constructions</p>
      </div>
      <ul>
        <li onClick={()=>{setMenu('home')}} > <Link className='link' style={{textDecoration: 'none' }} to='/'>Home</Link>{menu=== 'home'?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu('project')}}><Link className='link' style={{textDecoration: 'none' }} to='/Residential'>Residential</Link> {menu=== 'project'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('contact')}} > <Link className='link'  style={{textDecoration: 'none' }} to='/Commercial'>Commercial</Link> {menu=== 'contact'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('about')}} > <Link className='link' style={{textDecoration: 'none' }} to='/Interior'>Interior</Link> {menu=== 'about'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('service')}} > <Link className='link' style={{textDecoration: 'none' }} to='/about'>About</Link> {menu=== 'service'?<hr/>:<></>}</li>
      </ul>
       
      <div className='nav-right'>
      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location .replace('/')}}>Logout</button>:<Link style={{textDecoration: 'none' }} to='/login'><button >Login</button></Link>
      }
        {/* <Link style={{textDecoration: 'none' }} to='/login'><button>Login</button></Link> */}
      </div>
    </div>
  )
}

export default Navbar
