import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CheckoutSummary } from '../components/checkout/CheckoutSummary';
import { PaymentMethods } from '../components/checkout/PaymentMethods';
import { CITIES } from '../utils/constants';

// Mocked cart data for the demo
const cartItems = [
  {
    id: '1',
    name: 'Toyota Genuine Oil Filter',
    price: 1200,
    quantity: 1,
    image: 'https://images.pexels.com/photos/8294604/pexels-photo-8294604.jpeg',
  },
  {
    id: '2',
    name: 'Honda Accord Brake Pads Set',
    price: 3500,
    quantity: 2,
    image: 'https://images.pexels.com/photos/12041281/pexels-photo-12041281.jpeg',
  }
];

export const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handlePlaceOrder = () => {
    // In a real app, this would submit the order to the backend
    setOrderPlaced(true);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 300;
  const tax = Math.round(subtotal * 0.17); // 17% GST
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Checkout
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Complete your purchase by providing shipping and payment details
        </p>
      </div>
      
      {/* Checkout steps */}
      <div className="mb-8">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
              currentStep >= 1 
                ? 'border-secondary-500 bg-secondary-50 text-secondary-500 dark:bg-secondary-900/30 dark:text-secondary-400' 
                : 'border-neutral-300 bg-white text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500'
            }`}>
              {currentStep > 1 ? <Check className="h-5 w-5" /> : 1}
            </div>
            <span className="mt-2 text-sm font-medium">Shipping</span>
          </div>
          
          <div className="flex-1 flex items-center px-4">
            <div className={`h-1 w-full rounded ${
              currentStep > 1 
                ? 'bg-secondary-500 dark:bg-secondary-600' 
                : 'bg-neutral-200 dark:bg-neutral-700'
            }`} />
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
              currentStep >= 2 
                ? 'border-secondary-500 bg-secondary-50 text-secondary-500 dark:bg-secondary-900/30 dark:text-secondary-400' 
                : 'border-neutral-300 bg-white text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500'
            }`}>
              {currentStep > 2 ? <Check className="h-5 w-5" /> : 2}
            </div>
            <span className="mt-2 text-sm font-medium">Payment</span>
          </div>
          
          <div className="flex-1 flex items-center px-4">
            <div className={`h-1 w-full rounded ${
              currentStep > 2 
                ? 'bg-secondary-500 dark:bg-secondary-600' 
                : 'bg-neutral-200 dark:bg-neutral-700'
            }`} />
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
              currentStep >= 3 
                ? 'border-secondary-500 bg-secondary-50 text-secondary-500 dark:bg-secondary-900/30 dark:text-secondary-400' 
                : 'border-neutral-300 bg-white text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500'
            }`}>
              {currentStep > 3 ? <Check className="h-5 w-5" /> : 3}
            </div>
            <span className="mt-2 text-sm font-medium">Review</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Shipping Information
              </h2>
              
              <form onSubmit={handleShippingSubmit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="label">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="input"
                      value={shippingDetails.firstName}
                      onChange={handleShippingChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="label">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="input"
                      value={shippingDetails.lastName}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="label">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input"
                      value={shippingDetails.email}
                      onChange={handleShippingChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="label">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="input"
                      value={shippingDetails.phone}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="label">
                    Address*
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="input"
                    value={shippingDetails.address}
                    onChange={handleShippingChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="label">
                      City*
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      className="select"
                      value={shippingDetails.city}
                      onChange={handleShippingChange}
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
                    <label htmlFor="postalCode" className="label">
                      Postal Code*
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      required
                      className="input"
                      value={shippingDetails.postalCode}
                      onChange={handleShippingChange}
                    />
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Link to="/cart" className="btn-outline flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Cart
                  </Link>
                  
                  <button type="submit" className="btn-primary">
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <PaymentMethods onSelect={setPaymentMethod} />
                
                <div className="flex justify-between pt-4">
                  <button 
                    type="button" 
                    className="btn-outline flex items-center"
                    onClick={() => setCurrentStep(1)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Shipping
                  </button>
                  
                  <button type="submit" className="btn-primary">
                    Review Order
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Review Order
              </h2>
              
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-white">
                    Shipping Information
                  </h3>
                  <div className="mt-2 rounded-md bg-neutral-50 p-4 dark:bg-neutral-800">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {shippingDetails.firstName} {shippingDetails.lastName}<br />
                      {shippingDetails.address}<br />
                      {shippingDetails.city}, {shippingDetails.postalCode}<br />
                      {shippingDetails.email}<br />
                      {shippingDetails.phone}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-white">
                    Payment Method
                  </h3>
                  <div className="mt-2 rounded-md bg-neutral-50 p-4 dark:bg-neutral-800">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {paymentMethod === 'cod' && 'Cash on Delivery'}
                      {paymentMethod === 'jazzcash' && 'JazzCash'}
                      {paymentMethod === 'easypaisa' && 'Easypaisa'}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-neutral-900 dark:text-white">
                    Order Items
                  </h3>
                  <div className="mt-2 space-y-4">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id}
                        className="flex items-start rounded-md border border-neutral-200 p-4 dark:border-neutral-700"
                      >
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-700">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        
                        <div className="ml-4 flex-1">
                          <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        
                        <div className="ml-4 text-right">
                          <p className="text-sm font-medium text-neutral-900 dark:text-white">
                            Rs. {item.price.toLocaleString()}
                          </p>
                          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                            Total: Rs. {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button 
                    type="button" 
                    className="btn-outline flex items-center"
                    onClick={() => setCurrentStep(2)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Payment
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn-primary"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {orderPlaced && (
            <div className="rounded-lg border border-success-200 bg-success-50 p-6 shadow-sm dark:border-success-900 dark:bg-success-900/20">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-100 dark:bg-success-900/30">
                  <Check className="h-6 w-6 text-success-500" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Order Placed Successfully!
                  </h2>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    Your order has been placed and is being processed. 
                    You will receive an email confirmation shortly.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/" className="btn-primary w-full sm:w-auto">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <CheckoutSummary 
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            itemCount={cartItems.reduce((count, item) => count + item.quantity, 0)}
            onCheckout={() => {}}
          />
        </div>
      </div>
    </div>
  );
};