'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SizeGuidePage() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState('nike');

  const sizeCharts = {
    nike: [
      { us: '6', uk: '5.5', eu: '38.5', cm: '24' },
      { us: '6.5', uk: '6', eu: '39', cm: '24.5' },
      { us: '7', uk: '6', eu: '40', cm: '25' },
      { us: '7.5', uk: '6.5', eu: '40.5', cm: '25.5' },
      { us: '8', uk: '7', eu: '41', cm: '26' },
      { us: '8.5', uk: '7.5', eu: '42', cm: '26.5' },
      { us: '9', uk: '8', eu: '42.5', cm: '27' },
      { us: '9.5', uk: '8.5', eu: '43', cm: '27.5' },
      { us: '10', uk: '9', eu: '44', cm: '28' },
      { us: '10.5', uk: '9.5', eu: '44.5', cm: '28.5' },
      { us: '11', uk: '10', eu: '45', cm: '29' },
      { us: '11.5', uk: '10.5', eu: '45.5', cm: '29.5' },
      { us: '12', uk: '11', eu: '46', cm: '30' }
    ],
    adidas: [
      { us: '6', uk: '5.5', eu: '38.5', cm: '24' },
      { us: '6.5', uk: '6', eu: '39', cm: '24.5' },
      { us: '7', uk: '6.5', eu: '40', cm: '25' },
      { us: '7.5', uk: '7', eu: '40.5', cm: '25.5' },
      { us: '8', uk: '7.5', eu: '41', cm: '26' },
      { us: '8.5', uk: '8', eu: '42', cm: '26.5' },
      { us: '9', uk: '8.5', eu: '42.5', cm: '27' },
      { us: '9.5', uk: '9', eu: '43', cm: '27.5' },
      { us: '10', uk: '9.5', eu: '44', cm: '28' },
      { us: '10.5', uk: '10', eu: '44.5', cm: '28.5' },
      { us: '11', uk: '10.5', eu: '45', cm: '29' },
      { us: '11.5', uk: '11', eu: '45.5', cm: '29.5' },
      { us: '12', uk: '11.5', eu: '46', cm: '30' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-4">Size Guide</h1>
            <p className="text-xl text-gray-600">Find your perfect fit</p>
          </div>

          {/* How to Measure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">How to Measure Your Foot</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-600">Place a piece of paper on the floor against a wall</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <p className="text-gray-600">Stand on the paper with your heel against the wall</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <p className="text-gray-600">Mark the longest part of your foot on the paper</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        4
                      </div>
                      <p className="text-gray-600">Measure the distance from the wall to the mark</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Foot%20measurement%20guide%20illustration%2C%20how%20to%20measure%20foot%20length%2C%20shoe%20sizing%20diagram%2C%20professional%20footwear%20guide%2C%20step-by-step%20measurement%20process%2C%20clean%20white%20background%2C%20educational%20illustration&width=300&height=200&seq=foot_measure&orientation=landscape"
                    alt="Foot measurement guide"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Brand Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-6">Size Chart</h2>
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-full w-fit">
              {Object.keys(sizeCharts).map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                    selectedBrand === brand 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Size Chart Table */}
          <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">US</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UK</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EU</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CM</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sizeCharts[selectedBrand as keyof typeof sizeCharts].map((size, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{size.us}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{size.uk}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{size.eu}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{size.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fit Tips */}
          <div className="bg-black text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Fit Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Best Time to Measure</h3>
                <p className="text-gray-300 text-sm">Measure your feet in the evening when they're at their largest.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Wear Socks</h3>
                <p className="text-gray-300 text-sm">Measure while wearing the type of socks you'll wear with the shoes.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Both Feet</h3>
                <p className="text-gray-300 text-sm">Measure both feet and use the larger measurement.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Between Sizes</h3>
                <p className="text-gray-300 text-sm">If you're between sizes, we recommend going up to the larger size.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}