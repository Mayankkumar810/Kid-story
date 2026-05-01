import React from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully! (Simulated)');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8 pb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white">Site Settings</h2>
        <button type="submit" className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm">
          <Save size={20} /> Save Changes
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold dark:text-gray-200 border-b dark:border-gray-700 pb-3">Homepage Settings</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hero Image URL</label>
          <input type="url" defaultValue="https://images.unsplash.com/photo-1512820790803..." className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold dark:text-gray-200 border-b dark:border-gray-700 pb-3">Social Media Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">YouTube Channel URL</label>
            <input type="url" placeholder="https://youtube.com/..." className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Instagram Profile URL</label>
            <input type="url" placeholder="https://instagram.com/..." className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Facebook Page URL</label>
            <input type="url" placeholder="https://facebook.com/..." className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telegram Group URL</label>
            <input type="url" placeholder="https://t.me/..." className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold dark:text-gray-200 border-b dark:border-gray-700 pb-3">AdSense Configuration</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Header Ad Code</label>
          <textarea rows={3} placeholder="<script>...</script>" className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:font-mono text-sm dark:text-white resize-none"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">In-Content Ad Code</label>
          <textarea rows={3} placeholder="<script>...</script>" className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:font-mono text-sm dark:text-white resize-none"></textarea>
        </div>
      </div>
    </form>
  );
}
