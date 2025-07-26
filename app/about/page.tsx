'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { teamMembers } from '../../lib/products';

export default function AboutPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">About SoleHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the finest sneakers from around the world. 
            Our mission is to provide authentic, high-quality footwear that combines style, comfort, and performance.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2020, SoleHub began as a small passion project among sneaker enthusiasts. 
                We recognized the need for a platform that not only offered authentic products but also 
                provided an exceptional shopping experience.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Today, we've grown into a trusted destination for sneaker lovers worldwide, partnering 
                with leading brands like Nike, Adidas, Jordan, and more to bring you the latest releases 
                and timeless classics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to authenticity, quality, and customer satisfaction remains at the heart 
                of everything we do.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20sneaker%20store%20interior%20with%20premium%20shoe%20displays%2C%20contemporary%20retail%20design%2C%20professional%20lighting%2C%20clean%20minimalist%20aesthetic%2C%20luxury%20footwear%20showcase%2C%20sophisticated%20store%20environment&width=600&height=400&seq=about_story&orientation=landscape"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-verified-badge-line text-white text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Authenticity</h3>
              <p className="text-gray-600">
                Every product we sell is 100% authentic, sourced directly from authorized retailers and brand partners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-heart-line text-white text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Passion</h3>
              <p className="text-gray-600">
                We're sneaker enthusiasts first, retailers second. Our passion drives us to curate the best collections.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-customer-service-line text-white text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Service</h3>
              <p className="text-gray-600">
                Exceptional customer service is our priority. We're here to help you find your perfect pair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate individuals behind SoleHub</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-300">Premium Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-gray-300">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}