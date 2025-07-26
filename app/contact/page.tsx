
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black pr-8"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Support</option>
                  <option value="return">Returns & Exchanges</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black resize-none"
                  placeholder="Your message (max 500 characters)"
                />
                <div className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-none font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-none">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-none">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-map-pin-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Address</h3>
                    <p className="text-gray-600">
                      123 Mall Road<br />
                      Gulberg III, Lahore 54000<br />
                      Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-phone-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Phone</h3>
                    <p className="text-gray-600">+92 42 3587 4521</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-mail-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <p className="text-gray-600">hello@solehub.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-time-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 AM - 8:00 PM<br />
                      Sat - Sun: 10:00 AM - 6:00 PM<br />
                      (Pakistan Standard Time)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Pakistan/Lahore */}
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.036!2d74.3543!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905a5b5a5b5b5%3A0x5b5b5b5b5b5b5b5b!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1645123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-black mb-2">What are your shipping options?</h3>
                  <p className="text-gray-600 text-sm">We offer free standard shipping on orders over PKR 15,000 and express shipping for PKR 500.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">What is your return policy?</h3>
                  <p className="text-gray-600 text-sm">We accept returns within 30 days of purchase for unworn items in original packaging.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">How can I track my order?</h3>
                  <p className="text-gray-600 text-sm">You'll receive a tracking number via email and SMS once your order ships.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Do you accept cash on delivery?</h3>
                  <p className="text-gray-600 text-sm">Yes, we accept cash on delivery for orders within Pakistan.</p>
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
