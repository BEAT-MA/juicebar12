/**
 * ROUTES CONFIGURATION
 * 
 * This file defines all routes for the application.
 * Add new routes here if you want to create additional pages.
 */

import { createBrowserRouter } from 'react-router';
import Root from './pages/root';
import Home from './pages/home';
import Shop from './pages/shop';
import ProductDetail from './pages/product-detail';
import CartPage from './pages/cart-page';
import Checkout from './pages/checkout';
import About from './pages/about';
import Contact from './pages/contact';
import Admin from './pages/admin';
import NotFound from './pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'shop', Component: Shop },
      { path: 'product/:id', Component: ProductDetail },
      { path: 'cart', Component: CartPage },
      { path: 'checkout', Component: Checkout },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'admin', Component: Admin },
      { path: '*', Component: NotFound },
    ],
  },
]);
