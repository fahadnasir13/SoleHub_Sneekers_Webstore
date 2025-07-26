'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ReturnsPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-4">Returns & Exchanges</h1>
            <p className="text-xl text-gray-600">Easy returns within 30 days</p>
          </div>

          {/* Return Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Return Policy</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-calendar-line text-white text-xl"></i>
                    </div>
                  </div>
                  <h3 className="font-semibold text-black mb-2">30 Days</h3>
                  <p className="text-gray-600 text-sm">Return window from delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-truck-line text-white text-xl"></i>
                    </div>
                  </div>
                  <h3 className="font-semibold text-black mb-2">Free Returns</h3>
                  <p className="text-gray-600 text-sm">Prepaid return labels</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-money-dollar-circle-line text-white text-xl"></i>
                    </div>
                  </div>
                  <h3 className="font-semibold text-black mb-2">Quick Refunds</h3>
                  <p className="text-gray-600 text-sm">5-7 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Return Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">How to Return</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Initiate Return</h3>
                  <p className="text-gray-600">Contact our support team or use our online return form to start the process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Pack Items</h3>
                  <p className="text-gray-600">Pack items in original packaging with all tags attached. Include your return form.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Ship Back</h3>
                  <p className="text-gray-600">Use the prepaid return label we provide. Drop off at any authorized shipping location.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Get Refund</h3>
                  <p className="text-gray-600">Receive your refund within 5-7 business days after we process your return.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Return Form */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black mb-6">Start a Return</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Order Number"
                  className="px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                />
              </div>
              <textarea
                placeholder="Reason for return"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors"
              >
                Submit Return Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}