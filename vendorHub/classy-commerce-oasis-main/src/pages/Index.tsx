import React, { useEffect } from 'react';
import { useAccount } from '../context/AccountContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import ProductGrid from '@/components/products/ProductGrid';

const Index = () => {
  const { user } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
