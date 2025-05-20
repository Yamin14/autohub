import React from 'react';
import { CAR_BRANDS } from '../../utils/constants';

export const BrandsSection: React.FC = () => {
  // Only show a subset of brands for the section
  const displayedBrands = CAR_BRANDS.slice(0, 12);

  return (
    <div className="py-16 bg-white dark:bg-neutral-800">
      <div className="container">
        <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-white mb-10">
          Top Brands We Carry
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {displayedBrands.map((brand) => (
            <div 
              key={brand}
              className="flex items-center justify-center h-20 px-4 rounded-lg border border-neutral-200 bg-neutral-50 transition-all hover:border-secondary-200 hover:shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:hover:border-secondary-800"
            >
              <span className="font-heading font-semibold text-neutral-700 dark:text-neutral-300">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};