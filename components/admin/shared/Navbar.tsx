'use client';

  import { Aperture, Bell, ChevronDown, Menu } from 'lucide-react';
  import { useTheme } from 'next-themes';
import Link from 'next/link';
  import { useEffect, useState } from 'react';

  export default function Navbar({ toggleSidebar, sidebarOpen }: { toggleSidebar: () => void; sidebarOpen: boolean }) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return (
        <header
          className={`flex items-center justify-between p-4 border-b transition-all duration-300 border-gray-200 bg-white ${
            sidebarOpen ? 'md:pl-64' : 'md:pl-16'
          } pl-4`}
        >
          <div className="flex items-center">
            <button className="mr-4 text-gray-500 md:hidden">
              <Menu size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 rounded-full">
              <Aperture size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="relative p-2 text-gray-500 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm font-medium">AD</span>
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-900">Admin User</span>
              <ChevronDown size={16} className="hidden md:inline text-gray-400" />
            </div>
          </div>
        </header>
      );
    }

    return (
      <header
        className={`flex items-center justify-between p-4 border-b transition-all duration-300 ${
          resolvedTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        } ${sidebarOpen ? 'md:pl-64' : 'md:pl-16'} pl-4`}
      >
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-4 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300 transition-colors md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
          <button className="relative p-2 text-gray-500 rounded-ful cursor-pointer">
              <Aperture size={20} className="text-green-500 dark:text-green-300" />
            </button>
            </Link>
          <button
            className="relative p-2 text-gray-500 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
          >
            <Bell size={20} className="text-green-500 dark:text-green-300" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-300 text-sm font-medium">AD</span>
            </div>
            <span className="hidden md:inline text-sm font-medium text-gray-900 dark:text-white">Admin User</span>
            <ChevronDown size={16} className="hidden md:inline text-gray-400" />
          </div>
        </div>
      </header>
    );
  }