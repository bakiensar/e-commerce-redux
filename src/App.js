import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Products from './components/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
