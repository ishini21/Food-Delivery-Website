import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {

  const [menu,SetMenu]= useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} className='logo'></img></Link>
     <ul className='navbar-menu'>
     <Link to='/' onClick={()=>SetMenu("Home")} className={menu === "Home" ? "active":""} >Home</Link>
     <a href='#explore-menu' onClick={()=>SetMenu("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
     <a href='#app-download' onClick={()=>SetMenu("Mobile-app")} className={menu === "Mobile-app"?"active":""}>Mobile-app</a>
     <a href='#footer' onClick={()=>SetMenu("Contact us")} className={menu === "Contact us"?"active":""}>Contact us</a>
     </ul>
     <div className='navbar-right'>
      <img src={assets.search_icon} alt=""/>
      <div className='navbar-search-icon'>
      <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
      <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
