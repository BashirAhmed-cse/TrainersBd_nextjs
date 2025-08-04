'use client';

  import { useState, useEffect } from 'react';
  import Sidebar from './shared/Sidebar';
  import Navbar from './shared/Navbar';
  import { useTheme } from 'next-themes';
  import { usePathname } from 'next/navigation';
  import { Toaster } from '@/components/ui/sonner';
  import LoadingOverlay from '../../app/loading';

  export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const { theme, resolvedTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    // Close sidebar on mobile when route changes
    useEffect(() => {
      if (isMobile) {
        setSidebarOpen(false);
      }
    }, [pathname, isMobile]);

    // Check for mobile view
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-close sidebar on mobile
    useEffect(() => {
      if (isMobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    }, [isMobile]);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    if (!mounted) {
      return (
        <div className="flex h-screen bg-white">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isMobile={isMobile} />
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            {loading && <LoadingOverlay />}
            <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-200 bg-white">
              {children}
            </main>
            <Toaster />
          </div>
          {isMobile && sidebarOpen && (
            <div className="fixed inset-0 bg-green-900/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
          )}
        </div>
      );
    }

    return (
      <div
        className={`flex h-screen ${
          resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      >
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isMobile={isMobile} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Navbar */}
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          {/* Loading Overlay */}
          {loading && <LoadingOverlay />}

          {/* Main Content Area */}
          <main
            className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-200 ${
              resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
            }`}
          >
            {children}
          </main>

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              className: resolvedTheme === 'dark' ? 'bg-gray-800 text-white border-green-400' : 'bg-white text-gray-900 border-green-500',
              style: {
                borderWidth: '1px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              },
            }}
          />
        </div>

        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-green-900/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    );
  }