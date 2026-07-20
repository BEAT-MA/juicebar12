/**
 * STORE CONTEXT
 * 
 * This context manages the entire application state including:
 * - Products data (stored in localStorage)
 * - Shopping cart
 * - User preferences
 * 
 * The products are stored in localStorage so they persist across page refreshes.
 * When you add/edit/delete products in the admin panel, they're saved here.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initialProducts, Product } from '../data/products-data';

// Cart item interface
export interface CartItem extends Product {
  quantity: number;
}

// Context interface
interface StoreContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getProductById: (id: number) => Product | undefined;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// LocalStorage keys
const PRODUCTS_STORAGE_KEY = 'juicebar_products';
const CART_STORAGE_KEY = 'juicebar_cart';

export function StoreProvider({ children }: { children: ReactNode }) {
  // Initialize products from localStorage or use initial data
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error('Error parsing stored products:', e);
        }
      }
    }
    return initialProducts;
  });

  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error('Error parsing stored cart:', e);
        }
      }
    }
    return [];
  });

  // Save products to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Product management functions
  const addProduct = (product: Product) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id), 0) + 1,
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: number, updatedData: Partial<Product>) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, ...updatedData } : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
    // Also remove from cart if present
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getProductById = (id: number) => {
    return products.find(product => product.id === id);
  };

  // Cart management functions
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value: StoreContextType = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    cartItems,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    getProductById,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

// Custom hook to use the store context
export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
