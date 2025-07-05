import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-white font-roboto">
        <Header />
        <main className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-8">Your Cart</h1>
            <div className="max-w-md mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h2 className="text-xl font-light text-gray-700 mb-4">Your cart is empty</h2>
                <p className="text-gray-500 font-thin mb-6">Start shopping to add items to your cart</p>
                <Link to="/">
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white font-light">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-roboto">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-4xl font-light text-gray-900">Your Cart</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 rounded-lg p-6 shadow-subtle">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-light text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 font-thin mb-2">by {item.vendor}</p>
                      <p className="text-lg font-light text-primary-900">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-2 border border-gray-200 rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-light text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-thin">Subtotal</span>
                    <span className="font-light">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-thin">Shipping</span>
                    <span className="font-light">Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-light text-gray-900">Total</span>
                      <span className="text-lg font-light text-primary-900">${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-light mb-4">
                  Proceed to Checkout
                </Button>
                <Link to="/" className="block text-center">
                  <Button variant="outline" className="w-full font-light">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;