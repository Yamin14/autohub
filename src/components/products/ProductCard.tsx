import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    image: string;
    stock: number;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative card overflow-hidden hover-scale">
      <div className="absolute right-2 top-2 z-10 flex flex-col gap-2">
        <button 
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm hover:bg-white hover:text-accent-500 backdrop-blur-sm dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:text-accent-400"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>
        <button 
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm hover:bg-white hover:text-secondary-500 backdrop-blur-sm dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:text-secondary-400"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
      
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.stock <= 5 && (
            <div className="absolute left-2 top-2 rounded bg-accent-500 px-2 py-1 text-xs font-medium text-white">
              Low Stock
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-medium uppercase text-neutral-500 dark:text-neutral-400">
              {product.brand}
            </span>
            <div className="flex items-center text-xs">
              <Star className="mr-1 h-3 w-3 fill-warning-500 text-warning-500" />
              <span className="font-medium">{product.rating}</span>
            </div>
          </div>
          
          <h3 className="line-clamp-2 text-sm font-medium leading-tight text-neutral-900 dark:text-white">
            {product.name}
          </h3>
          
          <div className="mt-2 flex items-center justify-between">
            <p className="font-heading text-base font-semibold text-secondary-500 dark:text-secondary-400">
              Rs. {product.price.toLocaleString()}
            </p>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {product.stock} in stock
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};