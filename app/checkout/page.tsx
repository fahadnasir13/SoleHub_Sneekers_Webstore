'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CheckoutPage() {
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const cartItems = [
    { id: 1, name: "Air Max 270 React", brand: "Nike", price: 149.99, quantity: 1, size: "10", color: "White/Black" },
    { id: 2, name: "Ultra Boost 22", brand: "Adidas", price: 179.99, quantity: 1, size: "9", color: "Black/White" },
    { id: 3, name: "Air Jordan 1 Retro", brand: "Jordan", price: 239.99, quantity: 1, size: "10", color: "Black/Red" }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">Checkout</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/cart" className="hover:text-black">Cart</Link>
            <span className="mx-2">→</span>
            <span className="text-black">Checkout</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-black mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-black mb-6">Payment Information</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black mb-2">Payment Method</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Credit Card
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      PayPal
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === 'card' && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-black mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Name on Card</label>
                        <input
                          type="text"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 rounded-none font-medium hover:bg-gray-800 transition-colors"
              >
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-black">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.brand}</p>
                      <p className="text-sm text-gray-600">Size: {item.size} | Color: {item.color}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-black">${item.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-black">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-black">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-black">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-black">Total</span>
                    <span className="text-black">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-secure-payment-line"></i>
                  </div>
                  <span>Secure checkout powered by SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}