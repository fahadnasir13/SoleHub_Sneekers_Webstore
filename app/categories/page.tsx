'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CategoriesPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const categories = [
    {
      name: "Running",
      description: "High-performance sneakers designed for runners",
      image: "https://readdy.ai/api/search-image?query=Premium%20running%20sneakers%20collection%20display%2C%20athletic%20performance%20footwear%2C%20modern%20minimalist%20presentation%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high-performance%20running%20shoes%2C%20contemporary%20design&width=500&height=300&seq=running_category&orientation=landscape",
      link: "/categories/running",
      productCount: 45
    },
    {
      name: "Basketball",
      description: "Court-ready shoes for basketball enthusiasts",
      image: "https://readdy.ai/api/search-image?query=Basketball%20sneakers%20collection%20display%2C%20high-top%20athletic%20shoes%2C%20modern%20minimalist%20presentation%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20basketball%20footwear%2C%20contemporary%20design&width=500&height=300&seq=basketball_category&orientation=landscape",
      link: "/categories/basketball",
      productCount: 32
    },
    {
      name: "Lifestyle",
      description: "Casual sneakers for everyday wear",
      image: "https://readdy.ai/api/search-image?query=Lifestyle%20casual%20sneakers%20collection%20display%2C%20everyday%20footwear%2C%20modern%20minimalist%20presentation%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20casual%20shoes%2C%20contemporary%20design&width=500&height=300&seq=lifestyle_category&orientation=landscape",
      link: "/categories/lifestyle",
      productCount: 67
    },
    {
      name: "Skateboarding",
      description: "Durable shoes built for skateboarding",
      image: "https://readdy.ai/api/search-image?query=Skateboarding%20sneakers%20collection%20display%2C%20skate%20shoes%2C%20modern%20minimalist%20presentation%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20skateboard%20footwear%2C%20contemporary%20design&width=500&height=300&seq=skateboarding_category&orientation=landscape",
      link: "/categories/skateboarding",
      productCount: 28
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Categories</h1>
          <p className="text-xl text-gray-600">Explore our complete range of sneaker categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <div className="group cursor-pointer bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[5/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black group-hover:text-gray-600 transition-colors">
                      {category.name}
                    </h2>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {category.productCount} products
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-black group-hover:text-gray-600 transition-colors">
                    <span className="font-medium">Shop Now</span>
                    <div className="w-4 h-4 flex items-center justify-center ml-2">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-black mb-8">Popular This Season</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">New Arrivals</h3>
              <p className="text-gray-300 mb-4">Check out the latest sneaker releases</p>
              <Link href="/products?filter=new">
                <button className="bg-white text-black px-6 py-3 rounded-none font-medium hover:bg-gray-200 transition-colors">
                  View New Arrivals
                </button>
              </Link>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-black">Sale Items</h3>
              <p className="text-gray-600 mb-4">Save up to 50% on selected sneakers</p>
              <Link href="/products?filter=sale">
                <button className="bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors">
                  Shop Sale
                </button>
              </Link>
            </div>
            
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Limited Edition</h3>
              <p className="text-gray-300 mb-4">Exclusive drops and rare finds</p>
              <Link href="/products?filter=limited">
                <button className="bg-white text-black px-6 py-3 rounded-none font-medium hover:bg-gray-200 transition-colors">
                  Explore Limited
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}