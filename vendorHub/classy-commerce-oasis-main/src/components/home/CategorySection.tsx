import { useCategories } from '@/hooks/useProducts';
import { Palette, Home, Shirt, BookOpen, Coffee, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICONS: Record<string, any> = {
  electronics: Palette,
  jewelery: Gift,
  "men's clothing": Shirt,
  "women's clothing": Shirt,
};

const CategorySection = () => {
  const { data: categories, isLoading, error } = useCategories();
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 font-thin max-w-2xl mx-auto">
            Explore our diverse range of categories and find exactly what you're looking for
          </p>
        </div>
        {isLoading ? (
          <div className="text-center py-12">Loading categories...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">Failed to load categories.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories && categories.map((cat, index) => {
              const Icon = ICONS[cat] || Palette;
              return (
                <Link
                  key={cat}
                  to={`/categories/${cat}`}
                  className="group bg-white rounded-xl p-6 text-center hover:shadow-gentle transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-fade-in border border-gray-100 block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gray-50 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-light text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </h3>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
