'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CareersPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for a skilled frontend developer to help build our next-generation e-commerce platform."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Join our product team to help shape the future of online sneaker shopping."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help ensure our customers have an exceptional experience with SoleHub."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Drive growth through creative marketing campaigns and brand partnerships."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4 text-center">Careers at SoleHub</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Join our team and help shape the future of sneaker culture
          </p>
        </div>

        {/* Why Work Here */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Work Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-team-line text-white text-lg"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Great Team</h3>
              <p className="text-gray-600">Work with passionate, talented individuals who love what they do</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-rocket-line text-white text-lg"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Growth</h3>
              <p className="text-gray-600">Accelerate your career with learning opportunities and mentorship</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-scales-line text-white text-lg"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible work arrangements and comprehensive benefits</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="text-sm text-gray-600">
                        <i className="ri-building-line mr-1"></i>
                        {position.department}
                      </span>
                      <span className="text-sm text-gray-600">
                        <i className="ri-map-pin-line mr-1"></i>
                        {position.location}
                      </span>
                      <span className="text-sm text-gray-600">
                        <i className="ri-time-line mr-1"></i>
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="bg-black text-white px-6 py-2 rounded-none font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-bold text-black mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-bold text-black mb-2">Review</h3>
              <p className="text-gray-600 text-sm">Our team reviews your application</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-bold text-black mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Meet with our team members</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-bold text-black mb-2">Welcome</h3>
              <p className="text-gray-600 text-sm">Join the SoleHub family</p>
            </div>
          </div>
        </div>

        {/* Contact HR */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always interested in hearing from talented individuals
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-gray-100 transition-colors">
            Contact HR
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}