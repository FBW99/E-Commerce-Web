import React from 'react';
import { useCart } from '../../context/useCart';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaShoppingBag, FaArrowRight } from 'react-icons/fa';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartSubtotal,
    cartTotalCount,
    openOrderModal,
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 75;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const diffToFreeShipping = (freeShippingThreshold - cartSubtotal).toFixed(2);

  return (
    <div className="fixed inset-0 z-[9990] overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-2xl flex flex-col z-10 transition-transform duration-300 transform ease-in-out">

          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaShoppingBag className="text-primary text-xl" />
              <h2 className="text-xl font-bold">Shopping Bag</h2>
              <span className="text-xs bg-primary/20 text-primary font-bold px-2 py-0.5 rounded-full">
                {cartTotalCount} {cartTotalCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <div className="px-6 py-3 bg-primary/10 dark:bg-primary/5 border-b border-primary/20">
            <div className="text-xs font-medium text-gray-700 dark:text-gray-300 flex justify-between mb-1.5">
              {cartSubtotal >= freeShippingThreshold ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  🎉 You unlocked FREE Express Shipping!
                </span>
              ) : (
                <span>
                  Add <span className="font-bold text-primary">${diffToFreeShipping}</span> more for FREE Shipping!
                </span>
              )}
              <span className="font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl">
                  <FaShoppingBag />
                </div>
                <h3 className="text-lg font-bold">Your bag is empty</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                  Looks like you haven&apos;t added any items yet. Explore our featured collections to find what you love!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:scale-105 duration-200 shadow-md cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="flex gap-4 p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-800 transition-all hover:shadow-sm"
                >
                  <img
                    src={item.image || item.img}
                    alt={item.title}
                    className="w-20 h-24 object-cover rounded-lg bg-gray-100 dark:bg-gray-700 shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-sm line-clamp-1">{item.title}</h4>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-1 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <FaTrash className="text-xs" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                          Size: {item.selectedSize}
                        </span>
                        {item.color && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            • {item.color}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          className="px-2 py-1 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        >
                          <FaMinus />
                        </button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          className="px-2 py-1 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <span className="font-bold text-primary">
                        ${((item.price || 49.99) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {cartSubtotal >= freeShippingThreshold ? 'FREE' : '$4.99'}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-2 flex justify-between font-bold text-base text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-primary">
                    ${(cartSubtotal + (cartSubtotal >= freeShippingThreshold ? 0 : 4.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => openOrderModal()}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg cursor-pointer"
              >
                <span>Checkout Now</span>
                <FaArrowRight className="text-sm" />
              </button>

              <div className="flex justify-between items-center text-xs text-gray-500 pt-1">
                <span>Free returns within 30 days</span>
                <button
                  onClick={clearCart}
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer underline"
                >
                  Clear Bag
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
