import React from 'react'
import Navigation from '../Customer/Components/Navigation/Navigation'
import Footer from '../Customer/Components/Footer/Footer'

const CustomerRoutes = () => {
  return (
    <>
    <div>
        <div>
<Navigation/>
        </div>
        <Routes>
        <Route path="/" element={<Home/>}/>
    <Route path="/product/:productId" element={<Products/>}/>
    <Route path="/productdetails" element={<ProductDetails/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/:levelOne/:levelTwo/:levelThree" element={<Products/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/account/orders" element={<Orders/>}/>
    <Route path="/account/orders/:orderId" element={<OrderDetails/>}/>
        </Routes>
    </div>
      <Footer/>
      </>
  )
}

export default CustomerRoutes