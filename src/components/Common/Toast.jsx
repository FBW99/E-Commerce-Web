import React from 'react';
import { useCart } from '../../context/useCart';
import { FaCheckCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = () => {
  const { toasts, removeToast } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-white font-medium text-sm transition-all transform animate-bounce-short ${
            toast.type === 'info'
              ? 'bg-gray-900/95 dark:bg-gray-800/95 border border-gray-700'
              : 'bg-gradient-to-r from-primary to-secondary'
          }`}
          style={{ minWidth: '260px', maxWidth: '360px' }}
        >
          {toast.type === 'info' ? (
            <FaInfoCircle className="text-lg shrink-0 text-amber-400" />
          ) : (
            <FaCheckCircle className="text-lg shrink-0 text-white" />
          )}
          <span className="flex-1 leading-snug">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer text-white/80 hover:text-white"
            aria-label="Close"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
