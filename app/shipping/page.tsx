'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ShippingPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-4">Shipping Information</h1>
            <p className="text-xl text-gray-600">Fast and reliable delivery options</p>
          </div>

          {/* Shipping Options */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-truck-line text-white text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Standard Shipping</h3>
                </div>
                <p className="text-gray-600 mb-3">3-5 business days</p>
                <p className="text-lg font-bold text-black">Free on orders $100+</p>
                <p className="text-sm text-gray-500">$8.99 on orders under $100</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-rocket-line text-white text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Express Shipping</h3>
                </div>
                <p className="text-gray-600 mb-3">1-2 business days</p>
                <p className="text-lg font-bold text-black">$19.99</p>
                <p className="text-sm text-gray-500">Available for most locations</p>
              </div>
            </div>
          </div>

          {/* Processing Time */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Processing Time</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-white text-lg"></i>
                    </div>
                  </div>
                  <h3 className="font-semibold text-black mb-2">1-2 Days</h3>
                  <p className="text-gray-600 text-sm">Order processing time</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-box-3-line text-white text-lg"></i>
                    </div>
                  </div>
                  <h3 className="font-semibold text-black mb-2">Packaging</h3>
                  <p className="text-gray-600 text-sm">Careful packaging for protection</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-truck-line text-white text-lg"></i>
                    </div>
                  </div>
                  <h3 className="font-semibold text-black mb-2">Shipped</h3>
                  <p className="text-gray-600 text-sm">Tracking number provided</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Delivery Areas</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-black mb-2">United States</h3>
                <p className="text-gray-600">Free shipping on orders over $100. Standard shipping $8.99.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-black mb-2">Canada</h3>
                <p className="text-gray-600">Shipping rates start at $15.99. Delivery time 5-7 business days.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-black mb-2">International</h3>
                <p className="text-gray-600">Shipping rates vary by location. Delivery time 7-14 business days.</p>
              </div>
            </div>
          </div>

          {/* Tracking */}
          <div className="bg-black text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>
            <p className="text-gray-300 mb-6">Enter your tracking number to see your order status</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="flex-1 px-4 py-3 bg-white text-black rounded-none focus:outline-none"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-none font-medium hover:bg-gray-700 transition-colors whitespace-nowrap">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}