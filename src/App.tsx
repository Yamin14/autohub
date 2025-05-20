import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { MechanicsPage } from './pages/MechanicsPage';
import { SellerDashboardPage } from './pages/SellerDashboardPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { SellerDashboard } from './components/seller/SellerDashboard';
import { ProductForm } from './components/seller/ProductForm';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/mechanics" element={<MechanicsPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/seller" element={<SellerDashboardPage />}>
          <Route index element={<SellerDashboard />} />
          <Route path="products/new" element={<ProductForm onSubmit={() => {}} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;