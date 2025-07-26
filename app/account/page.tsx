'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AccountPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeTab, setActiveTab] = useState('profile');

  const orders = [
    {
      id: 'SH-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 299.98,
      items: 2
    },
    {
      id: 'SH-2024-002',
      date: '2024-01-10',
      status: 'Processing',
      total: 149.99,
      items: 1
    },
    {
      id: 'SH-2024-003',
      date: '2024-01-05',
      status: 'Shipped',
      total: 199.99,
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">My Account</h1>
          <p className="text-xl text-gray-600">Manage your profile and orders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 rounded-none font-medium transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-3 rounded-none font-medium transition-colors ${
                  activeTab === 'orders' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full text-left px-4 py-3 rounded-none font-medium transition-colors ${
                  activeTab === 'addresses' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                Addresses
              </button>
              <button
                onClick={() => setActiveTab('preferences')}
                className={`w-full text-left px-4 py-3 rounded-none font-medium transition-colors ${
                  activeTab === 'preferences' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                Preferences
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Profile Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Order History</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-black">#{order.id}</span>
                          <span className="text-sm text-gray-600">{order.date}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : order.status === 'Processing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">{order.items} items</span>
                        <span className="font-bold text-black">${order.total}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Saved Addresses</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-black">Home</span>
                      <span className="text-sm text-gray-600">Default</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      123 Main Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                  
                  <button className="w-full bg-white text-black py-4 border border-gray-300 rounded-none font-medium hover:bg-gray-50 transition-colors">
                    Add New Address
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span className="text-gray-700">Email notifications for new arrivals</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span className="text-gray-700">SMS updates for orders</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-gray-700">Marketing emails</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Shoe Size</h3>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black pr-8">
                      <option>Select your size</option>
                      <option>US 7</option>
                      <option>US 8</option>
                      <option>US 9</option>
                      <option>US 10</option>
                      <option>US 11</option>
                      <option>US 12</option>
                    </select>
                  </div>
                  
                  <button className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors">
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}