import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAR_BRANDS } from '../../utils/constants';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [carBrand, setCarBrand] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search here
    console.log('Searching for:', searchQuery, 'Brand:', carBrand);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-secondary-600 to-secondary-900 py-20 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Premium <span className="text-accent-400">Car Parts</span> for Every Vehicle
            </h1>
            <p className="mt-4 text-lg text-white/90 md:text-xl">
              Find the perfect parts for your vehicle from Pakistan's largest collection of imported and genuine auto parts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link to="/shop" className="btn-accent">
                Shop Now <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/seller" className="btn-outline border-white/30 text-white hover:bg-white/10">
                Become a Seller
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">Find Your Parts</h2>
            <p className="mt-2 text-white/80">
              Search by brand, model, or part name
            </p>
            <form onSubmit={handleSearch} className="mt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="car-brand" className="block text-sm font-medium text-white/90">
                    Car Brand
                  </label>
                  <select
                    id="car-brand"
                    className="mt-1 block w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                    value={carBrand}
                    onChange={(e) => setCarBrand(e.target.value)}
                  >
                    <option value="" className="bg-neutral-800 text-white">Select Car Brand</option>
                    {CAR_BRANDS.map((brand) => (
                      <option key={brand} value={brand} className="bg-neutral-800 text-white">
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="search-query" className="block text-sm font-medium text-white/90">
                    Part Name / Number
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-5 w-5 text-white/60" />
                    </div>
                    <input
                      type="text"
                      id="search-query"
                      className="block w-full rounded-md border border-white/20 bg-white/10 pl-10 pr-4 py-2 text-white placeholder-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="e.g. brake pads, oil filter..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent-500 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                >
                  Search Parts
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};