'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LayoutDashboard, Users, Calendar, FileText, Settings, Mail, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Page = () => {
  const { theme, resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample data - replace with real data from your API
  const stats = [
    { title: 'Total Users', value: '1,248', change: '+12%', trend: 'up' },
    { title: 'Active Trainers', value: '86', change: '+5%', trend: 'up' },
    { title: 'Pending Requests', value: '24', change: '-3%', trend: 'down' },
    { title: 'Revenue', value: '$8,420', change: '+18%', trend: 'up' },
  ];

  const recentUsers = [
    { id: 1, name: 'Laila Naznin', email: 'laila@example.com', role: 'Trainer', joinDate: '2023-10-15' },
    { id: 2, name: 'Zia Uddin', email: 'zia@example.com', role: 'Trainer', joinDate: '2023-09-28' },
    { id: 3, name: 'John Smith', email: 'john@example.com', role: 'Admin', joinDate: '2023-11-02' },
    { id: 4, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'User', joinDate: '2023-11-10' },
  ];

  const upcomingSessions = [
    { id: 1, title: 'Leadership Workshop', trainer: 'Laila Naznin', date: '2023-11-20', time: '10:00 AM' },
    { id: 2, title: 'Digital Marketing', trainer: 'Zia Uddin', date: '2023-11-22', time: '2:00 PM' },
    { id: 3, title: 'Communication Skills', trainer: 'K M Hasan', date: '2023-11-25', time: '11:00 AM' },
  ];

  const recentActivity = [
    { id: 1, action: 'New user registration', description: 'John Doe registered as a new user', time: '2 hours ago' },
    { id: 2, action: 'Session scheduled', description: 'Leadership Workshop added by Laila', time: '4 hours ago' },
    { id: 3, action: 'Profile updated', description: 'Zia Uddin updated their profile', time: '6 hours ago' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!mounted) {
    return (
      <AdminLayout>
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-white">
            {/* Placeholder content to avoid mismatch */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-none shadow-sm bg-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <div className={`flex items-center text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.trend === 'up' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                          {stat.change}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className={`flex-1 overflow-y-auto p-4 md:p-6 space-y-6 ${resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {stat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        <div
                          className={`flex items-center text-sm ${
                            stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                          }`}
                        >
                          {stat.trend === 'up' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                          {stat.change}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Users and Upcoming Sessions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Users */}
                <Card className="border-none shadow-sm bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      Recent Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Join Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                  <span className="text-green-600 dark:text-green-300 text-sm font-medium">
                                    {user.name.charAt(0)}
                                  </span>
                                </div>
                                {user.name}
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-500 dark:text-gray-400">{user.email}</TableCell>
                            <TableCell>
                              <Badge
                                variant={user.role === 'Admin' ? 'default' : user.role === 'Trainer' ? 'secondary' : 'outline'}
                                className={
                                  user.role === 'Admin'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                                    : user.role === 'Trainer'
                                    ? 'bg-green-200 text-green-900 dark:bg-green-800/50 dark:text-green-200'
                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                }
                              >
                                {user.role}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-gray-500 dark:text-gray-400">{user.joinDate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                    >
                      View All Users
                    </Button>
                  </CardContent>
                </Card>

                {/* Upcoming Sessions */}
                <Card className="border-none shadow-sm bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      Upcoming Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Trainer</TableHead>
                          <TableHead>Date & Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upcomingSessions.map((session) => (
                          <TableRow key={session.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 mr-2">
                                  <Calendar className="w-4 h-4 text-green-500 dark:text-green-400" />
                                </div>
                                {session.title}
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-500 dark:text-gray-400">{session.trainer}</TableCell>
                            <TableCell className="text-gray-500 dark:text-gray-400">
                              {session.date} at {session.time}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                    >
                      View All Sessions
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="border-none shadow-sm bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                          <Users className="w-5 h-5 text-green-500 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">{activity.action}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.time}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                        >
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'users' && (
            <Card className="border-none shadow-sm bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Users Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell className="text-gray-500 dark:text-gray-400">{user.email}</TableCell>
                        <TableCell>
                          <Badge
                            variant={user.role === 'Admin' ? 'default' : user.role === 'Trainer' ? 'secondary' : 'outline'}
                            className={
                              user.role === 'Admin'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                                : user.role === 'Trainer'
                                ? 'bg-green-200 text-green-900 dark:bg-green-800/50 dark:text-green-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-500 dark:text-gray-400">{user.joinDate}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </AdminLayout>
  );
};

export default Page;