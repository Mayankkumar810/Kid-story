import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">StoryKids</h3>
            <p className="text-gray-600 dark:text-gray-400 font-story">
              A magical place where imagination meets storytelling in English and Hindi.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/categories" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">Categories</Link></li>
              <li><Link to="/trending" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">Trending Stories</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-center items-center gap-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-pink-500 fill-pink-500" /> for kids
          </p>
        </div>
      </div>
    </footer>
  );
}
