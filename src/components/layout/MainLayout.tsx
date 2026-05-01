import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-pastel-blue/10 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
