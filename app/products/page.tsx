'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { products, brands, Product } from '../../lib/products';

export default function ProductsPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set());
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

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

  const filteredProducts = products
    .filter(product => selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand)
    .filter(product => selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory)
    .sort((a, b) => {
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

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">All Products</h1>
          <p className="text-xl text-gray-600">Discover our complete collection of premium sneakers</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-black pr-8"
          >
            <option value="all">All Brands</option>
            {brands.map(brand => (
              <option key={brand.id} value={brand.name.toLowerCase()}>{brand.name}</option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-black pr-8"
          >
            <option value="all">All Categories</option>
            <option value="running">Running</option>
            <option value="basketball">Basketball</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="skateboarding">Skateboarding</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:border-black pr-8"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isInWishlist={wishlistItems.has(product.id)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}