import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter } from 'lucide-react';

export default function CategoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLanguage, setActiveLanguage] = useState('All');

  const categories = ['All', 'Adventures', 'Moral Stories', 'Bedtime', 'Fairy Tales', 'Educational'];
  const languages = ['All', 'English', 'Hindi'];

  // Fake stories
  const stories = [1, 2, 3, 4, 5, 6].map(i => ({
    id: i,
    title: `The Magical Journey Part ${i}`,
    excerpt: "Once upon a time in a faraway land full of wonder and magic...",
    category: i % 2 === 0 ? 'Adventures' : 'Moral Stories',
    language: i % 3 === 0 ? 'Hindi' : 'English',
    image: `https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=600&h=400&fit=crop`,
    readTime: "5 min"
  }));

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || story.category === activeCategory;
    const matchesLanguage = activeLanguage === 'All' || story.language === activeLanguage;
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  return (
    <>
      <Helmet>
        <title>Explore Categories | StoryKids</title>
        <meta name="description" content="Browse hundreds of magical stories for kids in English and Hindi." />
      </Helmet>

      <div className="py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Sidebar / Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm sticky top-24 transition-colors duration-300">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Filter size={20}/> Filters</h2>
            
            <div className="mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search stories..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:text-white transition-all"
                />
                <Search size={18} className="absolute left-4 top-3.5 text-gray-500" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Language</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map(lang => (
                  <button 
                    key={lang}
                    onClick={() => setActiveLanguage(lang)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeLanguage === lang ? 'bg-pink-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-600'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</h3>
              <div className="space-y-2 flex flex-col">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? 'bg-pastel-blue text-blue-900 border border-blue-200' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Story Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredStories.map(story => (
                <Link to={`/story/dummy-slug-${story.id}`} key={story.id} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border border-gray-100 dark:border-gray-700">
                  <div className="h-48 overflow-hidden relative">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-bold rounded-full shadow-sm">{story.language}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-pink-500 text-xs font-bold uppercase tracking-wider mb-2">{story.category}</span>
                    <h3 className="font-bold text-xl mb-2 line-clamp-2">{story.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-story line-clamp-2 mb-4 text-sm flex-grow">
                      {story.excerpt}
                    </p>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500 font-medium">{story.readTime} read</span>
                      <span className="text-pink-500 font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {filteredStories.length === 0 && (
              <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <p className="text-gray-500 text-lg">No stories found matching your filters.</p>
                <button 
                  onClick={() => {setActiveCategory('All'); setActiveLanguage('All'); setSearchTerm('');}}
                  className="mt-4 text-pink-500 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
