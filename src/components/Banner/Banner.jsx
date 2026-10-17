import React from 'react';
import Banners from '../../assets/Banner/Banner.png';
import { GrSecure } from 'react-icons/gr';
import { FaTruckFast, FaCreditCard } from 'react-icons/fa6';
import { MdSupportAgent } from 'react-icons/md';

const Banner = () => {
  const handleScrollToShop = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="banner" className="min-h-[550px] flex justify-center items-center py-16 sm:py-20 transition-colors">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative bg-gradient-to-tr from-primary via-primary/80 to-secondary p-6 sm:p-10 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-xl pointer-events-none" />
            <img
              src={Banners}
              alt="Winter Sale Showcase"
              className="w-full max-w-[380px] h-[340px] sm:h-[380px] mx-auto drop-shadow-[-12px_16px_20px_rgba(0,0,0,0.35)] object-contain hover:scale-105 duration-300 transition-transform"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span
              data-aos="fade-up"
              className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-primary mb-1"
            >
              Limited Time Season Special
            </span>

            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
            >
              Winter Sale <span className="text-primary">Up to 50% Off</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-3 mb-5 leading-relaxed"
            >
              Discover cozy premium knitwear, insulated jackets, and head-turning streetwear essentials crafted to keep you warm and effortlessly stylish throughout the colder season.
            </p>

            <div data-aos="fade-up" data-aos-delay="150" className="flex gap-4 mb-6">
              <button
                onClick={handleScrollToShop}
                className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-primary/25 cursor-pointer hover:scale-105 active:scale-95 duration-200"
              >
                Shop Collection Now
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-3.5">
                <div className="p-3 rounded-full bg-primary/15 text-primary text-xl flex items-center justify-center shrink-0">
                  <GrSecure />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Quality Guarantee</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">100% Verified Fabrics</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="250" className="flex items-center gap-3.5">
                <div className="p-3 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xl flex items-center justify-center shrink-0">
                  <FaTruckFast />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Fast & Free Shipping</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Orders over $75</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3.5">
                <div className="p-3 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xl flex items-center justify-center shrink-0">
                  <FaCreditCard />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Secure Payments</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Encrypted Transactions</p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="350" className="flex items-center gap-3.5">
                <div className="p-3 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 text-xl flex items-center justify-center shrink-0">
                  <MdSupportAgent />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">24/7 Dedicated Care</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Real Human Support</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;