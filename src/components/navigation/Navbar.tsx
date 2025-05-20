import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'Mechanics', path: '/mechanics' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur transition-colors dark:border-neutral-800 dark:bg-neutral-900/95">
      <div className="container">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-secondary-500 dark:text-secondary-400' 
                    : 'text-neutral-700 hover:text-secondary-500 dark:text-neutral-200 dark:hover:text-secondary-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center ml-4">
            <form onSubmit={handleSearchSubmit} className="relative w-64 mr-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
              <input
                type="search"
                placeholder="Search parts..."
                className="h-9 w-full rounded-md border border-neutral-300 bg-transparent pl-8 pr-4 text-sm focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-neutral-700 dark:focus:border-secondary-400 dark:focus:ring-secondary-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          <div className="flex items-center space-x-3">
            <Link 
              to="/wishlist" 
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800" 
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <Link 
              to="/cart" 
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800" 
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-xs font-medium text-white">
                0
              </span>
            </Link>
            <Link 
              to="/account" 
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800" 
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-50"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <Logo />
            <div className="w-10" />
          </div>
          
          <div className="container py-4">
            <form onSubmit={handleSearchSubmit} className="relative mb-6">
              <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              <input
                type="search"
                placeholder="Search for parts..."
                className="h-11 w-full rounded-md border border-neutral-300 bg-transparent pl-10 pr-4 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-neutral-700 dark:focus:border-secondary-400 dark:focus:ring-secondary-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            
            <div className="space-y-1 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'bg-neutral-100 text-secondary-500 dark:bg-neutral-800 dark:text-secondary-400' 
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-secondary-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-secondary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
              <Link
                to="/account"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-secondary-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-secondary-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
              <Link
                to="/wishlist"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-secondary-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-secondary-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
              <Link
                to="/cart"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-secondary-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-secondary-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};