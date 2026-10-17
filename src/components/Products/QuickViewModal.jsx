import React, { useState } from 'react';
import { useCart } from '../../context/useCart';
import { FaStar, FaTimes, FaShoppingBag, FaBolt, FaCheck, FaShieldAlt } from 'react-icons/fa';

const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, openOrderModal } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const sizes = ['S', 'M', 'L', 'XL'];
  const price = quickViewProduct.price || 49.99;
  const originalPrice = (price * 1.35).toFixed(2);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedSize);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    setQuickViewProduct(null);
    openOrderModal({
      ...quickViewProduct,
      quantity,
      selectedSize,
    });
  };

  return (
    <div className="fixed inset-0 z-[9995] overflow-y-auto flex items-center justify-center p-4">

      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />
      <div className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-10">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-md transition-all cursor-pointer"
        >
          <FaTimes className="text-base" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center relative">
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              Save 35%
            </span>
            <img
              src={quickViewProduct.image || quickViewProduct.img}
              alt={quickViewProduct.title}
              className="max-h-[340px] max-w-full object-contain rounded-2xl drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-bold text-primary tracking-wider">
                  {quickViewProduct.category || 'Fashion Collection'}
                </span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <div className="flex items-center gap-1 text-xs text-yellow-500 font-semibold">
                  <FaStar />
                  <span>{quickViewProduct.rating || 4.8}</span>
                  <span className="text-gray-400 font-normal">(128 reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {quickViewProduct.title}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-extrabold text-primary">
                  ${price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${originalPrice}
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  In Stock
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {quickViewProduct.description ||
                  'Crafted from premium ultra-soft breathable fabrics designed for all-day comfort, modern elegance, and long-lasting durability.'}
              </p>
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                    Select Size
                  </span>
                  <span className="text-xs text-primary underline cursor-pointer">
                    Size Guide
                  </span>
                </div>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 rounded-xl font-semibold text-xs transition-all cursor-pointer flex items-center justify-center ${
                        selectedSize === size
                          ? 'bg-primary text-white shadow-md shadow-primary/30'
                          : 'border border-gray-200 dark:border-gray-700 hover:border-primary text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                  Quantity
                </span>
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="py-3 px-4 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaShoppingBag />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition-transform"
                >
                  <FaBolt />
                  <span>Buy Now</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 pt-1">
                <span className="flex items-center gap-1">
                  <FaCheck className="text-emerald-500" />
                  Free 30-Day Returns
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FaShieldAlt className="text-primary" />
                  Authenticity Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
