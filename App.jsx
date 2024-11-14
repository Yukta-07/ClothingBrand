
import './App.css'

import Navigation from './Customer/Components/Navigation/Navigation'
import Products from './Customer/Components/Products/Products'

import Home from './Customer/pages/HomePages/Home'
import {BrowserRouter, Routes , Route} from "react-router-dom"

function App() {
  return (
    
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Products/>}/>
    </Routes>

    </BrowserRouter>

     
    
  )
}
export default App;
