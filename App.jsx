
import { CardTravel } from '@mui/icons-material'
import './App.css'

import Navigation from './Customer/Components/Navigation/Navigation'
import ProductDetails from './Customer/Components/Products/ProductDetails/ProductDetails'
import Products from './Customer/Components/Products/Products'

import Home from './Customer/pages/HomePages/Home'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Cart from './Customer/Components/Cart/Cart'
import Checkout from './Customer/Components/Checkout/Checkout'
import Orders from './Customer/Components/Orders/Orders'
import OrderDetails from './Customer/Components/Orders/OrderDetails'
import Footer from './Customer/Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes className="max-w-7xl">
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/productdetails" element={<ProductDetails/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/orderDetails" element={<OrderDetails/>}/>
    </Routes>
<Footer/>
    </BrowserRouter>

     
    
  )
}
export default App;
