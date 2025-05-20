import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PAYMENT_METHODS } from '../../utils/constants';

interface PaymentMethodsProps {
  onSelect: (method: string) => void;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState('cod');

  const handleSelect = (id: string) => {
    setSelectedMethod(id);
    onSelect(id);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Payment Method
      </h2>
      
      <div className="space-y-3">
        {PAYMENT_METHODS.map((method) => {
          const IconComponent = method.id === 'cod' 
            ? (props: any) => <span {...props}>💵</span> 
            : method.id === 'jazzcash' 
              ? (props: any) => <span {...props}>📱</span> 
              : (props: any) => <span {...props}>📱</span>;

          return (
            <div 
              key={method.id}
              className={`relative flex cursor-pointer items-center rounded-lg border p-4 transition-colors ${
                selectedMethod === method.id
                  ? 'border-secondary-500 bg-secondary-50 dark:border-secondary-400 dark:bg-secondary-950/50'
                  : 'border-neutral-200 bg-white hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800'
              }`}
              onClick={() => handleSelect(method.id)}
            >
              <div className="flex w-full items-center">
                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <IconComponent className="text-xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                    {method.name}
                  </h3>
                </div>
                <div className="ml-3 flex h-5 w-5 items-center">
                  {selectedMethod === method.id && (
                    <Check className="h-4 w-4 text-secondary-500 dark:text-secondary-400" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        <p>All transactions are secure and encrypted.</p>
        {selectedMethod === 'jazzcash' && (
          <p className="mt-2">You will be redirected to JazzCash to complete your payment.</p>
        )}
        {selectedMethod === 'easypaisa' && (
          <p className="mt-2">You will be redirected to Easypaisa to complete your payment.</p>
        )}
      </div>
    </div>
  );
};