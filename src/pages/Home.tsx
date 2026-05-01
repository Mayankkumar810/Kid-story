import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl mt-4">
        <img 
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200&h=500" 
          alt="Magical Story Book"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 md:p-16">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-sans mb-4 drop-shadow-lg">
              Welcome to the Magic World of Stories!
            </h1>
            <p className="text-lg md:text-xl font-story mb-8 drop-shadow-md">
              Discover amazing adventures, moral tales, and fun stories in English and Hindi.
            </p>
            <button className="bg-pastel-pink hover:bg-pink-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Start Reading
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-bold">Explore Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 1, title: 'Adventures', color: 'bg-pastel-blue', img: 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=800&q=80' },
            { id: 2, title: 'Moral Stories', color: 'bg-pastel-green', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80' },
            { id: 3, title: 'Bedtime', color: 'bg-pastel-purple', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80' },
            { id: 4, title: 'Hindi Kahani', color: 'bg-pastel-yellow', img: 'https://images.unsplash.com/photo-1528697203043-7f2e10c710d0?w=800&q=80' },
          ].map(cat => (
            <div key={cat.id} className={`${cat.color} group relative h-48 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}>
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800 drop-shadow-sm">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Stories */}
      <section>
        <h2 className="text-3xl font-bold mb-6">New Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=600&h=400&fit=crop`} alt="Story Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-bold px-3 py-1 bg-pastel-blue text-blue-800 rounded-full">English</span>
                  <span className="text-xs font-bold px-3 py-1 bg-pastel-green text-green-800 rounded-full">Adventure</span>
                </div>
                <h3 className="font-bold text-xl mb-2 line-clamp-2">The Magic Treehouse Adventure Part {i}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-story line-clamp-3 mb-4 text-sm flex-grow">
                  Once upon a time, there were two brave kids who found a magical treehouse hidden deep in the forest...
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 font-medium">5 min read</span>
                  <button className="text-pink-500 font-bold hover:text-pink-600">Read &rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
