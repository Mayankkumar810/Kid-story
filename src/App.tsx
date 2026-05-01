import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import StoryPage from './pages/StoryPage';
import CategoryPage from './pages/CategoryPage';
import AdminLayout from './pages/Admin/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import AddStory from './pages/Admin/AddStory';
import ManageStories from './pages/Admin/ManageStories';
import Settings from './pages/Admin/Settings';
import Login from './pages/Admin/Login';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<CategoryPage />} />
            <Route path="story/:slug" element={<StoryPage />} />
            {/* Additional routes will be added here */}
          </Route>
          
          <Route path="/admin/login" element={<Login />} />
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-story" element={<AddStory />} />
            <Route path="stories" element={<ManageStories />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
