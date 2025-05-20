export const CATEGORIES = [
  { id: 'engine', name: 'Engine Parts', icon: 'Engine' },
  { id: 'transmission', name: 'Transmission', icon: 'Cog' },
  { id: 'suspension', name: 'Suspension & Steering', icon: 'SteeringWheel' },
  { id: 'brakes', name: 'Brakes', icon: 'Disc' },
  { id: 'electrical', name: 'Electrical', icon: 'Zap' },
  { id: 'exterior', name: 'Exterior', icon: 'Car' },
  { id: 'interior', name: 'Interior', icon: 'Armchair' },
  { id: 'wheels', name: 'Wheels & Tires', icon: 'CircleDashed' },
  { id: 'accessories', name: 'Accessories', icon: 'Wrench' },
  { id: 'fluids', name: 'Oils & Fluids', icon: 'Droplets' },
];

export const CAR_BRANDS = [
  'Toyota', 'Honda', 'Suzuki', 'Daihatsu', 'Mitsubishi', 
  'Nissan', 'Mazda', 'KIA', 'Hyundai', 'BMW', 'Mercedes-Benz', 
  'Audi', 'Volkswagen', 'Lexus', 'MG', 'Changan', 'Proton'
];

export const PAYMENT_METHODS = [
  { id: 'cod', name: 'Cash on Delivery', icon: 'Banknote' },
  { id: 'jazzcash', name: 'JazzCash', icon: 'Smartphone' },
  { id: 'easypaisa', name: 'Easypaisa', icon: 'Smartphone' },
];

export const CITIES = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
  'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
];

// Placeholder data
export const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Toyota Genuine Oil Filter',
    price: 1200,
    category: 'engine',
    brand: 'Toyota',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/8294604/pexels-photo-8294604.jpeg',
    stock: 25,
  },
  {
    id: '2',
    name: 'Honda Accord Brake Pads Set',
    price: 3500,
    category: 'brakes',
    brand: 'Honda',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/12041281/pexels-photo-12041281.jpeg',
    stock: 12,
  },
  {
    id: '3',
    name: 'Mercedes-Benz Air Filter',
    price: 4500,
    category: 'engine',
    brand: 'Mercedes-Benz',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/8964515/pexels-photo-8964515.jpeg',
    stock: 8,
  },
  {
    id: '4',
    name: 'Audi A4 Headlight Assembly',
    price: 18500,
    category: 'exterior',
    brand: 'Audi',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/3806235/pexels-photo-3806235.jpeg',
    stock: 5,
  },
  {
    id: '5',
    name: 'BMW Transmission Oil',
    price: 4800,
    category: 'fluids',
    brand: 'BMW',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/9628114/pexels-photo-9628114.jpeg',
    stock: 20,
  },
  {
    id: '6',
    name: 'Toyota Corolla Fuel Pump',
    price: 7500,
    category: 'engine',
    brand: 'Toyota',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
    stock: 10,
  }
];

export const MECHANICS = [
  {
    id: '1',
    name: 'Ali Hassan',
    specialization: 'Engine Specialist',
    experience: 10,
    rating: 4.8,
    city: 'Karachi',
    hourlyRate: 1500,
    image: 'https://images.pexels.com/photos/8942941/pexels-photo-8942941.jpeg',
    available: true,
  },
  {
    id: '2',
    name: 'Muhammad Usman',
    specialization: 'Transmission Expert',
    experience: 8,
    rating: 4.7,
    city: 'Lahore',
    hourlyRate: 1400,
    image: 'https://images.pexels.com/photos/8942925/pexels-photo-8942925.jpeg',
    available: true,
  },
  {
    id: '3',
    name: 'Imran Khan',
    specialization: 'Electric & Electronic Systems',
    experience: 12,
    rating: 4.9,
    city: 'Islamabad',
    hourlyRate: 1800,
    image: 'https://images.pexels.com/photos/4489773/pexels-photo-4489773.jpeg',
    available: false,
  },
  {
    id: '4',
    name: 'Asad Ali',
    specialization: 'Suspension & Brakes',
    experience: 7,
    rating: 4.6,
    city: 'Karachi',
    hourlyRate: 1300,
    image: 'https://images.pexels.com/photos/8942919/pexels-photo-8942919.jpeg',
    available: true,
  }
];