import React from 'react';
import { Users, BookOpen, Eye, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Total Stories', value: '124', icon: BookOpen, color: 'bg-pastel-blue text-blue-700' },
    { name: 'Total Views', value: '45.2k', icon: Eye, color: 'bg-pastel-green text-green-700' },
    { name: 'Active Readers', value: '8,402', icon: Users, color: 'bg-pastel-purple text-purple-700' },
    { name: 'Growth', value: '+12%', icon: TrendingUp, color: 'bg-pastel-yellow text-yellow-700' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.name}</p>
                <p className="text-3xl font-bold dark:text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 dark:text-white">Recent Activities</h3>
            <div className="space-y-4">
                {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b dark:border-gray-700 last:border-0 border-gray-50">
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <BookOpen size={18} className="text-gray-500" />
                        </div>
                        <div>
                            <p className="text-sm font-medium dark:text-gray-200">New story published: "The Golden Bird"</p>
                            <p className="text-xs text-gray-500">{i} hours ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 dark:text-white">Quick Actions</h3>
            <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-pink-50 text-gray-700 dark:text-gray-200 font-medium transition-colors">Write New Story</button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-pink-50 text-gray-700 dark:text-gray-200 font-medium transition-colors">Manage Categories</button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-pink-50 text-gray-700 dark:text-gray-200 font-medium transition-colors">View Analytics</button>
            </div>
        </div>
      </div>
    </div>
  );
}
