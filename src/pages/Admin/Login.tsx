import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login
    console.log('Logging in with', email);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl p-8 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Admin Login</h1>
          <p className="text-gray-500 dark:text-gray-400">Sign in to manage StoryKids</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white"
                placeholder="admin@storykids.com"
              />
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-pink-500 outline-none transition-all dark:text-white"
                placeholder="••••••••"
              />
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-2xl transition-all hover:scale-[1.02] shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">&larr; <a href="/" className="hover:text-pink-500 transition-colors">Back to Website</a></p>
        </div>
      </div>
    </div>
  );
}
