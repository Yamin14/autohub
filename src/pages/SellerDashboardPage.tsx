import React, { useState } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Package, ShoppingCart, Users, 
  Settings, LogOut, Menu, X, Plus 
} from 'lucide-react';
import { Logo } from '../components/ui/Logo';

export const SellerDashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, name: 'Dashboard', path: '/seller' },
    { icon: <Package className="h-5 w-5" />, name: 'Products', path: '/seller/products' },
    { icon: <ShoppingCart className="h-5 w-5" />, name: 'Orders', path: '/seller/orders' },
    { icon: <Users className="h-5 w-5" />, name: 'Customers', path: '/seller/customers' },
    { icon: <Settings className="h-5 w-5" />, name: 'Settings', path: '/seller/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/seller' && location.pathname === '/seller') return true;
    if (path !== '/seller' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Sidebar for desktop */}
      <aside className="fixed hidden h-full w-64 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 lg:block">
        <div className="flex h-16 items-center border-b border-neutral-200 px-6 dark:border-neutral-800">
          <Logo />
        </div>
        
        <div className="p-6">
          <Link 
            to="/seller/products/new" 
            className="btn-primary mb-6 flex w-full items-center justify-center"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Link>
          
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-secondary-50 text-secondary-500 dark:bg-secondary-900/20 dark:text-secondary-400'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
                  }`
                }
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full border-t border-neutral-200 p-6 dark:border-neutral-800">
          <button className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
            <LogOut className="h-5 w-5" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-neutral-900/50 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        <aside
          className={`fixed top-0 z-50 h-full w-64 transform bg-white transition-transform duration-200 ease-in-out dark:bg-neutral-900 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-6 dark:border-neutral-800">
            <Logo />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6">
            <Link 
              to="/seller/products/new" 
              className="btn-primary mb-6 flex w-full items-center justify-center"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Product
            </Link>
            
            <nav className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? 'bg-secondary-50 text-secondary-500 dark:bg-secondary-900/20 dark:text-secondary-400'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
          
          <div className="absolute bottom-0 w-full border-t border-neutral-200 p-6 dark:border-neutral-800">
            <button className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
              <LogOut className="h-5 w-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </aside>
      </div>
      
      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4 dark:border-neutral-800 dark:bg-neutral-900 lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Logo variant="compact" />
          <div className="w-10" />
        </header>
        
        {/* Dashboard content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};