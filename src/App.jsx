import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Products from './components/Products/products.jsx';
import TopProducts from './components/TopProducts/TopProducts.jsx';
import Banner from './components/Banner/Banner.jsx';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx';
import CartDrawer from './components/Cart/CartDrawer.jsx';
import OrderModal from './components/Order/OrderModal.jsx';
import QuickViewModal from './components/Products/QuickViewModal.jsx';
import Toast from './components/Common/Toast.jsx';
import { CartProvider } from './context/CartContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppContent = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 duration-200 transition-colors flex flex-col justify-between selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <TopProducts />
        <Banner />
        <Subscribe />
        <Testimonials />
      </main>
      <Footer />
      <CartDrawer />
      <OrderModal />
      <QuickViewModal />
      <Toast />
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;