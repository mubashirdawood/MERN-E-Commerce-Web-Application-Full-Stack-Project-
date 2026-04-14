import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Order from './pages/Order'
import About from './pages/About'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SeachBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vv]'>
      <Navbar></Navbar>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='collections' element={<Collection/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='order' element={<Order/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='product/:productid' element={<Product/>}></Route>
        <Route path='placeorder' element={<PlaceOrder/>}></Route>

        
      </Routes>
      <Footer></Footer>
      
    </div>
  )
}

export default App
 