
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-accent-100 via-white to-primary-50 min-h-[600px] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23606c38' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-700 px-4 py-2 rounded-full text-sm font-light mb-6">
              <Sparkles className="h-4 w-4" />
              Multi-Vendor Marketplace
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Discover
              <span className="block text-primary-600">Unique Products</span>
              <span className="block text-accent-500">From Talented Vendors</span>
            </h1>
            
            <p className="text-lg text-gray-600 font-thin mb-8 max-w-xl mx-auto lg:mx-0">
              Connect with independent creators and discover one-of-a-kind products that tell a story. 
              Shop from verified vendors worldwide and support small businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-primary-500 hover:bg-primary-600 text-white font-light px-8 py-3 shadow-gentle hover:shadow-elegant transition-all duration-300 group"
                >
                  Start Shopping
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link to="/vendor/register">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-500 text-primary-600 hover:bg-primary-50 font-light px-8 py-3 transition-all duration-300"
                >
                  Become a Vendor
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-light text-primary-600 mb-1">2,500+</div>
                <div className="text-sm text-gray-500 font-thin">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-primary-600 mb-1">50K+</div>
                <div className="text-sm text-gray-500 font-thin">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-primary-600 mb-1">100K+</div>
                <div className="text-sm text-gray-500 font-thin">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="relative bg-white rounded-2xl shadow-elegant p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Shopping Experience"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-lg shadow-gentle">
                <div className="text-sm font-light">Free Shipping</div>
                <div className="text-xs opacity-90">On orders over $50</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-xl shadow-gentle animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="text-lg font-light">4.9★</div>
              <div className="text-xs opacity-90">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
