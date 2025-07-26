'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/products';
import Link from 'next/link';

export default function WishlistPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(3);
  const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set([1, 3, 5]));

  const handleAddToCart = (product: any) => {
    setCartCount(prev => prev + 1);
  };

  const handleToggleWishlist = (product: any) => {
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

  const wishlistProducts = products.filter(product => wishlistItems.has(product.id));

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">My Wishlist</h1>
          <p className="text-xl text-gray-600">Your favorite sneakers saved for later</p>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <i className="ri-heart-line text-6xl text-gray-300"></i>
            </div>
            <h2 className="text-2xl font-bold text-black mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Start adding sneakers you love to your wishlist</p>
            <Link href="/products">
              <button className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors">
                Browse Products
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">{wishlistProducts.length} items in your wishlist</p>
              <Link href="/products">
                <button className="text-black hover:text-gray-600 font-medium flex items-center space-x-2">
                  <span>Continue Shopping</span>
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                  isInWishlist={wishlistItems.has(product.id)}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/cart">
                <button className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors mr-4">
                  View Cart
                </button>
              </Link>
              <Link href="/products">
                <button className="bg-white text-black px-8 py-4 border border-gray-300 rounded-none font-medium hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}