
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: boolean;
}

export default function ProductCard({ product, onAddToCart, onToggleWishlist, isInWishlist }: ProductCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 cursor-pointer ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-black text-white text-xs font-medium rounded-full">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist(product)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 opacity-0 group-hover:opacity-100"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className={`${isInWishlist ? 'ri-heart-fill text-black' : 'ri-heart-line text-gray-600'} text-sm`}></i>
          </div>
        </button>

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-black text-white py-2 px-4 rounded-none hover:bg-gray-800 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{product.brand}</p>
          <Link href={`/products/${product.id}`}>
            <h3 className="text-lg font-semibold text-black hover:text-gray-600 transition-colors cursor-pointer line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 flex items-center justify-center">
                <i className={`${i < Math.floor(product.rating) ? 'ri-star-fill text-black' : 'ri-star-line text-gray-300'} text-sm`}></i>
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-black">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm text-gray-700 font-medium">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
