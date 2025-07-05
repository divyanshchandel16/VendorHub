import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useFavourites } from '@/context/FavouritesContext';
import ProductCard from '@/components/products/ProductCard';

const Favourites = () => {
  const { favourites } = useFavourites();

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Your Favourites</h1>
          {favourites.length === 0 ? (
            <div className="text-center text-gray-500 py-12">No favourite products yet.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favourites.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favourites;
