/**
 * FOOTER COMPONENT
 * 
 * Site footer with links, contact info, and social media.
 * You can customize the links, contact details, and social media icons here.
 */

import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center font-bold text-2xl">
                J
              </div>
              <div>
                <span className="text-2xl font-bold">JuiceBar</span>
                <p className="text-xs text-gray-400">Premium Cold-Pressed</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Bringing fresh, organic, cold-pressed juices to your doorstep since 2020. 
              We source only the finest organic produce from local farms.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span>📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span>📷</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span>🐦</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-green-400 transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-green-400 transition-colors">Admin</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>📧 hello@juicebar.com</li>
              <li>📱 (555) 123-4567</li>
              <li>📍 123 Fresh Street<br/>San Francisco, CA 94102</li>
              <li className="pt-2 text-sm">
                <span className="text-white font-medium">Hours:</span><br/>
                Mon-Fri: 7am - 8pm<br/>
                Sat-Sun: 8am - 6pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2026 JuiceBar. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
