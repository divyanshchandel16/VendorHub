import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { useLocation } from 'react-router-dom';
import ProductGrid from '@/components/products/ProductGrid';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

import { useState } from 'react';

const Products = () => {
  const query = useQuery();
  const initialSearch = query.get('search') || '';
  const [search, setSearch] = useState(initialSearch);
  const [price, setPrice] = useState<[number, number] | undefined>();
  const [rating, setRating] = useState<number | undefined>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === '') setPrice(undefined);
    else if (val === '1') setPrice([0, 50]);
    else if (val === '2') setPrice([51, 150]);
    else if (val === '3') setPrice([151, 500]);
    else if (val === '4') setPrice([501, 10000]);
  };
  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setRating(val ? Number(val) : undefined);
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-gray-900 mb-8">All Products</h1>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
              className="border rounded px-3 py-2 w-full md:w-1/3"
            />
            <select className="border rounded px-3 py-2" onChange={handlePriceChange} defaultValue="">
              <option value="">All Prices</option>
              <option value="1">$0 - $50</option>
              <option value="2">$51 - $150</option>
              <option value="3">$151 - $500</option>
              <option value="4">$501+</option>
            </select>
            <select className="border rounded px-3 py-2" onChange={handleRatingChange} defaultValue="">
              <option value="">All Ratings</option>
              <option value="4">4★ & up</option>
              <option value="4.5">4.5★ & up</option>
              <option value="5">5★ only</option>
            </select>
          </div>
          <ProductGrid search={search} filters={{ price, rating }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;