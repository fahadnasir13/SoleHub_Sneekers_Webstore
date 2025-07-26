
'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, brands, Product } from '../lib/products';
import Link from 'next/link';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const heroSlides = [
    {
      title: "Premium Sneakers",
      subtitle: "Step Into Excellence",
      description: "Discover the world's finest sneakers from legendary brands",
      image: "https://readdy.ai/api/search-image?query=Premium%20luxury%20sneakers%20collection%20display%2C%20modern%20minimalist%20retail%20store%20interior%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20elegant%20sneaker%20showcase%2C%20sophisticated%20lighting%2C%20high-end%20footwear%20presentation%2C%20contemporary%20design&width=1400&height=700&seq=hero1&orientation=landscape",
      buttonText: "Shop Now",
      buttonLink: "/products"
    },
    {
      title: "Limited Edition",
      subtitle: "Exclusive Drops",
      description: "Get access to the latest exclusive sneaker releases",
      image: "https://readdy.ai/api/search-image?query=Limited%20edition%20exclusive%20sneakers%20display%2C%20premium%20sneaker%20collection%2C%20modern%20retail%20showcase%2C%20clean%20minimalist%20background%2C%20professional%20product%20photography%2C%20luxury%20footwear%20presentation%2C%20sophisticated%20design%2C%20high-end%20sneakers&width=1400&height=700&seq=hero2&orientation=landscape",
      buttonText: "View Collection",
      buttonLink: "/products"
    },
    {
      title: "Performance First",
      subtitle: "Athletic Excellence",
      description: "Engineered for athletes, designed for champions",
      image: "https://readdy.ai/api/search-image?query=Athletic%20performance%20sneakers%20collection%2C%20sports%20footwear%20display%2C%20modern%20minimalist%20presentation%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20athletic%20shoes%2C%20contemporary%20design%2C%20high-performance%20sneakers&width=1400&height=700&seq=hero3&orientation=landscape",
      buttonText: "Explore Sports",
      buttonLink: "/categories/running"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

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

  const featuredProducts = products.slice(0, 6);
  const categories = [
    {
      name: "Running",
      image: "https://readdy.ai/api/search-image?query=Premium%20running%20sneakers%20collection%2C%20athletic%20footwear%2C%20modern%20minimalist%20display%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high-performance%20running%20shoes%2C%20contemporary%20design%2C%20sports%20sneakers&width=400&height=300&seq=running_cat&orientation=landscape",
      link: "/categories/running",
      count: "24+ styles"
    },
    {
      name: "Basketball",
      image: "https://readdy.ai/api/search-image?query=Basketball%20sneakers%20collection%2C%20high-top%20athletic%20shoes%2C%20modern%20minimalist%20display%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20basketball%20footwear%2C%20contemporary%20design%2C%20sports%20sneakers&width=400&height=300&seq=basketball_cat&orientation=landscape",
      link: "/categories/basketball",
      count: "18+ styles"
    },
    {
      name: "Lifestyle",
      image: "https://readdy.ai/api/search-image?query=Lifestyle%20casual%20sneakers%20collection%2C%20everyday%20footwear%2C%20modern%20minimalist%20display%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20casual%20shoes%2C%20contemporary%20design%2C%20lifestyle%20sneakers&width=400&height=300&seq=lifestyle_cat&orientation=landscape",
      link: "/categories/lifestyle",
      count: "32+ styles"
    },
    {
      name: "Skateboarding",
      image: "https://readdy.ai/api/search-image?query=Skateboarding%20sneakers%20collection%2C%20skate%20shoes%2C%20modern%20minimalist%20display%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20skateboard%20footwear%2C%20contemporary%20design%2C%20street%20sneakers&width=400&height=300&seq=skate_cat&orientation=landscape",
      link: "/categories/skateboarding",
      count: "16+ styles"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      {/* Enhanced Hero Section with Interactive Slider */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
              </div>
              
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="w-full max-w-3xl text-white">
                  <div className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <p className="text-lg font-light mb-4 text-gray-200 tracking-wide uppercase">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-7xl font-bold mb-6 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-10 text-gray-200 max-w-2xl leading-relaxed font-light">
                      {slide.description}
                    </p>
                    <Link href={slide.buttonLink}>
                      <button className="group relative bg-white text-black px-12 py-5 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap overflow-hidden">
                        <span className="relative z-10">{slide.buttonText}</span>
                        <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 group"
        >
          <i className="ri-arrow-left-s-line text-2xl group-hover:scale-110 transition-transform"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 group"
        >
          <i className="ri-arrow-right-s-line text-2xl group-hover:scale-110 transition-transform"></i>
        </button>
        
        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-white rounded-full' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
              }`}
            />
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
          />
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Find the perfect sneakers for every activity and lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white rounded-2xl shadow-lg mb-6 group-hover:shadow-2xl transition-shadow duration-300">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 font-light">{category.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Discover our handpicked premium sneakers from the world's top brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isInWishlist={wishlistItems.has(product.id)}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/products">
              <button className="group relative bg-black text-white px-12 py-5 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 whitespace-nowrap overflow-hidden">
                <span className="relative z-10">View All Products</span>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-arrow-right-line text-xl"></i>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Top Brands Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Top Brands</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Shop from the world's most iconic sneaker brands
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand) => (
              <Link key={brand.id} href={`/brands/${brand.name.toLowerCase()}`}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border border-gray-100">
                  <div className="aspect-[3/2] mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-light">{brand.productsCount} products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Abstract%20geometric%20pattern%20background%2C%20modern%20minimalist%20design%2C%20dark%20theme%2C%20sophisticated%20texture%2C%20contemporary%20digital%20art%2C%20clean%20lines%2C%20professional%20presentation&width=1200&height=400&seq=newsletter_bg&orientation=landscape')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Stay in the Loop</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Get exclusive drops, latest sneaker news, and special offers delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-5 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-lg"
              />
              <button className="bg-white text-black px-8 py-5 font-semibold hover:bg-gray-200 transition-all duration-300 whitespace-nowrap rounded-lg group">
                <span className="mr-2">Subscribe</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4 font-light">
              Join 50,000+ sneaker enthusiasts and never miss a drop
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
