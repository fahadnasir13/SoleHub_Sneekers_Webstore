
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getProductById } from '../../../lib/products';
import Link from 'next/link';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const product = getProductById(parseInt(productId));

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header cartCount={cartCount} wishlistCount={wishlistCount} />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <button className="bg-black text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors">
              Back to Products
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    setCartCount(prev => prev + quantity);
  };

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    if (!isInWishlist) {
      setWishlistCount(prev => prev + 1);
    } else {
      setWishlistCount(prev => prev - 1);
    }
  };

  const allImages = [product.image, ...product.gallery];

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/products" className="hover:text-black">Products</Link>
          <span className="mx-2">→</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={allImages[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {allImages.length > 1 && (
              <div className="flex space-x-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 flex items-center justify-center">
                        <i className={`${i < Math.floor(product.rating) ? 'ri-star-fill' : 'ri-star-line'} text-sm`}></i>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-black">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.isSale && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Sale
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-none text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 bg-white text-black hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-none text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 bg-white text-black hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-none">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-subtract-line"></i>
                  </div>
                </button>
                <span className="px-4 py-3 border-x border-gray-300 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-add-line"></i>
                  </div>
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 px-8 rounded-none font-medium hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>

              <button
                onClick={handleToggleWishlist}
                className={`p-4 border rounded-none transition-colors ${
                  isInWishlist
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-gray-300 hover:border-black'
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`${isInWishlist ? 'ri-heart-fill' : 'ri-heart-line'} text-xl`}></i>
                </div>
              </button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-check-line text-green-500"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
