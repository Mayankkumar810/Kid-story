import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, Share2, Bookmark, Type, Play } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function StoryPage() {
  const { slug } = useParams();
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fontSizes = {
    normal: 'text-lg',
    large: 'text-xl',
    xlarge: 'text-2xl'
  };

  const nextFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  // Fake story data
  const story = {
    title: "The Magic Treehouse Adventure",
    content: `
      Once upon a time, in a small village surrounded by whispered legends and tall ancient trees, lived two curious siblings, Leo and Maya. They loved exploring the woods behind their house.

      One sunny afternoon, while chasing a beautifully patterned butterfly, they stumbled upon an enormous Oak tree. What made this tree special wasn't just its size, but the beautiful, glowing treehouse nestled in its branches.

      "Do you think anyone lives there?" asked Maya, her eyes wide with wonder.
      
      Leo, always the brave one, started climbing the rope ladder that hung from the trapdoor. "Let's find out!"

      Inside, the treehouse was filled with books of every color and size. As Maya opened a dusty red book, a swirl of sparkling light escaped the pages and enveloped them. 

      When the light faded, they weren't in the treehouse anymore. They were standing on a beach with pink sand, under a purple sky!
    `,
    category: "Adventure",
    language: "English",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&h=600&fit=crop",
    author: "StoryKids Team",
    date: "12 May 2026"
  };

  return (
    <>
      <Helmet>
        <title>{story.title} | StoryKids</title>
        <meta name="description" content={story.content.substring(0, 150)} />
      </Helmet>

      {/* Reading Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-pink-500 origin-left z-50 rounded-r-full"
        style={{ scaleX }} 
      />

      <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-[3rem] shadow-xl overflow-hidden mt-8 mb-16 transition-colors duration-300">
        <div className="relative h-[400px]">
          <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
            <div className="text-white w-full">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-4 py-1.5 bg-pastel-blue text-blue-900 font-bold rounded-full text-sm shadow-sm">{story.language}</span>
                <span className="px-4 py-1.5 bg-pastel-green text-green-900 font-bold rounded-full text-sm shadow-sm">{story.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans drop-shadow-md mb-2">{story.title}</h1>
              <div className="flex items-center gap-4 text-gray-200 text-sm font-medium">
                <span>By {story.author}</span>
                <span>•</span>
                <span>{story.date}</span>
                <span>•</span>
                <span>{story.readTime} read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 lg:px-16">
          <div className="flex justify-between items-center mb-8 border-b dark:border-gray-700 pb-6">
            <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-pink-500 font-medium transition-colors">
              <ChevronLeft size={20} /> Back to Stories
            </Link>
            <div className="flex gap-4">
              <button onClick={nextFontSize} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors tooltip relative group" aria-label="Change Font Size">
                <Type size={22} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors" aria-label="Listen to Audio">
                <Play size={22} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors" aria-label="Bookmark Story">
                <Bookmark size={22} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors" aria-label="Share Story">
                <Share2 size={22} />
              </button>
            </div>
          </div>

          <div className={`prose prose-lg dark:prose-invert max-w-none font-story leading-relaxed text-gray-800 dark:text-gray-200 ${fontSizes[fontSize]} whitespace-pre-line`}>
            {story.content}
          </div>

          <div className="mt-16 pt-8 border-t dark:border-gray-700 flex justify-between items-center">
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-500 font-bold transition-colors">
              <ChevronLeft size={20} /> Previous Story
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-pastel-pink hover:bg-pink-300 text-pink-900 font-bold transition-colors shadow-sm">
              Next Story <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </article>
      
      {/* Ad Placeholder */}
      <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 h-24 mb-16 rounded-2xl flex items-center justify-center text-gray-400 font-mono text-sm border-2 border-dashed border-gray-300 dark:border-gray-600">
        Advertisement Space (AdSense)
      </div>
    </>
  );
}
