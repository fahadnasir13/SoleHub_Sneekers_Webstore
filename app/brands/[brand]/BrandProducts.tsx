
'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import { getProductsByBrand, brands, Product } from '../../../lib/products';
import Link from 'next/link';

interface BrandProductsProps {
  brandName: string;
}

export default function BrandProducts({ brandName }: BrandProductsProps) {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState('name');

  const brand = brands.find(b => b.name.toLowerCase() === brandName.toLowerCase());
  const products = getProductsByBrand(brandName);

  const handleAddToCart = (product: Product) => {
    setCartCount(prev => prev + 1);
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(product.id)) {
        newSet.delete(product.id);
        setWishlistCount(prev => prev - 1);
      } else {
        newSet.add(product.id);
        setWishlistCount(prev => prev + 1);
      }
      return newSet;
    });
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  if (!brand) {
    return (
      <div className="min-h-screen bg-white">
        <Header cartCount={cartCount} wishlistCount={wishlistCount} />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Brand Not Found</h1>
          <p className="text-gray-600 mb-8">The brand you're looking for doesn't exist.</p>
          <Link href="/products">
            <button className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors">
              Back to Products
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/products" className="hover:text-black">Products</Link>
          <span className="mx-2">→</span>
          <span className="text-black">{brand.name}</span>
        </div>

        {/* Brand Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">{brand.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{brand.description}</p>
          <p className="text-gray-500">{products.length} products available</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-black pr-8"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          
          <div className="text-gray-600">
            Showing {sortedProducts.length} products
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isInWishlist={wishlistItems.has(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-search-line text-gray-400 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">No products available for this brand at the moment.</p>
            <Link href="/products">
              <button className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors">
                Browse All Products
              </button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
