import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  vendor: string;
  quantity: number;
}

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return {
    cart: ctx.cart,
    addToCart: ctx.addToCart,
    removeFromCart: ctx.removeFromCart,
    updateQuantity: ctx.updateQuantity,
    clearCart: ctx.clearCart,
    getTotalItems: () => ctx.cart.reduce((sum, item) => sum + item.quantity, 0),
    getTotalPrice: () => ctx.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  };
};