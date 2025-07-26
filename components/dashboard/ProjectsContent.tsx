'use client';

import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  deadline: string;
  budget: number;
  spent: number;
  team: string[];
  category: string;
  description: string;
  createdAt: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    client: 'TechCorp Industries',
    status: 'in-progress',
    priority: 'high',
    progress: 75,
    deadline: '2024-02-15',
    budget: 85000,
    spent: 63750,
    team: ['John', 'Sarah', 'Mike'],
    category: 'Web Development',
    description: 'Complete redesign of the e-commerce platform with modern UI/UX',
    createdAt: '2024-01-05'
  },
  {
    id: '2',
    name: 'Mobile App Development',
    client: 'Creative Studio',
    status: 'planning',
    priority: 'medium',
    progress: 25,
    deadline: '2024-03-30',
    budget: 120000,
    spent: 30000,
    team: ['Alex', 'Emma'],
    category: 'Mobile Development',
    description: 'Cross-platform mobile application for creative professionals',
    createdAt: '2024-01-12'
  },
  {
    id: '3',
    name: 'Marketing Campaign',
    client: 'Global Corp',
    status: 'review',
    priority: 'urgent',
    progress: 90,
    deadline: '2024-01-25',
    budget: 45000,
    spent: 40500,
    team: ['Lisa', 'Tom'],
    category: 'Marketing',
    description: 'Q1 digital marketing campaign across multiple channels',
    createdAt: '2023-12-20'
  },
  {
    id: '4',
    name: 'Data Analytics Dashboard',
    client: 'Startup Venture',
    status: 'completed',
    priority: 'medium',
    progress: 100,
    deadline: '2024-01-10',
    budget: 65000,
    spent: 62000,
    team: ['David', 'Amy'],
    category: 'Analytics',
    description: 'Custom analytics dashboard for business intelligence',
    createdAt: '2023-11-15'
  },
  {
    id: '5',
    name: 'UI/UX Design System',
    client: 'Design Agency',
    status: 'on-hold',
    priority: 'low',
    progress: 40,
    deadline: '2024-04-15',
    budget: 32000,
    spent: 12800,
    team: ['Nina', 'Sam'],
    category: 'Design',
    description: 'Comprehensive design system and component library',
    createdAt: '2023-12-01'
  }
];

export default function ProjectsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || project.priority === priorityFilter;
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'review': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'on-hold': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'urgent': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const categories = ['all', 'Web Development', 'Mobile Development', 'Marketing', 'Analytics', 'Design'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Track and manage all your projects in one place</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* View Mode Toggle */}
          <div className="flex bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl p-1 shadow-lg border border-white/20 dark:border-slate-700/50">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <i className="ri-grid-line"></i>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <i className="ri-list-check"></i>
            </button>
          </div>

          <button
            onClick={() => setShowCreateProject(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-add-line mr-2"></i>
            New Project
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Projects</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">124</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-folder-3-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">In Progress</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">32</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <i className="ri-time-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">78</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <i className="ri-check-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Budget</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$2.4M</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-white text-xl"></i>
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
                placeholder="Search projects..."
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
            <option value="planning">Planning</option>
            <option value="in-progress">In Progress</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
          
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white pr-8"
          >
            <option value="all">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white pr-8"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.client}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600 dark:text-gray-400">
                  Budget: ${project.budget.toLocaleString()}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Due: {new Date(project.deadline).toLocaleDateString()}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800"
                    >
                      <span className="text-white font-medium text-xs">
                        {member.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </span>
                    </div>
                  ))}
                  {project.team.length > 3 && (
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                      <span className="text-white font-medium text-xs">+{project.team.length - 3}</span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{project.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{project.category}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{project.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                        {project.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 dark:bg-slate-600 rounded-full h-2 mr-2">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-900 dark:text-white">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      ${project.budget.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {new Date(project.deadline).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setSelectedProject(project)}
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
      )}

      {/* Create Project Modal */}
      {showCreateProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-2xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create New Project</h2>
              <button
                onClick={() => setShowCreateProject(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Enter project name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Client
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Enter client name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white pr-8">
                    <option value="">Select category</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="analytics">Analytics</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Priority
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white pr-8">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Budget
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Enter budget"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  rows={3}
                  placeholder="Enter project description"
                ></textarea>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateProject(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-4xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Project Details</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{selectedProject.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <i className="ri-building-line text-gray-400"></i>
                      <span className="text-gray-600 dark:text-gray-400">Client:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-folder-line text-gray-400"></i>
                      <span className="text-gray-600 dark:text-gray-400">Category:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{selectedProject.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-calendar-line text-gray-400"></i>
                      <span className="text-gray-600 dark:text-gray-400">Deadline:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {new Date(selectedProject.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPriorityColor(selectedProject.priority)}`}>
                      {selectedProject.priority}
                    </span>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedProject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(selectedProject.progress)}`}
                        style={{ width: `${selectedProject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-slate-600 pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Description</h4>
                <p className="text-gray-600 dark:text-gray-400">{selectedProject.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Budget Overview</h4>
                  <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Total Budget</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        ${selectedProject.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Spent</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        ${selectedProject.spent.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Remaining</span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        ${(selectedProject.budget - selectedProject.spent).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Team Members</h4>
                  <div className="space-y-2">
                    {selectedProject.team.map((member, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">
                            {member.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </span>
                        </div>
                        <span className="text-gray-900 dark:text-white">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}