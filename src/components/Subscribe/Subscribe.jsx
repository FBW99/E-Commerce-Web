import React, { useState } from 'react';
import { useCart } from '../../context/useCart';
import { FaPaperPlane, FaBell, FaCheckCircle } from 'react-icons/fa';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'info');
      return;
    }

    setSubscribed(true);
    showToast('Subscribed! Check your inbox for your 15% discount code.');
    setEmail('');
  };

  return (
    <section id="subscribe" className="py-14 sm:py-16 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden my-12 shadow-lg">
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-black/10 rounded-full blur-xl pointer-events-none" />

      <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs mb-3">
          <FaBell className="text-amber-200" />
          <span>Exclusive VIP Club</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get 15% Off Your Next Order
        </h3>

        <p className="mt-2 text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
          Be the first to hear about secret seasonal drops, member-only discounts, and trend forecasts delivered directly to your inbox.
        </p>

        {subscribed ? (
          <div className="mt-6 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-xs rounded-full py-3 px-6 max-w-md mx-auto text-white font-semibold text-sm">
            <FaCheckCircle className="text-emerald-300 text-lg" />
            <span>You&apos;re in! Check your inbox for your promo code.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full sm:flex-1 rounded-full border-2 border-transparent bg-white px-5 py-3 text-gray-800 placeholder-gray-400 focus:border-white focus:outline-none text-sm shadow-md"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-gray-900 text-white font-bold text-sm hover:bg-black hover:scale-105 active:scale-95 duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Subscribe</span>
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
        )}

        <p className="mt-3 text-[11px] text-white/70">
          No spam, unsubscribe anytime. Read our Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;