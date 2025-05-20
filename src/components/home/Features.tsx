import React from 'react';
import { TruckIcon, ThumbsUp, ShieldCheck, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <TruckIcon className="h-10 w-10" />,
      title: 'Fast Nationwide Delivery',
      description: 'Delivery to all major cities within 2-3 business days',
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: 'Genuine Products',
      description: '100% authentic parts imported from trusted suppliers',
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: 'Warranty & Support',
      description: 'All products backed by manufacturer warranty',
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: 'Expert Advice',
      description: '24/7 technical support from automotive experts',
    },
  ];

  return (
    <div className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Why Choose AutoHub Pakistan
          </h2>
          <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We're committed to providing quality parts and exceptional service to our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-neutral-200 shadow-sm transition-all hover:shadow-md dark:bg-neutral-800 dark:border-neutral-700"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-50 text-secondary-500 mb-4 dark:bg-secondary-900/30 dark:text-secondary-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};