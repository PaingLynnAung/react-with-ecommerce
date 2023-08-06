import { useState,createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavbarSections from './components/navbar/NavbarSections'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Cart from './components/cart/Cart'
import Details from './components/details/Details'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import './App.css'

export const cartsContext = createContext(null)

function App() {
  const [cartsList,setCartsList] = useState([])

  const addCarts = (obj) =>{
    if(localStorage.getItem('cartsList')===null){
      localStorage.setItem('cartsList',JSON.stringify([obj]))
      setCartsList(JSON.parse(localStorage.getItem('cartsList')))
    }else{
      const exitItems = JSON.parse(localStorage.getItem('cartsList')).find(x => x.name === obj.name)
      if(exitItems===undefined){
        localStorage.setItem('cartsList',JSON.stringify([...cartsList,obj]))
        setCartsList(JSON.parse(localStorage.getItem('cartsList')))
        
      }else {
        let dd = JSON.parse(localStorage.getItem('cartsList')).filter(cart => cart.name === obj.name?obj:cart)
        setCartsList(dd)
      }
    }
  }

  const addQty = (updateArr) => {
    setCartsList(updateArr)
  }

  const resetCarts = () => {
    localStorage.removeItem('cartsList')
    setCartsList([])
  } 

  const decrementQty = (updateArr) => {
    setCartsList(updateArr)
  }

  const removeCart = updateArr => {
    setCartsList(updateArr)
  }

  useEffect(()=>{
      setCartsList(JSON.parse(localStorage.getItem('cartsList')))   
  },[])

  return (
    <div className='overflow-x-hidden'>
      <cartsContext.Provider value={[cartsList,addCarts,addQty,resetCarts,decrementQty,removeCart]}>
        <NavbarSections/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop/:category_type' element={<Shop/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='product/:category/:product_name' element={<Details/>} />
          </Routes>
      </cartsContext.Provider>
    </div>
  )
}

export default App
