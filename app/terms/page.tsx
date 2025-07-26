'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Agreement to Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  By accessing and using SoleHub, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Use License</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Permission is granted to temporarily download one copy of the materials on SoleHub 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Product Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We strive to ensure that all product information on our website is accurate. 
                  However, we do not warrant that product descriptions, pricing, or other content 
                  is accurate, complete, reliable, current, or error-free.
                </p>
                <p>
                  All products are subject to availability. We reserve the right to discontinue 
                  any product at any time without notice.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Pricing and Payment</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  All prices are listed in USD and are subject to change without notice. 
                  We reserve the right to correct any errors in pricing or product information.
                </p>
                <p>
                  Payment is due at the time of purchase. We accept major credit cards, 
                  PayPal, and other payment methods as displayed at checkout.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Shipping and Delivery</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We will make every effort to deliver your order within the estimated timeframe. 
                  However, delivery times are estimates and we cannot guarantee exact delivery dates.
                </p>
                <p>
                  Title and risk of loss for all merchandise pass to you upon delivery to the carrier.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Returns and Refunds</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Items may be returned within 30 days of purchase in original condition with 
                  tags attached. Custom or personalized items cannot be returned.
                </p>
                <p>
                  Refunds will be processed to the original payment method within 5-7 business days 
                  after we receive your return.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">User Accounts</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You are responsible for maintaining the confidentiality of your account and password. 
                  You agree to accept responsibility for all activities that occur under your account.
                </p>
                <p>
                  We reserve the right to terminate accounts, edit or remove content, and cancel 
                  orders at our sole discretion.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Disclaimer</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The materials on SoleHub are provided on an 'as is' basis. SoleHub makes no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties including, 
                  without limitation, implied warranties or conditions of merchantability, fitness for 
                  a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Limitations</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  In no event shall SoleHub or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use the materials on SoleHub, even if SoleHub 
                  or a SoleHub authorized representative has been notified orally or in writing of the 
                  possibility of such damage.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>Email: legal@solehub.com</p>
                <p>Phone: 1-800-SOLEHUB</p>
                <p>Address: 123 Sneaker Street, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}