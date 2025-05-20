import React from 'react';
import { Star, MapPin, Clock, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MechanicCardProps {
  mechanic: {
    id: string;
    name: string;
    specialization: string;
    experience: number;
    rating: number;
    city: string;
    hourlyRate: number;
    image: string;
    available: boolean;
  };
}

export const MechanicCard: React.FC<MechanicCardProps> = ({ mechanic }) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-card transition-all hover:shadow-hover dark:border-neutral-800 dark:bg-neutral-900 hover-scale">
      <div className="relative">
        <img 
          src={mechanic.image} 
          alt={mechanic.name} 
          className="h-52 w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white">
            {mechanic.name}
          </h3>
          <p className="text-sm text-white/90">
            {mechanic.specialization}
          </p>
        </div>
        <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium backdrop-blur-sm dark:bg-neutral-800/90">
          <div className="flex items-center">
            <Star className="mr-1 h-3 w-3 fill-warning-500 text-warning-500" />
            <span>{mechanic.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
          <MapPin className="mr-1.5 h-4 w-4" />
          <span>{mechanic.city}</span>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <Clock className="mr-1.5 h-4 w-4" />
            <span>{mechanic.experience} years experience</span>
          </div>
          <span className="font-medium text-secondary-500 dark:text-secondary-400">
            Rs. {mechanic.hourlyRate}/hr
          </span>
        </div>
        
        <div className="mt-4 flex items-center">
          <div className="mr-2 flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium dark:bg-neutral-800">
            <CalendarCheck className="mr-1 h-3 w-3" />
            <span>{mechanic.available ? 'Available' : 'Unavailable'}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <Link 
            to={`/mechanics/${mechanic.id}`}
            className="btn-primary w-full"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};