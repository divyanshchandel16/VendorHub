import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import { useCategories } from '@/hooks/useProducts';

const Categories = () => {
  const { categoryId } = useParams();
  const { data: categories } = useCategories();

  const getCategoryName = (id?: string) => {
    if (!categories) return 'All Categories';
    return categories.find((cat: string) => cat === id) || 'All Categories';
  };

  const [search, setSearch] = useState('');
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
          <div className="mb-8">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              {getCategoryName(categoryId)}
            </h1>
            <p className="text-gray-600 font-thin">
              Discover amazing products in this category
            </p>
          </div>
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
          <ProductGrid category={categoryId} search={search} filters={{ price, rating }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;