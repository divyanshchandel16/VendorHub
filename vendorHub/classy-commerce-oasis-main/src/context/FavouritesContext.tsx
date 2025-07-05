import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface FavouriteProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface FavouritesContextType {
  favourites: FavouriteProduct[];
  toggleFavourite: (product: FavouriteProduct) => void;
  isFavourite: (id: number) => boolean;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const useFavourites = () => {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error('useFavourites must be used within FavouritesProvider');
  return ctx;
};

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<FavouriteProduct[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favourites');
    if (stored) setFavourites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (product: FavouriteProduct) => {
    setFavourites(prev => {
      if (prev.find(f => f.id === product.id)) {
        return prev.filter(f => f.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavourite = (id: number) => favourites.some(f => f.id === id);

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
