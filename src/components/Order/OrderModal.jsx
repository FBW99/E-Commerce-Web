import React, { useState } from 'react';
import { useCart } from '../../context/useCart';
import { FaTimes, FaCheckCircle, FaLock, FaCreditCard, FaPaypal, FaMoneyBillWave, FaTruck } from 'react-icons/fa';

const OrderModal = () => {
  const {
    isOrderModalOpen,
    setIsOrderModalOpen,
    selectedProductForOrder,
    cart,
    clearCart,
    showToast,
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  if (!isOrderModalOpen) return null;
  const itemsToOrder = selectedProductForOrder
    ? [
        {
          id: selectedProductForOrder.id,
          title: selectedProductForOrder.title,
          image: selectedProductForOrder.image || selectedProductForOrder.img,
          price: selectedProductForOrder.price || 49.99,
          quantity: 1,
          selectedSize: 'M',
        },
      ]
    : cart.length > 0
    ? cart
    : [
        {
          id: 99,
          title: 'Special Promo Fashion Pack',
          image: '',
          price: 49.99,
          quantity: 1,
          selectedSize: 'M',
        },
      ];

  const subtotal = itemsToOrder.reduce(
    (sum, item) => sum + (item.price || 49.99) * item.quantity,
    0
  );
  const shippingFee = subtotal >= 75 ? 0 : 4.99;
  const total = subtotal + shippingFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address) {
      showToast('Please fill in all required shipping fields', 'info');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderCompleted(true);
      const generatedOrder = {
        orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        customer: formData,
        items: itemsToOrder,
        total: total.toFixed(2),
      };
      setOrderDetails(generatedOrder);
      if (!selectedProductForOrder) {
        clearCart();
      }
      showToast('Order placed successfully! Tracking link sent to your email.');
    }, 1000);
  };

  const handleClose = () => {
    setIsOrderModalOpen(false);
    setOrderCompleted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'card',
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-10 my-8">
        <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary" />

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-primary">
                Express Checkout
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {orderCompleted ? 'Order Confirmed!' : 'Complete Your Order'}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {orderCompleted && orderDetails ? (

            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500 flex items-center justify-center text-4xl animate-bounce-short">
                <FaCheckCircle />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Thank You for Your Order!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  We&apos;ve received your order and are getting it ready for shipment.
                </p>
                <div className="inline-block mt-3 px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full font-mono text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Order ID: <span className="text-primary font-bold">{orderDetails.orderId}</span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-5 text-left space-y-4 border border-gray-100 dark:border-gray-700/50">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Order Summary
                </h4>
                <div className="space-y-2 text-sm max-h-40 overflow-y-auto">
                  {orderDetails.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                      <span>
                        {item.title} <span className="text-xs text-gray-400">(x{item.quantity})</span>
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        ${((item.price || 49.99) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-bold text-base text-gray-900 dark:text-white">
                  <span>Total Paid</span>
                  <span className="text-primary">${orderDetails.total}</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2 pt-1">
                  <FaTruck className="text-primary text-sm shrink-0" />
                  <span>Estimated Delivery: 2-4 Business Days with Standard Tracked Shipping</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-95 hover:scale-[1.01] transition-all cursor-pointer shadow-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-4 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Items to Order ({itemsToOrder.length})
                </h3>
                <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                  {itemsToOrder.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt=""
                            className="w-10 h-10 object-cover rounded-lg bg-gray-200 dark:bg-gray-700 shrink-0"
                          />
                        )}
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            Size: {item.selectedSize || 'M'} • Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white">
                        ${((item.price || 49.99) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700/60 mt-3 pt-3 flex justify-between items-center text-sm">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Total with Delivery:</span>
                  <span className="text-xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span>Shipping Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. 742 Evergreen Terrace"
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. New York"
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  Payment Method
                </h3>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'card' }))}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-medium transition-all cursor-pointer ${
                      formData.paymentMethod === 'card'
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <FaCreditCard className="text-lg" />
                    <span>Credit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'paypal' }))}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-medium transition-all cursor-pointer ${
                      formData.paymentMethod === 'paypal'
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <FaPaypal className="text-lg text-blue-500" />
                    <span>PayPal</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'cod' }))}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-medium transition-all cursor-pointer ${
                      formData.paymentMethod === 'cod'
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <FaMoneyBillWave className="text-lg text-emerald-500" />
                    <span>Cash / COD</span>
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
              >
                <FaLock className="text-xs" />
                <span>
                  {isSubmitting ? 'Securing Your Order...' : `Place Order • $${total.toFixed(2)}`}
                </span>
              </button>

              <p className="text-center text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
                <FaLock className="text-primary text-[10px]" />
                <span>256-bit SSL encrypted • 100% Satisfaction Guarantee</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
