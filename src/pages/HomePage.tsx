import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { BrandsSection } from '../components/home/BrandsSection';
import { CategoryGrid } from '../components/categories/CategoryGrid';
import { ProductGrid } from '../components/products/ProductGrid';
import { Newsletter } from '../components/home/Newsletter';
import { FEATURED_PRODUCTS, MECHANICS } from '../utils/constants';

export const HomePage: React.FC = () => {
  // Only display a subset of mechanics on the homepage
  const featuredMechanics = MECHANICS.slice(0, 2);

  return (
    <div>
      <Hero />
      
      <div className="container py-16">
        <ProductGrid products={FEATURED_PRODUCTS} title="Featured Products" />
        
        <div className="mt-8 flex justify-center">
          <Link 
            to="/shop" 
            className="btn-outline flex items-center"
          >
            View All Products
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="container">
        <CategoryGrid />
      </div>
      
      <Features />
      
      <div className="bg-white py-16 dark:bg-neutral-800">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Expert Mechanics
            </h2>
            <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Get your vehicle serviced by certified automotive experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {featuredMechanics.map((mechanic) => (
              <div 
                key={mechanic.id}
                className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-card transition-all hover:shadow-hover dark:border-neutral-800 dark:bg-neutral-900 hover-scale"
              >
                <div className="grid md:grid-cols-2">
                  <div className="h-full">
                    <img 
                      src={mechanic.image} 
                      alt={mechanic.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {mechanic.name}
                    </h3>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      {mechanic.specialization}
                    </p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="font-medium">Experience:</span>
                        <span className="ml-2">{mechanic.experience} years</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="font-medium">Location:</span>
                        <span className="ml-2">{mechanic.city}</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2">{mechanic.rating}/5</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link 
                        to={`/mechanics/${mechanic.id}`}
                        className="btn-primary w-full"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link 
              to="/mechanics" 
              className="btn-outline flex items-center"
            >
              View All Mechanics
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-neutral-50 py-16 dark:bg-neutral-900">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg dark:bg-neutral-800">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Become a Seller on AutoHub Pakistan
              </h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Sell your auto parts and accessories to thousands of customers across Pakistan. Join our growing marketplace today.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-500 dark:bg-primary-900/30 dark:text-primary-400">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="mt-2 font-semibold">Register</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Create your seller account
                  </p>
                </div>
                
                <div className="rounded-lg p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-500 dark:bg-primary-900/30 dark:text-primary-400">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="mt-2 font-semibold">List Products</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Upload your inventory
                  </p>
                </div>
                
                <div className="rounded-lg p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-500 dark:bg-primary-900/30 dark:text-primary-400">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="mt-2 font-semibold">Start Selling</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Receive orders and earn
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/seller/register" 
                  className="btn-primary"
                >
                  Register as Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BrandsSection />
      <Newsletter />
    </div>
  );
};