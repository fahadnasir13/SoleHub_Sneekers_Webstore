'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  isMobile: boolean;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'ri-home-4-line',
    href: '/dashboard'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'ri-bar-chart-2-line',
    href: '/dashboard/analytics'
  },
  {
    id: 'clients',
    label: 'Clients',
    icon: 'ri-group-line',
    href: '/dashboard/clients',
    badge: '24'
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'ri-folder-3-line',
    href: '/dashboard/projects',
    badge: '12'
  },
  {
    id: 'invoices',
    label: 'Invoices',
    icon: 'ri-file-text-line',
    href: '/dashboard/invoices'
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: 'ri-megaphone-line',
    href: '/dashboard/marketing'
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: 'ri-robot-line',
    href: '/dashboard/automation'
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: 'ri-plug-line',
    href: '/dashboard/integrations'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'ri-settings-3-line',
    href: '/dashboard/settings'
  },
  {
    id: 'support',
    label: 'Support',
    icon: 'ri-customer-service-line',
    href: '/dashboard/support'
  }
];

export default function Sidebar({ collapsed, onToggle, isMobile }: SidebarProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {isMobile && !collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      <div className={`
        fixed lg:relative h-full z-50 lg:z-auto
        ${collapsed ? 'w-16' : 'w-64'} 
        ${isMobile && collapsed ? '-translate-x-full' : 'translate-x-0'}
        transition-all duration-300 ease-in-out
      `}>
        <div className="h-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-r border-white/20 dark:border-slate-700/50 shadow-xl">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-white/20 dark:border-slate-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-dashboard-3-line text-white text-lg"></i>
              </div>
              {!collapsed && (
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SaaS Pro
                </span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 px-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link href={item.href}>
                    <div className={`
                      group flex items-center px-3 py-3 text-sm font-medium rounded-xl
                      transition-all duration-300 cursor-pointer
                      ${pathname === item.href 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 shadow-lg' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}>
                      <div className="flex items-center justify-center w-6 h-6">
                        <i className={`${item.icon} text-lg transition-transform duration-300 group-hover:scale-110`}></i>
                      </div>
                      
                      {!collapsed && (
                        <>
                          <span className="ml-3 flex-1 whitespace-nowrap">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="ml-auto bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </Link>

                  {/* Tooltip for collapsed state */}
                  {collapsed && hoveredItem === item.id && (
                    <div className="absolute left-16 top-0 ml-2 px-3 py-2 bg-gray-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
                      {item.label}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-slate-800 rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full flex items-center px-3 py-3 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-300 group">
              <div className="flex items-center justify-center w-6 h-6">
                <i className="ri-logout-circle-r-line text-lg transition-transform duration-300 group-hover:scale-110"></i>
              </div>
              {!collapsed && (
                <span className="ml-3">Logout</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}