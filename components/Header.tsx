
'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
}

export default function Header({ cartCount, wishlistCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-black hover:text-gray-700 transition-colors">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-footprint-line text-2xl"></i>
            </div>
            <span style={{ fontFamily: 'Pacifico, serif' }}>SoleHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-black transition-colors font-medium">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-black transition-colors font-medium">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-black transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-search-line text-xl"></i>
              </div>
            </button>

            {/* User Account */}
            <Link href="/account" className="p-2 text-gray-700 hover:text-black transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-line text-xl"></i>
              </div>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative p-2 text-gray-700 hover:text-black transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-heart-line text-xl"></i>
              </div>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-black transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-shopping-bag-line text-xl"></i>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for sneakers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-gray-500"></i>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-black transition-colors font-medium">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-black transition-colors font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
