import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-4xl font-light text-gray-900">About VendorHub</h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 font-thin leading-relaxed mb-6">
                VendorHub is a multi-vendor marketplace that connects talented creators with customers worldwide. 
                Our platform empowers independent vendors to showcase their unique products while providing 
                customers with access to one-of-a-kind items you won't find anywhere else.
              </p>
              
              <h2 className="text-2xl font-light text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 font-thin leading-relaxed mb-6">
                We believe in supporting small businesses and independent creators. Our mission is to provide 
                a platform where vendors can easily reach customers, manage their products, and grow their 
                businesses while maintaining the personal touch that makes their products special.
              </p>

              <h2 className="text-2xl font-light text-gray-900 mb-4">Why Choose VendorHub?</h2>
              <ul className="space-y-3 text-gray-600 font-thin">
                <li>• Curated selection of unique, handcrafted products</li>
                <li>• Direct support for independent creators and small businesses</li>
                <li>• Secure payment processing and buyer protection</li>
                <li>• Responsive customer service and support</li>
                <li>• Easy-to-use platform for both buyers and sellers</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;