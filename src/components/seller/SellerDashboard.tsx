import React from 'react';
import { 
  Package, ShoppingCart, DollarSign, Users, 
  BarChart, AlertCircle, Truck, Settings 
} from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, value, description, icon, color 
}) => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{title}</p>
          <h3 className="mt-1 text-2xl font-bold">{value}</h3>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{description}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export const SellerDashboard: React.FC = () => {
  const dashboardCards = [
    {
      title: 'Total Products',
      value: 124,
      description: '12 new this month',
      icon: <Package className="h-6 w-6 text-white" />,
      color: 'bg-primary-500 dark:bg-primary-600',
    },
    {
      title: 'Total Orders',
      value: 56,
      description: '7 new today',
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      color: 'bg-secondary-500 dark:bg-secondary-600',
    },
    {
      title: 'Revenue',
      value: 'Rs. 124,500',
      description: '15% increase from last month',
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: 'bg-success-500 dark:bg-success-600',
    },
    {
      title: 'Customers',
      value: 38,
      description: '5 returning customers',
      icon: <Users className="h-6 w-6 text-white" />,
      color: 'bg-accent-500 dark:bg-accent-600',
    },
  ];

  const recentOrders = [
    { id: 'ORD12345', customer: 'Ahmed Khan', date: '1 hour ago', amount: 'Rs. 3,500', status: 'Pending' },
    { id: 'ORD12344', customer: 'Sara Ali', date: '3 hours ago', amount: 'Rs. 12,200', status: 'Processing' },
    { id: 'ORD12343', customer: 'Muhammad Usman', date: '5 hours ago', amount: 'Rs. 8,750', status: 'Shipped' },
    { id: 'ORD12342', customer: 'Aisha Malik', date: '1 day ago', amount: 'Rs. 5,400', status: 'Delivered' },
    { id: 'ORD12341', customer: 'Bilal Ahmed', date: '2 days ago', amount: 'Rs. 22,000', status: 'Delivered' },
  ];

  const notifications = [
    { 
      id: 1, 
      title: 'Low stock alert', 
      description: 'Toyota Genuine Oil Filter - Only 5 left in stock', 
      time: '2 hours ago',
      icon: <AlertCircle className="h-5 w-5 text-warning-500" />,
    },
    { 
      id: 2, 
      title: 'New order received', 
      description: 'Order #ORD12348 received from Imran Khan', 
      time: '3 hours ago',
      icon: <ShoppingCart className="h-5 w-5 text-success-500" />,
    },
    { 
      id: 3, 
      title: 'Shipping update', 
      description: 'Order #ORD12339 delivered successfully', 
      time: '1 day ago',
      icon: <Truck className="h-5 w-5 text-secondary-500" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Seller Dashboard</h2>
        <button className="btn-outline flex items-center">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {dashboardCards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <button className="btn-secondary text-xs px-3 py-1">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 text-left text-sm font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
                    <th className="pb-3 pr-4">Order ID</th>
                    <th className="pb-3 pr-4">Customer</th>
                    <th className="pb-3 pr-4">Date</th>
                    <th className="pb-3 pr-4">Amount</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr 
                      key={order.id} 
                      className={index !== recentOrders.length - 1 ? "border-b border-neutral-200 dark:border-neutral-700" : ""}
                    >
                      <td className="py-3 pr-4 text-sm font-medium">
                        {order.id}
                      </td>
                      <td className="py-3 pr-4 text-sm">
                        {order.customer}
                      </td>
                      <td className="py-3 pr-4 text-sm text-neutral-500 dark:text-neutral-400">
                        {order.date}
                      </td>
                      <td className="py-3 pr-4 text-sm font-medium">
                        {order.amount}
                      </td>
                      <td className="py-3">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                          order.status === 'Pending' 
                            ? 'bg-warning-50 text-warning-500 dark:bg-warning-900/30 dark:text-warning-500' 
                            : order.status === 'Processing' 
                            ? 'bg-primary-50 text-primary-500 dark:bg-primary-900/30 dark:text-primary-400'
                            : order.status === 'Shipped' 
                            ? 'bg-secondary-50 text-secondary-500 dark:bg-secondary-900/30 dark:text-secondary-400'
                            : 'bg-success-50 text-success-500 dark:bg-success-900/30 dark:text-success-500'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <button className="text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300 text-sm">
                Mark all as read
              </button>
            </div>
            
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className="flex items-start space-x-3 border-b border-neutral-200 pb-4 last:border-0 dark:border-neutral-700"
                >
                  <div className="flex-shrink-0">
                    {notification.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium">
                      {notification.title}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {notification.description}
                    </p>
                    <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-4 text-center text-sm text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300 w-full">
              View All Notifications
            </button>
          </div>
          
          <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-50 text-secondary-500 dark:bg-secondary-900/30 dark:text-secondary-400">
                <BarChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Monthly Sales Report</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Download your monthly analytics
                </p>
              </div>
            </div>
            <button className="btn-secondary mt-4 w-full">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};