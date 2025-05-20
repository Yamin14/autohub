import React from 'react';
import { CategoryCard } from './CategoryCard';
import { CATEGORIES } from '../../utils/constants';

export const CategoryGrid: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900 dark:text-white">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};