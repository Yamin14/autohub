import React from 'react';
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'compact';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 text-secondary-500 dark:text-secondary-400"
    >
      <Car className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
      {variant === 'default' && (
        <span className="font-heading text-xl font-bold sm:text-2xl">
          AutoHub<span className="text-accent-500">PK</span>
        </span>
      )}
    </Link>
  );
};