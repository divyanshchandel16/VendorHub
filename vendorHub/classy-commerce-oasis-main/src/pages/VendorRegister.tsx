import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const VendorRegister = () => {
  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-4xl font-light text-gray-900">Become a Vendor</h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6">Why Join VendorHub?</h2>
                <div className="space-y-4">
                  {[
                    'Reach thousands of customers worldwide',
                    'Easy-to-use vendor dashboard',
                    'Secure payment processing',
                    'Marketing support and tools',
                    'No setup fees or monthly charges',
                    '24/7 customer support'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-thin">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Form */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-light text-gray-900 mb-6">Get Started Today</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-thin"
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-thin"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-thin"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Business Category
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-thin">
                      <option value="">Select a category</option>
                      <option value="art">Art & Crafts</option>
                      <option value="home">Home & Living</option>
                      <option value="fashion">Fashion</option>
                      <option value="books">Books & Media</option>
                      <option value="food">Food & Beverages</option>
                      <option value="gifts">Gifts & Occasions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Tell us about your business
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-thin"
                      placeholder="Describe your products and business..."
                    />
                  </div>

                  <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-light">
                    Submit Application
                  </Button>
                </form>

                <p className="text-xs text-gray-500 font-thin mt-4 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorRegister;