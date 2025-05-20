import React, { useState } from 'react';
import { Filter, X, Search, ArrowUpDown } from 'lucide-react';
import { ProductGrid } from '../components/products/ProductGrid';
import { FEATURED_PRODUCTS, CAR_BRANDS, CATEGORIES } from '../utils/constants';

export const ShopPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    priceRange: '',
    searchQuery: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      brand: '',
      priceRange: '',
      searchQuery: '',
    });
  };

  // Apply filters to products
  const filteredProducts = FEATURED_PRODUCTS.filter((product) => {
    // Filter by category
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    // Filter by brand
    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }
    
    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (product.price < min || (max && product.price > max)) {
        return false;
      }
    }
    
    // Filter by search query
    if (
      filters.searchQuery &&
      !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  });

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Shop Auto Parts
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Browse our extensive collection of high-quality auto parts
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Mobile Filter Toggle */}
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </button>
          
          <div className="relative flex w-full max-w-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            </div>
            <input
              type="search"
              name="searchQuery"
              placeholder="Search products..."
              className="w-full rounded-md border border-neutral-300 bg-white py-2 pl-10 pr-4 text-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
              value={filters.searchQuery}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        
        {/* Desktop Sidebar / Mobile Filter Panel */}
        <div 
          className={`lg:w-64 ${
            isFilterOpen 
              ? 'fixed inset-0 z-40 overflow-auto bg-white p-4 dark:bg-neutral-900 lg:static lg:block lg:p-0' 
              : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-6 lg:mt-0 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                Categories
              </h3>
              <div className="mt-2">
                <select
                  name="category"
                  className="select"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                Brands
              </h3>
              <div className="mt-2">
                <select
                  name="brand"
                  className="select"
                  value={filters.brand}
                  onChange={handleFilterChange}
                >
                  <option value="">All Brands</option>
                  {CAR_BRANDS.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                Price Range
              </h3>
              <div className="mt-2">
                <select
                  name="priceRange"
                  className="select"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                >
                  <option value="">Any Price</option>
                  <option value="0-1000">Under Rs. 1,000</option>
                  <option value="1000-5000">Rs. 1,000 - Rs. 5,000</option>
                  <option value="5000-10000">Rs. 5,000 - Rs. 10,000</option>
                  <option value="10000-20000">Rs. 10,000 - Rs. 20,000</option>
                  <option value="20000-">Over Rs. 20,000</option>
                </select>
              </div>
            </div>

            <div className="hidden lg:block">
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                Search
              </h3>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
                </div>
                <input
                  type="search"
                  name="searchQuery"
                  placeholder="Search products..."
                  className="input pl-10"
                  value={filters.searchQuery}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            
            <div className="pt-4">
              <button
                onClick={clearFilters}
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Showing <span className="font-medium">{filteredProducts.length}</span> results
            </p>
            
            <div className="flex items-center">
              <span className="mr-2 text-sm text-neutral-600 dark:text-neutral-400">
                Sort by:
              </span>
              <div className="relative">
                <select
                  className="h-9 rounded-md border border-neutral-300 bg-white pl-3 pr-8 text-sm focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-secondary-400 dark:focus:ring-secondary-400"
                  defaultValue="featured"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ArrowUpDown className="absolute right-2.5 top-2.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              </div>
            </div>
          </div>
          
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};