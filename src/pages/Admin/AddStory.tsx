import React, { useState } from 'react';
import { Save, Image as ImageIcon } from 'lucide-react';

export default function AddStory() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Adventures',
    theme: 'Default',
    language: 'English',
    bannerUrl: '',
    thumbnailUrl: '',
    content: '',
    metaTitle: '',
    metaDesc: '',
    keywords: '',
    readingTime: '5 min'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving story...', formData);
    alert('Story saved successfully! (Simulated)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white">Add New Story</h2>
        <button type="submit" className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm">
          <Save size={20} /> Publish Story
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 dark:text-gray-200">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Story Title</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" placeholder="Enter story title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Slug (SEO Friendly URL)</label>
                <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" placeholder="e.g. the-magic-treehouse" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Story Content</label>
                <textarea required name="content" value={formData.content} onChange={handleChange} rows={15} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white font-story resize-y" placeholder="Write the story here..."></textarea>
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 dark:text-gray-200">Media</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Banner Image URL (1200x600)</label>
                <div className="flex gap-2">
                  <input type="url" name="bannerUrl" value={formData.bannerUrl} onChange={handleChange} className="flex-1 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" placeholder="https://..." />
                  {formData.bannerUrl && <img src={formData.bannerUrl} className="w-12 h-10 object-cover rounded-lg" alt="preview" />}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Thumbnail URL (600x400)</label>
                <div className="flex gap-2">
                  <input type="url" name="thumbnailUrl" value={formData.thumbnailUrl} onChange={handleChange} className="flex-1 px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" placeholder="https://..." />
                  {formData.thumbnailUrl && <img src={formData.thumbnailUrl} className="w-12 h-10 object-cover rounded-lg" alt="preview" />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings Area */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 dark:text-gray-200">Organization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white">
                  <option>Adventures</option>
                  <option>Moral Stories</option>
                  <option>Bedtime</option>
                  <option>Hindi Kahani</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Language</label>
                <select name="language" value={formData.language} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Theme</label>
                <select name="theme" value={formData.theme} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white">
                  <option>Default</option>
                  <option>Kids</option>
                  <option>Horror</option>
                  <option>Moral</option>
                  <option>Royal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reading Time</label>
                <input type="text" name="readingTime" value={formData.readingTime} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" placeholder="e.g. 5 min" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 dark:text-gray-200">SEO Tags</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Meta Title</label>
                <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Meta Description</label>
                <textarea rows={3} name="metaDesc" value={formData.metaDesc} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white resize-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Keywords</label>
                <input type="text" name="keywords" value={formData.keywords} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" placeholder="kids, story, fairy tale..." />
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  );
}
