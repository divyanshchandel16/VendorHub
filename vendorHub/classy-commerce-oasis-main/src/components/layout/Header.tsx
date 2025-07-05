import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useAccount } from '@/context/AccountContext';
import { useFavourites } from '@/context/FavouritesContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const { user } = useAccount();
  const { favourites } = useFavourites();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 shadow-subtle sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center transform transition-transform duration-200 group-hover:scale-105">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-light text-primary-900 hidden sm:block">VendorHub</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-thin"
              />
            </form>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            <Link to="/vendor/register">
              <Button variant="ghost" size="sm" className="hidden md:flex font-light hover:bg-primary-50 transition-colors duration-200">
                Become a Vendor
              </Button>
            </Link>
            <Link to={user ? "/profile" : "/login"}>
              <Button variant="ghost" size="sm" className="hover:bg-primary-50 transition-colors duration-200">
                <User className="h-4 w-4" />
                <span className="hidden sm:ml-2 sm:block font-light">Account</span>
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="hover:bg-primary-50 transition-colors duration-200">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:ml-2 sm:block font-light">Cart</span>
                <span className="ml-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              </Button>
            </Link>
            <Link to="/favourites">
              <Button variant="ghost" size="sm" className="hover:bg-primary-50 transition-colors duration-200">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:ml-2 sm:block font-light">Favourites</span>
                {favourites.length > 0 && (
                  <span className="ml-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favourites.length}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </nav>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-thin"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
