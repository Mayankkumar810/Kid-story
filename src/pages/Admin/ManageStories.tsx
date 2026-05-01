import React from 'react';

export default function ManageStories() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold dark:text-white">Manage Stories</h2>
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white"
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b dark:border-gray-700 text-gray-500 dark:text-gray-400">
              <th className="py-4 px-4 font-medium">Title</th>
              <th className="py-4 px-4 font-medium">Category</th>
              <th className="py-4 px-4 font-medium">Language</th>
              <th className="py-4 px-4 font-medium">Status</th>
              <th className="py-4 px-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map(i => (
              <tr key={i} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="py-4 px-4 dark:text-gray-200">The Magic Treehouse Part {i}</td>
                <td className="py-4 px-4">
                  <span className="bg-pastel-blue text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">Adventure</span>
                </td>
                <td className="py-4 px-4 dark:text-gray-300">English</td>
                <td className="py-4 px-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Published</span>
                </td>
                <td className="py-4 px-4 text-right">
                  <button className="text-blue-500 hover:underline mr-3 font-medium text-sm">Edit</button>
                  <button className="text-red-500 hover:underline font-medium text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
