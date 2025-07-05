import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PlaceholderPage = () => {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '').replace('-', ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <Construction className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h1 className="text-2xl font-light text-gray-900 mb-4">{pageName}</h1>
              <p className="text-gray-500 font-thin mb-6">
                This page is currently under construction. We're working hard to bring you amazing content soon!
              </p>
              <Link to="/">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white font-light">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;