'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { ThemeProvider } from './ThemeProvider';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-all duration-300">
        <div className="flex h-screen overflow-hidden">
          <Sidebar 
            collapsed={sidebarCollapsed} 
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            isMobile={isMobile}
          />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar 
              onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
              sidebarCollapsed={sidebarCollapsed}
            />
            
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <div className="container mx-auto px-6 py-8 max-w-7xl">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}