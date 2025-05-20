import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

interface CheckoutSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  itemCount: number;
  onCheckout: () => void;
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  subtotal,
  shipping,
  tax,
  total,
  itemCount,
  onCheckout,
}) => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Order Summary
      </h2>
      
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-neutral-800">
          <span className="text-neutral-600 dark:text-neutral-400">
            Items ({itemCount})
          </span>
          <span className="font-medium text-neutral-900 dark:text-white">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-neutral-800">
          <span className="text-neutral-600 dark:text-neutral-400">
            Shipping
          </span>
          <span className="font-medium text-neutral-900 dark:text-white">
            Rs. {shipping.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-neutral-800">
          <span className="text-neutral-600 dark:text-neutral-400">
            Tax (GST)
          </span>
          <span className="font-medium text-neutral-900 dark:text-white">
            Rs. {tax.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-medium text-neutral-900 dark:text-white">
            Total
          </span>
          <span className="text-lg font-semibold text-secondary-500 dark:text-secondary-400">
            Rs. {total.toLocaleString()}
          </span>
        </div>
      </div>
      
      <button 
        className="btn-primary mt-6 w-full"
        onClick={onCheckout}
      >
        <ShoppingBag className="mr-2 h-4 w-4" />
        Proceed to Checkout
        <ChevronRight className="ml-2 h-4 w-4" />
      </button>
      
      <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
        By proceeding to checkout, you agree to our{' '}
        <a href="#" className="text-secondary-500 hover:underline dark:text-secondary-400">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-secondary-500 hover:underline dark:text-secondary-400">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};