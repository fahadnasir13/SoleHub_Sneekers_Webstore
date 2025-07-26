'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const revenueAnalytics = [
  { month: 'Jan', revenue: 45000, profit: 12000, expenses: 33000 },
  { month: 'Feb', revenue: 52000, profit: 18000, expenses: 34000 },
  { month: 'Mar', revenue: 48000, profit: 15000, expenses: 33000 },
  { month: 'Apr', revenue: 61000, profit: 22000, expenses: 39000 },
  { month: 'May', revenue: 55000, profit: 19000, expenses: 36000 },
  { month: 'Jun', revenue: 67000, profit: 25000, expenses: 42000 },
  { month: 'Jul', revenue: 72000, profit: 28000, expenses: 44000 },
  { month: 'Aug', revenue: 69000, profit: 26000, expenses: 43000 },
  { month: 'Sep', revenue: 78000, profit: 32000, expenses: 46000 },
  { month: 'Oct', revenue: 84000, profit: 38000, expenses: 46000 },
  { month: 'Nov', revenue: 91000, profit: 42000, expenses: 49000 },
  { month: 'Dec', revenue: 95000, profit: 45000, expenses: 50000 }
];

const clientEngagement = [
  { month: 'Jan', sessions: 2400, pageviews: 4800, bounceRate: 45 },
  { month: 'Feb', sessions: 3200, pageviews: 6200, bounceRate: 42 },
  { month: 'Mar', sessions: 2800, pageviews: 5600, bounceRate: 38 },
  { month: 'Apr', sessions: 3800, pageviews: 7200, bounceRate: 35 },
  { month: 'May', sessions: 4200, pageviews: 8100, bounceRate: 32 },
  { month: 'Jun', sessions: 4800, pageviews: 9200, bounceRate: 29 }
];

const projectPerformance = [
  { name: 'Web Development', completed: 85, inProgress: 12, pending: 3 },
  { name: 'Mobile Apps', completed: 78, inProgress: 18, pending: 4 },
  { name: 'UI/UX Design', completed: 92, inProgress: 6, pending: 2 },
  { name: 'Marketing', completed: 71, inProgress: 24, pending: 5 },
  { name: 'Consulting', completed: 88, inProgress: 10, pending: 2 }
];

const trafficSources = [
  { name: 'Organic Search', value: 42, color: '#3b82f6' },
  { name: 'Direct', value: 28, color: '#10b981' },
  { name: 'Social Media', value: 18, color: '#f59e0b' },
  { name: 'Email', value: 8, color: '#ef4444' },
  { name: 'Referral', value: 4, color: '#8b5cf6' }
];

const conversionFunnel = [
  { stage: 'Visitors', value: 10000, color: '#3b82f6' },
  { stage: 'Leads', value: 3500, color: '#10b981' },
  { stage: 'Opportunities', value: 1200, color: '#f59e0b' },
  { stage: 'Customers', value: 320, color: '#ef4444' }
];

export default function AnalyticsContent() {
  const [selectedTab, setSelectedTab] = useState('revenue');
  const [dateRange, setDateRange] = useState('6m');
  const [selectedSegment, setSelectedSegment] = useState('all');

  const tabs = [
    { id: 'revenue', label: 'Revenue Analytics', icon: 'ri-money-dollar-circle-line' },
    { id: 'engagement', label: 'Client Engagement', icon: 'ri-user-heart-line' },
    { id: 'projects', label: 'Project Performance', icon: 'ri-bar-chart-box-line' },
    { id: 'traffic', label: 'Traffic Sources', icon: 'ri-global-line' },
    { id: 'conversion', label: 'Conversion Funnel', icon: 'ri-funnel-line' }
  ];

  const segments = [
    { value: 'all', label: 'All Segments' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'smb', label: 'Small Business' },
    { value: 'startup', label: 'Startups' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Comprehensive insights into your business performance</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Date Range Selector */}
          <div className="flex bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl p-1 shadow-lg border border-white/20 dark:border-slate-700/50">
            {['7d', '1m', '3m', '6m', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  dateRange === range
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Segment Filter */}
          <select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
          >
            {segments.map((segment) => (
              <option key={segment.value} value={segment.value}>
                {segment.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              <i className={`${tab.icon} text-lg`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {selectedTab === 'revenue' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-money-dollar-circle-line text-3xl opacity-80"></i>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-lg">+12.5%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">$847,532</h3>
                  <p className="text-green-100">Total Revenue</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-trending-up-line text-3xl opacity-80"></i>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-lg">+8.3%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">$312,450</h3>
                  <p className="text-blue-100">Total Profit</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-calculator-line text-3xl opacity-80"></i>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-lg">+5.2%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">$535,082</h3>
                  <p className="text-purple-100">Total Expenses</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue vs Profit Trend</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={revenueAnalytics}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
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
                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} fill="url(#colorRevenue)" />
                    <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} fill="url(#colorProfit)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {selectedTab === 'engagement' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-eye-line text-3xl opacity-80"></i>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-lg">+15.2%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">24,847</h3>
                  <p className="text-blue-100">Total Sessions</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-file-text-line text-3xl opacity-80"></i>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-lg">+22.1%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">47,832</h3>
                  <p className="text-green-100">Page Views</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <i className="ri-skip-back-line text-3xl opacity-80"></i>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-lg">-8.4%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">32.5%</h3>
                  <p className="text-orange-100">Bounce Rate</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Client Engagement Over Time</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={clientEngagement}>
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
                    <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={3} />
                    <Line type="monotone" dataKey="pageviews" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {selectedTab === 'projects' && (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Performance by Category</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={projectPerformance}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="name" className="text-gray-600 dark:text-gray-400" />
                    <YAxis className="text-gray-600 dark:text-gray-400" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="inProgress" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="pending" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {selectedTab === 'traffic' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={trafficSources}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {trafficSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Source Breakdown</h3>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: source.color }}></div>
                        <span className="font-medium text-gray-900 dark:text-white">{source.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{source.value}%</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {Math.round(source.value * 100)} visitors
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'conversion' && (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Conversion Funnel</h3>
                <div className="space-y-4">
                  {conversionFunnel.map((stage, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">{stage.stage}</span>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {stage.value.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-4">
                        <div 
                          className="h-4 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(stage.value / conversionFunnel[0].value) * 100}%`,
                            backgroundColor: stage.color
                          }}
                        ></div>
                      </div>
                      {index < conversionFunnel.length - 1 && (
                        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Conversion rate: {((stage.value / conversionFunnel[index].value) * 100).toFixed(1)}%
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}