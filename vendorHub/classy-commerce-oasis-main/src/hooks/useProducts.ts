import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts must be used within ProductsProvider');
  return {
    data: ctx.products,
    isLoading: ctx.loading,
    error: ctx.products.length === 0 && !ctx.loading
  };
};

export const useCategories = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useCategories must be used within ProductsProvider');
  return {
    data: ctx.categories,
    isLoading: ctx.loading,
    error: ctx.categories.length === 0 && !ctx.loading
  };
};
