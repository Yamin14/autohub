import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Car, Wrench } from 'lucide-react';
import { CAR_BRANDS, CITIES } from '../../utils/constants';

interface BookingFormProps {
  mechanicId: string;
  mechanicName: string;
  onSubmit: (data: any) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  mechanicId, 
  mechanicName, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    address: '',
    city: '',
    carBrand: '',
    carModel: '',
    carYear: '',
    serviceType: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, mechanicId });
  };

  const serviceTypes = [
    'Regular Maintenance',
    'Engine Repair',
    'Transmission Service',
    'Brake System',
    'Electrical System',
    'Suspension & Steering',
    'Air Conditioning',
    'Diagnostic Check',
    'Other',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800">
        <h3 className="font-medium text-neutral-900 dark:text-white">
          Booking appointment with <span className="font-semibold">{mechanicName}</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="date" className="label">
            <Calendar className="mr-2 inline-block h-4 w-4" />
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            min={new Date().toISOString().split('T')[0]}
            className="input"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="time" className="label">
            <Clock className="mr-2 inline-block h-4 w-4" />
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            className="input"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="city" className="label">
            <MapPin className="mr-2 inline-block h-4 w-4" />
            City
          </label>
          <select
            id="city"
            name="city"
            required
            className="select"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="address" className="label">
            <MapPin className="mr-2 inline-block h-4 w-4" />
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Enter your address"
            className="input"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="carBrand" className="label">
            <Car className="mr-2 inline-block h-4 w-4" />
            Car Brand
          </label>
          <select
            id="carBrand"
            name="carBrand"
            required
            className="select"
            value={formData.carBrand}
            onChange={handleChange}
          >
            <option value="">Select Brand</option>
            {CAR_BRANDS.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="carModel" className="label">
            Car Model
          </label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            required
            placeholder="e.g. Corolla, Civic"
            className="input"
            value={formData.carModel}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="carYear" className="label">
            Year
          </label>
          <input
            type="number"
            id="carYear"
            name="carYear"
            required
            placeholder="e.g. 2019"
            min="1970"
            max={new Date().getFullYear()}
            className="input"
            value={formData.carYear}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="serviceType" className="label">
          <Wrench className="mr-2 inline-block h-4 w-4" />
          Service Type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          className="select"
          value={formData.serviceType}
          onChange={handleChange}
        >
          <option value="">Select Service Type</option>
          {serviceTypes.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="description" className="label">
          Problem Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Describe the issue with your vehicle..."
          className="input"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      
      <div className="pt-4">
        <button type="submit" className="btn-primary w-full">
          Book Appointment
        </button>
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          By booking an appointment, you agree to our terms and cancellation policy.
        </p>
      </div>
    </form>
  );
};