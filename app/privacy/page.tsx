'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Shipping and billing addresses</li>
                  <li>Order history and preferences</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support</li>
                  <li>Send you order updates and shipping notifications</li>
                  <li>Improve our products and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We do not sell, rent, or share your personal information with third parties except:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>With service providers who help us operate our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transaction</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  All payment information is processed using industry-standard encryption and security protocols.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and personalize content. You can control cookie settings 
                  through your browser preferences.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>Email: privacy@solehub.com</p>
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