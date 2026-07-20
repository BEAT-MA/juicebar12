/**
 * MAIN APP COMPONENT
 * 
 * This is the entry point of the application.
 * It sets up the router and global context providers.
 */

import { RouterProvider } from 'react-router';
import { router } from './routes';
import { StoreProvider } from './context/store-context';
import { Toaster } from './components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
      <Analytics />
    </StoreProvider>
  );
}
