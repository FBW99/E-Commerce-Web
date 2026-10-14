import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Products from './components/Products/products.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Products/>
    </div>
  )
}

export default App 