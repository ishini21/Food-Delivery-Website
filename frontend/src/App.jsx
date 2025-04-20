
import {Routes,Route} from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './componenets/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './componenets/Footer/Footer'
import LoginPopup from './componenets/LoginPopup/LoginPopup'
import Verify from './pages/verify/Verify'
import MyOrders from './componenets/MyOrders/MyOrders'

function App() {
  const [showLogin,setShowLogin] = useState()

  return (
    
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/myorders' element={<MyOrders/>} />

     </Routes>
    </div>
    <Footer/>
    </>
  
  )
}

export default App
