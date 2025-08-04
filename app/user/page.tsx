'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  Home,
  BookOpen,
  Calendar,
  MessageSquare,
  Settings,
  Bell,
  ChevronDown,
  User,
  BarChart2,
  Award,
  Clock,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Page = () => {
  const { theme, resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample data
  const upcomingSessions = [
    { id: 1, title: 'Leadership Workshop', trainer: 'Laila Naznin', date: '2023-11-20', time: '10:00 AM', duration: '2 hours' },
    { id: 2, title: 'Communication Skills', trainer: 'K M Hasan', date: '2023-11-22', time: '2:00 PM', duration: '1.5 hours' },
  ];

  const completedSessions = [
    { id: 1, title: 'Digital Marketing', trainer: 'Zia Uddin', date: '2023-11-15', rating: 4.5 },
    { id: 2, title: 'Project Management', trainer: 'Innovation Talks', date: '2023-11-10', rating: 4.8 },
  ];

  const achievements = [
    { id: 1, title: '5 Sessions Completed', icon: <BookOpen className="w-5 h-5" />, date: '2023-11-15' },
    { id: 2, title: 'Leadership Path', icon: <Award className="w-5 h-5" />, date: '2023-11-01' },
  ];

  // Responsive sidebar handling
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div
          className={`fixed md:relative z-20 w-64 h-full transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'left-0' : '-left-64'
          } bg-white border-gray-200`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-green-600">TrainersBD</h1>
            <button className="md:hidden text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <div className="mb-8">
              <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
              <button className="mr-4 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-500 rounded-full">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-green-600" />
                </div>
                <span className="hidden md:inline text-sm font-medium">John Doe</span>
                <ChevronDown className="hidden md:inline w-4 h-4 text-gray-400" />
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="space-y-6">
              <div className="rounded-xl p-6 bg-white shadow">
                <h1 className="text-2xl font-bold mb-2 text-gray-900">Welcome back, John!</h1>
                <p className="text-gray-600">You have {upcomingSessions.length} upcoming sessions this week. Keep up the great work!</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">Explore New Courses</Button>
              </div>
            </div>
          </main>
        </div>

        {isMobile && sidebarOpen && (
          <div className="fixed inset-0 bg-green-900/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}
      </div>
    );
  }

  return (
    <div className={`flex h-screen ${resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div
        className={`fixed md:relative z-20 w-64 h-full transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'left-0' : '-left-64'
        } ${resolvedTheme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-green-600 dark:text-green-400">TrainersBD</h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="mb-8">
            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <User className="w-5 h-5 text-green-600 dark:text-green-300" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Premium Member</p>
              </div>
            </div>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    pathname === '/dashboard'
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300'
                      : 'text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20'
                  }`}
                >
                  <Home className="w-5 h-5 mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/courses"
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    pathname.includes('/dashboard/courses')
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300'
                      : 'text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20'
                  }`}
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  My Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/schedule"
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    pathname.includes('/dashboard/schedule')
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300'
                      : 'text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20'
                  }`}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/messages"
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    pathname.includes('/dashboard/messages')
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300'
                      : 'text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20'
                  }`}
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Messages
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/progress"
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    pathname.includes('/dashboard/progress')
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300'
                      : 'text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20'
                  }`}
                >
                  <BarChart2 className="w-5 h-5 mr-3" />
                  My Progress
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    pathname.includes('/dashboard/settings')
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300'
                      : 'text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20'
                  }`}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/help"
            className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-green-900/20 transition-colors"
          >
            <HelpCircle className="w-5 h-5 mr-3" />
            Help Center
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header
          className={`flex items-center justify-between p-4 border-b ${
            resolvedTheme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
          }`}
        >
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-4 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {pathname === '/dashboard'
                ? 'Dashboard'
                : pathname.includes('/courses')
                ? 'My Courses'
                : pathname.includes('/schedule')
                ? 'Schedule'
                : pathname.includes('/messages')
                ? 'Messages'
                : pathname.includes('/progress')
                ? 'My Progress'
                : pathname.includes('/settings')
                ? 'Settings'
                : 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="relative p-2 text-gray-500 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              <Bell className="w-5 h-5 text-green-500 dark:text-green-300" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <User className="w-4 h-4 text-green-600 dark:text-green-300" />
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-900 dark:text-white">John Doe</span>
              <ChevronDown className="hidden md:inline w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className={`flex-1 overflow-y-auto p-4 md:p-6 ${resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
          {pathname === '/dashboard' && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <div
                className={`rounded-xl p-6 ${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow`}
              >
                <h1 className={`text-2xl font-bold mb-2 ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Welcome back, John!
                </h1>
                <p className={`${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  You have {upcomingSessions.length} upcoming sessions this week. Keep up the great work!
                </p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">Explore New Courses</Button>
              </div>

              {/* Upcoming Sessions */}
              <div className={`rounded-xl shadow ${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div
                  className={`p-5 border-b ${resolvedTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <h3 className={`font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Upcoming Sessions
                  </h3>
                </div>
                <div className="p-5">
                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingSessions.map((session) => (
                        <div
                          key={session.id}
                          className={`p-4 rounded-lg ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}
                        >
                          <div className="flex items-start">
                            <div
                              className={`p-3 rounded-lg mr-4 ${
                                resolvedTheme === 'dark' ? 'bg-gray-600' : 'bg-green-100'
                              }`}
                            >
                              <Calendar className="w-5 h-5 text-green-500 dark:text-green-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {session.title}
                              </h4>
                              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                With {session.trainer}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className={`font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {session.date}
                              </p>
                              <div className="flex items-center justify-end">
                                <Clock className="w-4 h-4 mr-1 text-gray-400" />
                                <span
                                  className={`text-sm ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                                >
                                  {session.time} • {session.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-3 space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                            >
                              Reschedule
                            </Button>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Join Session
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`text-center py-8 ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      <p>No upcoming sessions scheduled</p>
                      <Button
                        className="mt-4"
                        variant="outline"
                        className="border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                      >
                        Browse Courses
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Completed Sessions */}
                <div className={`rounded-xl shadow ${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                  <div
                    className={`p-5 border-b ${resolvedTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                  >
                    <h3 className={`font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Completed Sessions
                    </h3>
                  </div>
                  <div className="p-5">
                    {completedSessions.length > 0 ? (
                      <div className="space-y-4">
                        {completedSessions.map((session) => (
                          <div key={session.id} className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full ${
                                resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-green-100'
                              } flex items-center justify-center mr-3`}
                            >
                              <BookOpen className="w-5 h-5 text-green-500 dark:text-green-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {session.title}
                              </h4>
                              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                With {session.trainer} • {session.date}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm">{session.rating}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`text-center py-8 ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        <p>No completed sessions yet</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div className={`rounded-xl shadow ${resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                  <div
                    className={`p-5 border-b ${resolvedTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                  >
                    <h3 className={`font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Your Achievements
                    </h3>
                  </div>
                  <div className="p-5">
                    {achievements.length > 0 ? (
                      <div className="space-y-4">
                        {achievements.map((achievement) => (
                          <div key={achievement.id} className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full ${
                                resolvedTheme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'
                              } flex items-center justify-center mr-3`}
                            >
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-medium ${resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {achievement.title}
                              </h4>
                              <p className={`text-sm ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                Achieved on {achievement.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`text-center py-8 ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        <p>No achievements yet</p>
                        <Button
                          className="mt-4"
                          variant="outline"
                          className="border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                        >
                          View Learning Paths
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
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
};

export default Page;