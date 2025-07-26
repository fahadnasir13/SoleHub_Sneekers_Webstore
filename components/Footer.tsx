
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-footprint-line text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Pacifico, serif' }}>
                SoleHub
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your destination for premium sneakers from the world's most iconic brands. Quality, style, and authenticity guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-youtube-fill text-xl"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/running" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Running
                </Link>
              </li>
              <li>
                <Link href="/categories/basketball" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="/categories/lifestyle" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/categories/skateboarding" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Skateboarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">About SoleHub</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 SoleHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img src="https://readdy.ai/api/search-image?query=Visa%20payment%20method%20logo%20on%20transparent%20background%2C%20payment%20card%20logo%2C%20financial%20services%20branding%2C%20clean%20minimal%20design%2C%20professional%20payment%20icon&width=40&height=25&seq=visa&orientation=landscape" alt="Visa" className="h-6" />
              <img src="https://readdy.ai/api/search-image?query=Mastercard%20payment%20method%20logo%20on%20transparent%20background%2C%20payment%20card%20logo%2C%20financial%20services%20branding%2C%20clean%20minimal%20design%2C%20professional%20payment%20icon&width=40&height=25&seq=mastercard&orientation=landscape" alt="Mastercard" className="h-6" />
              <img src="https://readdy.ai/api/search-image?query=PayPal%20payment%20method%20logo%20on%20transparent%20background%2C%20digital%20payment%20logo%2C%20financial%20services%20branding%2C%20clean%20minimal%20design%2C%20professional%20payment%20icon&width=40&height=25&seq=paypal&orientation=landscape" alt="PayPal" className="h-6" />
              <img src="https://readdy.ai/api/search-image?query=Apple%20Pay%20payment%20method%20logo%20on%20transparent%20background%2C%20digital%20payment%20logo%2C%20financial%20services%20branding%2C%20clean%20minimal%20design%2C%20professional%20payment%20icon&width=40&height=25&seq=applepay&orientation=landscape" alt="Apple Pay" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
