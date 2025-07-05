import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useFavourites } from '@/context/FavouritesContext';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleFavourite, isFavourite } = useFavourites();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title || product.name,
      price: product.price,
      image: product.image,
      vendor: product.vendor || '',
    });
  };

  const handleFavourite = () => {
    toggleFavourite({
      id: product.id,
      title: product.title || product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-100 overflow-hidden shadow-subtle hover:shadow-gentle transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ height: '200px' }}>
        <img
          src={product.image}
          alt={product.title || product.name}
          className="object-contain max-h-40 w-auto h-auto mx-auto transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
          style={{ maxWidth: '80%', maxHeight: '80%' }}
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200"
          onClick={handleFavourite}
          aria-label={isFavourite(product.id) ? 'Remove from favourites' : 'Add to favourites'}
        >
          <Heart className={`h-4 w-4 transition-colors duration-200 ${isFavourite(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
        </Button>
        <div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded text-xs font-light">
          New
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-light text-gray-900 text-base group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
            {product.title || product.name}
          </h3>
        </div>

        {product.vendor && (
          <p className="text-sm text-gray-500 font-thin mb-2">by {product.vendor}</p>
        )}

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating.rate || product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-thin ml-1">
              ({product.rating.count || product.reviews})
            </span>
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-light text-primary-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-primary-500 hover:bg-primary-600 text-white font-light shadow-subtle hover:shadow-gentle transition-all duration-200"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
