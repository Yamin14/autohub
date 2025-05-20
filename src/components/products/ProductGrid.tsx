import React from 'react';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    image: string;
    stock: number;
  }>;
  title?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  if (!products || products.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
          No products found
        </h3>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="py-6">
      {title && (
        <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};