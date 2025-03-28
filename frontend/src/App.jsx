
import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Navbar from './componenets/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {
  return (
    <div className='app'>
      <Navbar/>
     <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/oder' element={<PlaceOrder/>} />

     </Routes>
    </div>
  )
}

export default App
