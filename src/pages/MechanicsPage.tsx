import React, { useState } from 'react';
import { Filter, Search, MapPin } from 'lucide-react';
import { MechanicCard } from '../components/mechanics/MechanicCard';
import { MECHANICS, CITIES } from '../utils/constants';

export const MechanicsPage: React.FC = () => {
  const [filters, setFilters] = useState({
    city: '',
    specialization: '',
    searchQuery: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  
  const specializationOptions = [
    'Engine Specialist',
    'Transmission Expert',
    'Electric & Electronic Systems',
    'Suspension & Brakes',
    'Body Work Specialist',
  ];

  const filteredMechanics = MECHANICS.filter((mechanic) => {
    // Filter by city
    if (filters.city && mechanic.city !== filters.city) {
      return false;
    }
    
    // Filter by specialization
    if (filters.specialization && mechanic.specialization !== filters.specialization) {
      return false;
    }
    
    // Filter by search query
    if (
      filters.searchQuery &&
      !mechanic.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Book a Professional Mechanic
        </h1>
        <p className="mt-2 mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
          Find experienced mechanics for your vehicle repair and maintenance needs. All our mechanics are certified and background-checked.
        </p>
      </div>
      
      <div className="mx-auto mb-12 max-w-3xl rounded-lg bg-white p-6 shadow-sm dark:bg-neutral-800">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="city" className="label flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              City
            </label>
            <select
              id="city"
              name="city"
              className="select"
              value={filters.city}
              onChange={handleFilterChange}
            >
              <option value="">All Cities</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="specialization" className="label flex items-center">
              <Filter className="mr-1 h-4 w-4" />
              Specialization
            </label>
            <select
              id="specialization"
              name="specialization"
              className="select"
              value={filters.specialization}
              onChange={handleFilterChange}
            >
              <option value="">All Specializations</option>
              {specializationOptions.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="searchQuery" className="label flex items-center">
              <Search className="mr-1 h-4 w-4" />
              Search
            </label>
            <input
              type="search"
              id="searchQuery"
              name="searchQuery"
              placeholder="Search by name..."
              className="input"
              value={filters.searchQuery}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMechanics.map((mechanic) => (
          <MechanicCard key={mechanic.id} mechanic={mechanic} />
        ))}
      </div>
      
      {filteredMechanics.length === 0 && (
        <div className="py-12 text-center">
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            No mechanics found
          </h3>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};