'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { products } from '../../lib/products';
import Link from 'next/link';

export default function CartPage() {
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 1, size: '9', color: 'White/Black' },
    { product: products[1], quantity: 2, size: '10', color: 'Black/White' },
    { product: products[2], quantity: 1, size: '11', color: 'Black/Red' }
  ]);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(index);
      return;
    }
    
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
    
    const newCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(newCount);
  };

  const removeItem = (index: number) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    const newCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(newCount);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">Shopping Cart</h1>
          <p className="text-xl text-gray-600">Review your selected items</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <i className="ri-shopping-bag-line text-6xl text-gray-300"></i>
            </div>
            <h2 className="text-2xl font-bold text-black mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some sneakers to get started</p>
            <Link href="/products">
              <button className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4">
                  <div className="w-24 h-24 bg-white rounded-lg overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black">{item.product.name}</h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">{item.product.brand}</p>
                    <p className="text-sm text-gray-600">Size: {item.size} | Color: {item.color}</p>
                    <p className="text-lg font-bold text-black mt-2">${item.product.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-8 h-8 bg-white hover:bg-gray-100 border border-gray-300 flex items-center justify-center transition-colors"
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-subtract-line text-sm"></i>
                        </div>
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-8 h-8 bg-white hover:bg-gray-100 border border-gray-300 flex items-center justify-center transition-colors"
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-add-line text-sm"></i>
                        </div>
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(index)}
                      className="w-8 h-8 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-delete-bin-line text-lg"></i>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 h-fit">
              <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-black">Total</span>
                    <span className="text-lg font-bold text-black">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <button className="w-full bg-black text-white py-4 rounded-none font-medium hover:bg-gray-800 transition-colors mb-4">
                  Proceed to Checkout
                </button>
              </Link>
              
              <Link href="/products">
                <button className="w-full bg-white text-black py-4 border border-gray-300 rounded-none font-medium hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}