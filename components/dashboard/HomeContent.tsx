'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 12000, users: 2400 },
  { month: 'Feb', revenue: 18000, users: 1398 },
  { month: 'Mar', revenue: 25000, users: 9800 },
  { month: 'Apr', revenue: 22000, users: 3908 },
  { month: 'May', revenue: 35000, users: 4800 },
  { month: 'Jun', revenue: 42000, users: 3800 },
  { month: 'Jul', revenue: 48000, users: 4300 }
];

const weeklyData = [
  { day: 'Mon', users: 120 },
  { day: 'Tue', users: 150 },
  { day: 'Wed', users: 180 },
  { day: 'Thu', users: 130 },
  { day: 'Fri', users: 200 },
  { day: 'Sat', users: 90 },
  { day: 'Sun', users: 110 }
];

const segmentData = [
  { name: 'Enterprise', value: 40, color: '#3b82f6' },
  { name: 'SMB', value: 30, color: '#10b981' },
  { name: 'Startups', value: 20, color: '#f59e0b' },
  { name: 'Individual', value: 10, color: '#ef4444' }
];

export default function HomeContent() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  const summaryCards = [
    {
      title: 'Revenue This Month',
      value: '$48,532',
      change: '+12.5%',
      changeType: 'positive',
      icon: 'ri-money-dollar-circle-line',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Active Users',
      value: '12,847',
      change: '+8.2%',
      changeType: 'positive',
      icon: 'ri-user-line',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Tasks Due Today',
      value: '24',
      change: '-2.4%',
      changeType: 'negative',
      icon: 'ri-task-line',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Open Support Tickets',
      value: '8',
      change: '+5.1%',
      changeType: 'positive',
      icon: 'ri-customer-service-line',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const quickActions = [
    { title: 'Create Project', icon: 'ri-add-circle-line', color: 'bg-blue-500' },
    { title: 'Add New Client', icon: 'ri-user-add-line', color: 'bg-green-500' },
    { title: 'Generate Invoice', icon: 'ri-file-text-line', color: 'bg-purple-500' },
    { title: 'Schedule Meeting', icon: 'ri-calendar-line', color: 'bg-orange-500' }
  ];

  const notifications = [
    { id: 1, type: 'success', message: 'Project "Alpha" completed successfully', time: '2 min ago' },
    { id: 2, type: 'info', message: 'New client "TechCorp" added to system', time: '1 hour ago' },
    { id: 3, type: 'warning', message: 'Invoice #1234 payment is overdue', time: '3 hours ago' },
    { id: 4, type: 'info', message: 'System backup completed', time: '1 day ago' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Abstract%20geometric%20pattern%20background%20modern%20minimalist%20design%20futuristic%20technology%20texture%20contemporary%20digital%20art%20clean%20lines%20professional%20presentation&width=800&height=200&seq=welcome_bg&orientation=landscape')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
          <p className="text-xl opacity-90 mb-6">Here's what's happening with your business today</p>
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Today's Revenue: $2,847</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Active Projects: 12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <i className={`${card.icon} text-white text-xl`}></i>
              </div>
              <div className={`text-sm font-medium ${
                card.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {card.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{card.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${action.icon} text-white text-lg`}></i>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Revenue Trend</h2>
            <div className="flex space-x-2">
              <button className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedTimeRange === '7d' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
              }`} onClick={() => setSelectedTimeRange('7d')}>
                7D
              </button>
              <button className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedTimeRange === '1m' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
              }`} onClick={() => setSelectedTimeRange('1m')}>
                1M
              </button>
              <button className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedTimeRange === '3m' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
              }`} onClick={() => setSelectedTimeRange('3m')}>
                3M
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fill="url(#colorRevenue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly User Growth */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Weekly User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="users" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Segmentation */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">User Segmentation</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {segmentData.map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: segment.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{segment.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{segment.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insight */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=AI%20artificial%20intelligence%20brain%20neural%20network%20abstract%20digital%20technology%20futuristic%20pattern%20background%20modern%20minimalist%20design%20contemporary&width=400&height=300&seq=ai_insight&orientation=landscape')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <i className="ri-robot-line text-2xl"></i>
              <h2 className="text-xl font-semibold">AI Insight</h2>
            </div>
            <p className="text-lg font-medium mb-4">Revenue Optimization Tip</p>
            <p className="text-sm opacity-90 mb-6">
              Based on your recent performance, consider focusing on enterprise clients. 
              They show 40% higher retention rates and 3x average revenue per user.
            </p>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>

        {/* Notifications Feed */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  notification.type === 'success' ? 'bg-green-500' :
                  notification.type === 'info' ? 'bg-blue-500' :
                  notification.type === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}