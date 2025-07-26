
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HelpPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeTab, setActiveTab] = useState('ordering');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = {
    ordering: [
      {
        question: "How do I place an order?",
        answer: "Simply browse our products, select your size and color, then add to cart. Follow the checkout process to complete your order. You can pay via credit card, debit card, or cash on delivery."
      },
      {
        question: "Can I modify my order after placing it?",
        answer: "Orders can be modified within 1 hour of placement. Contact our support team at +92 42 3587 4521 immediately if you need changes."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, Mastercard, JazzCash, EasyPaisa, and Cash on Delivery (COD) throughout Pakistan."
      },
      {
        question: "Is there a minimum order amount?",
        answer: "No minimum order amount is required. However, orders above PKR 15,000 qualify for free shipping."
      }
    ],
    shipping: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 3-5 business days within Pakistan. Express shipping takes 1-2 business days for major cities."
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free standard shipping on orders over PKR 15,000 throughout Pakistan."
      },
      {
        question: "Can I track my order?",
        answer: "Yes, you'll receive a tracking number via email and SMS once your order ships. You can track it on our website or the courier's website."
      },
      {
        question: "What areas do you deliver to?",
        answer: "We deliver to all major cities in Pakistan including Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, and many more."
      }
    ],
    returns: [
      {
        question: "What's your return policy?",
        answer: "We offer 30-day returns on unworn items in original packaging with tags attached. Items must be in sellable condition."
      },
      {
        question: "How do I return an item?",
        answer: "Contact our support team at +92 42 3587 4521 to initiate a return. We'll arrange pickup from your location free of charge."
      },
      {
        question: "When will I receive my refund?",
        answer: "Refunds are processed within 5-7 business days after we receive your return. For COD orders, refunds are processed via bank transfer."
      },
      {
        question: "Can I exchange an item?",
        answer: "Yes, we offer exchanges for different sizes or colors subject to availability. Contact our support team to arrange an exchange."
      }
    ]
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredFaqs = faqs[activeTab as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">Find answers to common questions and get the support you need</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black pr-12"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-search-line text-gray-500"></i>
              </div>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-full">
              {Object.keys(faqs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                    activeTab === tab 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`ri-${expandedFaq === index ? 'subtract' : 'add'}-line text-gray-600`}></i>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            
            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-search-line text-gray-400 text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search or browse a different category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-message-3-line text-white text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant help from our support team</p>
            <button className="bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors">
              Start Chat
            </button>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our support team</p>
            <button className="bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors">
              +92 42 3587 4521
            </button>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-mail-line text-white text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us a detailed message</p>
            <button className="bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors">
              Send Email
            </button>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-300 mb-6">Our support team is available 9 AM - 8 PM (Monday-Friday) and 10 AM - 6 PM (Weekends) Pakistan Standard Time</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-none font-medium hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-none font-medium hover:bg-gray-700 transition-colors">
              Visit Store
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
