
import React from 'react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from './ProductCard';



const ProductGrid = ({ category, search, filters }: { category?: string; search?: string; filters?: { price?: [number, number]; rating?: number } }) => {
  const { data: products, isLoading, error } = useProducts();
  let filtered = products || [];
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p => p.title.toLowerCase().includes(q));
  }
  if (filters) {
    if (filters.price) {
      filtered = filtered.filter(p => p.price >= filters.price[0] && p.price <= filters.price[1]);
    }
    if (filters.rating) {
      filtered = filtered.filter(p => p.rating && p.rating.rate >= filters.rating);
    }
  }
  if (isLoading) return <div className="text-center py-12">Loading products...</div>;
  if (error) return <div className="text-center text-red-500 py-12">Failed to load products.</div>;
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
