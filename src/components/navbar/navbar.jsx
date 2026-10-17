import React, { useState } from 'react';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
import { FaCaretDown, FaCartShopping, FaBars, FaXmark } from 'react-icons/fa6';
import image from '../../assets/website/image.png';
import DarkMode from './DarkMode';
import { useCart } from '../../context/useCart';

const Menu = [
  { id: 1, name: 'Home', link: '#hero' },
  { id: 2, name: 'Top Rated', link: '#top-rated' },
  { id: 3, name: 'Kids Wear', link: '#products', category: "Kids Wear" },
  { id: 4, name: 'Mens Wear', link: '#products', category: "Mens Wear" },
  { id: 5, name: 'Special Offers', link: '#banner' },
];

const DropdownLinks = [
  { id: 1, name: 'Trending Products', link: '#products', category: 'Trending' },
  { id: 2, name: 'Best Selling', link: '#top-rated' },
  { id: 3, name: 'Customer Reviews', link: '#testimonials' },
];

const Navbar = () => {
  const {
    cartTotalCount,
    setIsCartOpen,
    searchTerm,
    setSearchTerm,
    setSelectedCategory,
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (link, category = null) => {
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);

    if (link && link.startsWith('#')) {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (val.trim()) {
      const prodSection = document.querySelector('#products');
      if (prodSection) {
        prodSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm duration-200 dark:bg-gray-900/95 dark:text-white border-b border-gray-100 dark:border-gray-800">

      <div className="bg-primary/30 py-2.5 transition-colors">
        <div className="container flex items-center justify-between">
          
   
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl tracking-tight text-gray-900 dark:text-white group"
            >
              <img
                src={image}
                alt="MyShops Logo"
                className="w-9 h-9 object-contain group-hover:rotate-12 transition-transform duration-300 drop-shadow-xs"
              />
              <span>
                My<span className="text-secondary font-black">Shops</span>
              </span>
            </a>
          </div>


          <div className="flex items-center gap-3 sm:gap-5">
   
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-[180px] rounded-full border border-gray-300 px-3.5 py-1.5 text-sm transition-all duration-300 focus:w-[280px] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer"
                  title="Clear search"
                >
                  <IoMdClose className="text-base" />
                </button>
              ) : (
                <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-hover:text-primary transition-colors pointer-events-none" />
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-secondary px-3.5 sm:px-4 py-1.5 text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-primary/25 cursor-pointer"
              title="View shopping bag"
            >
              <FaCartShopping className="text-lg text-white drop-shadow-sm" />
              <span className="hidden sm:inline font-semibold text-xs tracking-wide">Bag</span>
              {cartTotalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white shadow-md animate-pulse">
                  {cartTotalCount}
                </span>
              )}
            </button>

            <DarkMode />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:hidden rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block border-t border-gray-100/60 dark:border-gray-800/60 py-2">
        <ul className="container flex items-center justify-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(data.link, data.category);
                }}
                className="inline-block px-3 py-1 rounded-lg transition-colors hover:text-primary hover:bg-primary/10"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors group-hover:text-primary group-hover:bg-primary/10">
              <span>Trending</span>
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180 text-xs" />
            </div>

            <ul className="absolute left-0 mt-1 hidden w-[180px] rounded-xl bg-white dark:bg-gray-800 p-2 text-gray-700 dark:text-gray-200 shadow-xl border border-gray-100 dark:border-gray-700 group-hover:block transition-all">
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(data.link, data.category);
                    }}
                    className="inline-block w-full rounded-lg px-3 py-2 text-xs font-medium duration-150 hover:bg-primary/20 hover:text-primary"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pt-3 pb-6 space-y-4 shadow-xl">

          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 dark:text-white focus:border-primary focus:outline-none"
            />
            <IoMdSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>

          <ul className="space-y-1 text-sm font-medium text-gray-800 dark:text-gray-200">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(data.link, data.category);
                  }}
                  className="block px-3 py-2 rounded-lg hover:bg-primary/15 hover:text-primary transition-colors"
                >
                  {data.name}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100 dark:border-gray-800">
              <span className="block px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                Trending Categories
              </span>
              {DropdownLinks.map((data) => (
                <a
                  key={data.id}
                  href={data.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(data.link, data.category);
                  }}
                  className="block px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  • {data.name}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;