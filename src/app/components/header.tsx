/**
 * HEADER COMPONENT
 * 
 * Main navigation header with responsive mobile menu.
 * Shows cart item count and provides navigation to all pages.
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../context/store-context';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useStore();
  const location = useLocation();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-green-500/30"
            >
              J
            </motion.div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                JuiceBar
              </span>
              <p className="text-xs text-gray-500">Premium Cold-Pressed</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/cart">
                <Button
                  variant="outline"
                  size="icon"
                  className="relative border-2 border-green-600 hover:bg-green-50"
                >
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                  {totalItems > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Badge className="h-6 w-6 flex items-center justify-center p-0 bg-gradient-to-r from-green-600 to-emerald-600 border-0">
                        {totalItems}
                      </Badge>
                    </motion.div>
                  )}
                </Button>
              </Link>
            </motion.div>
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-medium ${
                      isActive(link.path)
                        ? 'text-green-600'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
