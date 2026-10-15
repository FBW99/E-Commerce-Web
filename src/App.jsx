import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Products from './components/Products/products.jsx'
import TopProducts from './components/TopProducts/TopProducts.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './components/Banner/Banner.jsx'
import Subscribe from './components/Subscribe/Subscribe.jsx'
const App = () => {
  React.useEffect(() => {
    AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    once: true,
  }); 
  AOS.refresh();  
  },[]);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />  
      <Subscribe />  
    </div>
  )
}

export default App 