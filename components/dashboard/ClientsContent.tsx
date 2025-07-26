'use client';

import { useState } from 'react';

interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  status: 'active' | 'inactive' | 'pending';
  lastActivity: string;
  projects: number;
  revenue: number;
  avatar: string;
  joinDate: string;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@techcorp.com',
    company: 'TechCorp Industries',
    industry: 'Technology',
    status: 'active',
    lastActivity: '2 hours ago',
    projects: 5,
    revenue: 125000,
    avatar: 'JS',
    joinDate: '2023-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@creativestudio.com',
    company: 'Creative Studio',
    industry: 'Design',
    status: 'active',
    lastActivity: '1 day ago',
    projects: 3,
    revenue: 85000,
    avatar: 'SJ',
    joinDate: '2023-03-22'
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike@startupventure.com',
    company: 'Startup Venture',
    industry: 'Fintech',
    status: 'pending',
    lastActivity: '3 days ago',
    projects: 1,
    revenue: 45000,
    avatar: 'MC',
    joinDate: '2023-06-10'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@globalcorp.com',
    company: 'Global Corp',
    industry: 'Enterprise',
    status: 'active',
    lastActivity: '5 hours ago',
    projects: 8,
    revenue: 320000,
    avatar: 'ED',
    joinDate: '2022-11-08'
  },
  {
    id: '5',
    name: 'Alex Rodriguez',
    email: 'alex@innovatetech.com',
    company: 'Innovate Tech',
    industry: 'Technology',
    status: 'inactive',
    lastActivity: '2 weeks ago',
    projects: 2,
    revenue: 67000,
    avatar: 'AR',
    joinDate: '2023-04-18'
  }
];

export default function ClientsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [showAddClient, setShowAddClient] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    const matchesIndustry = industryFilter === 'all' || client.industry === industryFilter;
    
    return matchesSearch && matchesStatus && matchesIndustry;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const industries = ['all', 'Technology', 'Design', 'Fintech', 'Enterprise', 'Healthcare', 'E-commerce'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Clients</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your client relationships and track engagement</p>
        </div>
        
        <button
          onClick={() => setShowAddClient(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Add New Client
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Clients</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">247</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-group-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Clients</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">189</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <i className="ri-user-heart-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$847K</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Project Value</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$42K</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <i className="ri-bar-chart-line text-white text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
              />
            </div>
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white pr-8"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
          
          <select
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
            className="px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white pr-8"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry === 'all' ? 'All Industries' : industry}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-slate-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Industry
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Projects
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{client.avatar}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{client.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{client.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{client.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{client.industry}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {client.projects}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    ${client.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {client.lastActivity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedClient(client)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200">
                        <i className="ri-edit-line"></i>
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200">
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Client Modal */}
      {showAddClient && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add New Client</h2>
              <button
                onClick={() => setShowAddClient(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder="Enter client name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Industry
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white pr-8">
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="design">Design</option>
                  <option value="fintech">Fintech</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddClient(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Add Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Client Details Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-2xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Client Details</h2>
              <button
                onClick={() => setSelectedClient(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{selectedClient.avatar}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedClient.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedClient.email}</p>
                  <p className="text-gray-600 dark:text-gray-400">{selectedClient.company}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Industry</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedClient.industry}</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Status</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedClient.status)}`}>
                    {selectedClient.status}
                  </span>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedClient.projects}</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Revenue</h4>
                  <p className="text-gray-600 dark:text-gray-400">${selectedClient.revenue.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Join Date</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedClient.joinDate}</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Last Activity</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedClient.lastActivity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}