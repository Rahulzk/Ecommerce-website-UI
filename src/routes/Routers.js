import { Routes, Route,Navigate } from 'react-router-dom'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="home" />}></Route>
      <Route path='home' element={<Home />}></Route>
      <Route path='shop' element={<Shop />}></Route>
      <Route path='shop/:id' element={<ProductDetails />}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='checkout' element={<Checkout />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
    </Routes>
  )
}

export default Routers