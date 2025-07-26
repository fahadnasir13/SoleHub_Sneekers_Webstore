
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { teamMembers } from '../../lib/products';

export default function TeamPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4 text-center">Meet Our Team</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            The passionate individuals behind SoleHub, working together to bring you the best sneaker experience
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center ${member.color} text-white text-4xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {member.avatar}
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-3">{member.role}</p>
              <p className="text-sm text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-star-line text-white text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Quality First</h3>
              <p className="text-gray-600">We only offer authentic, premium sneakers from trusted brands</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-customer-service-2-line text-white text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Customer Focus</h3>
              <p className="text-gray-600">Your satisfaction is our priority, from browsing to delivery</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-rocket-line text-white text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously improve our platform and services</p>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for passionate people to join our growing team
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-gray-100 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
