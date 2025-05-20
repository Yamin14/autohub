import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="py-16 bg-secondary-500 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="mt-4 text-lg text-white/90">
            Subscribe to our newsletter for exclusive deals, new arrivals, and automotive tips.
          </p>

          {subscribed ? (
            <div className="mt-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Thank You!</h3>
              <p className="mt-2">
                You've been successfully subscribed to our newsletter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row items-center max-w-md mx-auto">
                <div className="relative flex-grow w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-l-lg border-transparent bg-white/10 px-4 text-white placeholder-white/60 backdrop-blur-sm focus:border-white/30 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 h-12 w-full sm:w-auto rounded-r-lg bg-white px-6 font-medium text-secondary-500 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-secondary-500"
                >
                  <span className="flex items-center justify-center">
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};