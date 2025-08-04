'use client';

  import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import { useTheme } from 'next-themes';
  import { BarChart2, Calendar, LayoutDashboard, Mail, Settings, Users, X } from 'lucide-react';
  import { useEffect, useState } from 'react';

  export default function Sidebar({
    sidebarOpen,
    setSidebarOpen,
    isMobile,
  }: {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    isMobile: boolean;
  }) {
    const { theme, resolvedTheme } = useTheme();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const navItems = [
      { key: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', href: '/admindashboard' },
      { key: 'users', icon: Users, label: 'Users', href: '/admindashboard/users' },
      { key: 'trainers', icon: Users, label: 'Trainers', href: '/admindashboard/trainers' },
      { key: 'sessions', icon: Calendar, label: 'Sessions', href: '/admindashboard/sessions' },
      { key: 'reports', icon: BarChart2, label: 'Reports', href: '/admindashboard/reports' },
      { key: 'messages', icon: Mail, label: 'Messages', href: '/admindashboard/messages' },
      { key: 'settings', icon: Settings, label: 'Settings', href: '/admindashboard/settings' },
    ];

    if (!mounted) {
      return (
        <div
          className={`fixed md:relative z-20 w-64 h-full transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'left-0' : '-left-64'
          } bg-white border-gray-200`}
        >
          {/* Placeholder content to avoid mismatch */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-green-600">TrainersBD Admin</h1>
            <button className="md:hidden text-gray-500">
              <X size={20} />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`fixed md:relative z-20 w-64 h-full transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'left-0' : '-left-64'
        } ${resolvedTheme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-green-600 dark:text-green-400">TrainersBD Admin</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-4 space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.key} href={item.href}>
                <div
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300'
                      : 'text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20'
                  }`}
                >
                  <item.icon
                    size={18}
                    className={`${isActive ? 'text-green-600 dark:text-green-300' : 'text-gray-500 dark:text-gray-400'}`}
                  />
                  <span className="text-sm">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }