import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 pt-12 pb-8 dark:bg-neutral-900">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Your trusted source for premium imported car parts in Pakistan. Quality products at competitive prices.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/mechanics" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Book Mechanic
                </Link>
              </li>
              <li>
                <Link to="/seller" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Become a Seller
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Customer Service</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Contact Info</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-secondary-500 dark:text-secondary-400" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  123 Auto Plaza, Main Boulevard, Lahore, Pakistan
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-secondary-500 dark:text-secondary-400" />
                <a 
                  href="tel:+92300-1234567" 
                  className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400"
                >
                  +92 300 1234567
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-secondary-500 dark:text-secondary-400" />
                <a
                  href="mailto:info@autohubpk.com"
                  className="text-sm text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400"
                >
                  info@autohubpk.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} AutoHub Pakistan. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link to="/terms" className="text-xs text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-xs text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                Privacy Policy
              </Link>
              <Link to="/cookie" className="text-xs text-neutral-600 hover:text-secondary-500 dark:text-neutral-400 dark:hover:text-secondary-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};