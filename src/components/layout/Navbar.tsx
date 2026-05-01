import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-pastel-pink text-pink-700 p-2 rounded-2xl group-hover:bg-pastel-blue group-hover:text-blue-700 transition-colors">
                <BookOpen size={24} className="animate-bounce-hover" />
              </div>
              <span className="font-sans font-bold text-xl md:text-2xl text-gray-800 dark:text-white">
                StoryKids
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium">Home</Link>
            <Link to="/categories" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium">Categories</Link>
            <Link to="/trending" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium">Trending</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-pastel-yellow dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:scale-110 transition-transform"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-pastel-yellow dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:scale-110 transition-transform"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-2xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 hover:bg-pastel-pink/20">Home</Link>
            <Link to="/categories" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-2xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 hover:bg-pastel-pink/20">Categories</Link>
            <Link to="/trending" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-2xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 hover:bg-pastel-pink/20">Trending</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
