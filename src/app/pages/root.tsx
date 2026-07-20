/**
 * ROOT LAYOUT
 * 
 * This is the main layout component that wraps all pages.
 * It includes the header and footer that appear on every page.
 */

import { Outlet } from 'react-router';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-green-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
