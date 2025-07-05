import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "@/components/auth/PrivateRoute";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import VendorRegister from "./pages/VendorRegister";
import About from "./pages/About";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import { AccountProvider } from "./context/AccountContext";
import { CartProvider } from "./context/CartContext";
import { FavouritesProvider } from "./context/FavouritesContext";
import { ProductsProvider } from "./context/ProductsContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ProductsProvider>
      <AccountProvider>
        <CartProvider>
          <FavouritesProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/categories/:categoryId" element={<Categories />} />
                    <Route path="/vendor/register" element={<VendorRegister />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vendors" element={<PlaceholderPage />} />
                    <Route path="/blog" element={<PlaceholderPage />} />
                    <Route path="/help" element={<PlaceholderPage />} />
                    <Route path="/privacy" element={<PlaceholderPage />} />
                    <Route path="/terms" element={<PlaceholderPage />} />
                    <Route path="/cookies" element={<PlaceholderPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/favourites" element={<Favourites />} />
                  </Route>
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </FavouritesProvider>
        </CartProvider>
      </AccountProvider>
    </ProductsProvider>
  </QueryClientProvider>
);

export default App;
