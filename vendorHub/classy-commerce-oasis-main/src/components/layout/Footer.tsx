
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-light">VendorHub</span>
            </div>
            <p className="text-gray-300 font-thin text-sm leading-relaxed">
              Connecting talented vendors with customers worldwide. Discover unique, handcrafted products and support independent creators.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-light text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">About Us</Link></li>
              <li><Link to="/vendors" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Our Vendors</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Categories</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Blog</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Help Center</Link></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h3 className="font-light text-lg mb-4">For Vendors</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/vendor/register" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Become a Vendor</Link></li>
              <li><Link to="/vendor/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Vendor Dashboard</Link></li>
              <li><Link to="/vendor/fees" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Fees & Pricing</Link></li>
              <li><Link to="/vendor/resources" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Resources</Link></li>
              <li><Link to="/vendor/support" className="text-gray-300 hover:text-white transition-colors duration-200 font-thin">Vendor Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-light text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-400" />
                <span className="text-gray-300 font-thin">hello@vendorhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-400" />
                <span className="text-gray-300 font-thin">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-400" />
                <span className="text-gray-300 font-thin">123 Market St, San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-thin">
              © 2024 VendorHub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 font-thin">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
