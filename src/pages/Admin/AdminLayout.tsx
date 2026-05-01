import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookPlus, List, Settings, LogOut, PanelLeftClose } from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Fake logout for now
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Add Story', icon: BookPlus, path: '/admin/add-story' },
    { name: 'Manage Stories', icon: List, path: '/admin/stories' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col border-r border-gray-100 dark:border-gray-700">
        <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-gray-700">
          <span className="font-bold text-xl text-gray-800 dark:text-white">Admin Panel</span>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-pastel-blue text-blue-900 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <Icon size={20} className="mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <header className="h-16 bg-white dark:bg-gray-800 shadow-sm flex items-center px-8 border-b border-gray-100 dark:border-gray-700 justify-between">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {menuItems.find(m => m.path === location.pathname)?.name || 'Admin'}
            </h2>
            <Link to="/" className="text-sm font-medium text-pink-500 hover:text-pink-600 border px-3 py-1.5 rounded-lg border-pink-200 hover:bg-pink-50 transition-colors">
                View Site &rarr;
            </Link>
        </header>
        <div className="p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
