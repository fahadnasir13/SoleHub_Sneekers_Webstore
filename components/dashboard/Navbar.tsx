'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';

interface NavbarProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

export default function Navbar({ onToggleSidebar, sidebarCollapsed }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const notifications = [
    { id: 1, title: 'New project created', time: '2 min ago', type: 'success' },
    { id: 2, title: 'Invoice payment received', time: '1 hour ago', type: 'info' },
    { id: 3, title: 'Client approval pending', time: '3 hours ago', type: 'warning' },
    { id: 4, title: 'System maintenance scheduled', time: '1 day ago', type: 'error' }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' }
  ];

  return (
    <header className="h-16 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 shadow-sm">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
          >
            <i className="ri-menu-line text-xl text-gray-600 dark:text-gray-300"></i>
          </button>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="ri-search-line text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Search projects, clients, invoices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-96 pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
            />
            {searchQuery && (
              <div className="absolute top-12 left-0 right-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 max-h-64 overflow-y-auto z-50">
                <div className="p-3 text-sm text-gray-500 dark:text-gray-400">
                  Search results for "{searchQuery}"
                </div>
                <div className="border-t border-gray-200 dark:border-slate-700">
                  <div className="p-3 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer">
                    <div className="font-medium text-gray-900 dark:text-gray-100">Project Alpha</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Active project</div>
                  </div>
                  <div className="p-3 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer">
                    <div className="font-medium text-gray-900 dark:text-gray-100">Client: TechCorp</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Enterprise client</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLanguage(!showLanguage)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              <i className="ri-global-line text-xl text-gray-600 dark:text-gray-300"></i>
            </button>
            
            {showLanguage && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => setShowLanguage(false)}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span className="text-gray-900 dark:text-gray-100">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
          >
            <i className={`text-xl ${theme === 'dark' ? 'ri-sun-line text-yellow-500' : 'ri-moon-line text-gray-600'}`}></i>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200 relative"
            >
              <i className="ri-notification-3-line text-xl text-gray-600 dark:text-gray-300"></i>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer border-b border-gray-100 dark:border-slate-700 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'info' ? 'bg-blue-500' :
                          notification.type === 'warning' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-200 dark:border-slate-700">
                  <button className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg p-2 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">JD</span>
              </div>
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Admin</div>
              </div>
              <i className="ri-arrow-down-s-line text-gray-400"></i>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">john@example.com</div>
                </div>
                <div className="py-1">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200">
                    <i className="ri-user-line mr-2"></i>
                    View Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200">
                    <i className="ri-settings-line mr-2"></i>
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200">
                    <i className="ri-logout-circle-r-line mr-2"></i>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}