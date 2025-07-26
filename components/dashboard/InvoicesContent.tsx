'use client';

import { useState } from 'react';

interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  issueDate: string;
  dueDate: string;
  description: string;
  items: InvoiceItem[];
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

const invoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2024-001',
    client: 'TechCorp Industries',
    amount: 25000,
    status: 'paid',
    issueDate: '2024-01-15',
    dueDate: '2024-02-15',
    description: 'Web Development Services',
    items: [
      { id: '1', description: 'Frontend Development', quantity: 40, rate: 150, amount: 6000 },
      { id: '2', description: 'Backend Development', quantity: 60, rate: 180, amount: 10800 },
      { id: '3', description: 'UI/UX Design', quantity: 30, rate: 120, amount: 3600 },
      { id: '4', description: 'Testing & QA', quantity: 25, rate: 100, amount: 2500 },
      { id: '5', description: 'Project Management', quantity: 20, rate: 110, amount: 2200 }
    ]
  },
  {
    id: '2',
    invoiceNumber: 'INV-2024-002',
    client: 'Creative Studio',
    amount: 18500,
    status: 'sent',
    issueDate: '2024-01-20',
    dueDate: '2024-02-20',
    description: 'Mobile App Development',
    items: [
      { id: '1', description: 'iOS Development', quantity: 50, rate: 160, amount: 8000 },
      { id: '2', description: 'Android Development', quantity: 45, rate: 160, amount: 7200 },
      { id: '3', description: 'App Design', quantity: 25, rate: 130, amount: 3250 }
    ]
  },
  {
    id: '3',
    invoiceNumber: 'INV-2024-003',
    client: 'Global Corp',
    amount: 32000,
    status: 'overdue',
    issueDate: '2024-01-10',
    dueDate: '2024-01-25',
    description: 'Marketing Campaign',
    items: [
      { id: '1', description: 'Digital Marketing Strategy', quantity: 20, rate: 200, amount: 4000 },
      { id: '2', description: 'Content Creation', quantity: 40, rate: 150, amount: 6000 },
      { id: '3', description: 'Ad Campaign Management', quantity: 60, rate: 180, amount: 10800 },
      { id: '4', description: 'Analytics & Reporting', quantity: 30, rate: 140, amount: 4200 },
      { id: '5', description: 'Social Media Management', quantity: 50, rate: 140, amount: 7000 }
    ]
  },
  {
    id: '4',
    invoiceNumber: 'INV-2024-004',
    client: 'Startup Venture',
    amount: 15000,
    status: 'draft',
    issueDate: '2024-01-25',
    dueDate: '2024-02-25',
    description: 'Analytics Dashboard',
    items: [
      { id: '1', description: 'Dashboard Development', quantity: 35, rate: 170, amount: 5950 },
      { id: '2', description: 'Data Integration', quantity: 25, rate: 190, amount: 4750 },
      { id: '3', description: 'Custom Analytics', quantity: 30, rate: 150, amount: 4500 }
    ]
  }
];

export default function InvoicesContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'sent': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'paid': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'cancelled': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft': return 'ri-draft-line';
      case 'sent': return 'ri-send-plane-line';
      case 'paid': return 'ri-check-line';
      case 'overdue': return 'ri-alarm-warning-line';
      case 'cancelled': return 'ri-close-circle-line';
      default: return 'ri-file-line';
    }
  };

  const totalAmount = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const paidAmount = filteredInvoices.filter(i => i.status === 'paid').reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = filteredInvoices.filter(i => i.status === 'sent').reduce((sum, invoice) => sum + invoice.amount, 0);
  const overdueAmount = filteredInvoices.filter(i => i.status === 'overdue').reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Invoices</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your billing and track payments</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-slate-700/50 whitespace-nowrap">
            <i className="ri-download-line mr-2"></i>
            Export
          </button>
          
          <button
            onClick={() => setShowCreateInvoice(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-add-line mr-2"></i>
            Create Invoice
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">${totalAmount.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Paid</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">${paidAmount.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <i className="ri-check-double-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">${pendingAmount.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <i className="ri-time-line text-white text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Overdue</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">${overdueAmount.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <i className="ri-alarm-warning-line text-white text-xl"></i>
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
                placeholder="Search invoices..."
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
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-slate-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Issue Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <i className={`${getStatusIcon(invoice.status)} text-white text-lg`}></i>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{invoice.invoiceNumber}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{invoice.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{invoice.client}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">${invoice.amount.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      <i className={`${getStatusIcon(invoice.status)} mr-1`}></i>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(invoice.issueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(invoice.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedInvoice(invoice)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200">
                        <i className="ri-edit-line"></i>
                      </button>
                      <button className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200">
                        <i className="ri-download-line"></i>
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

      {/* Create Invoice Modal */}
      {showCreateInvoice && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-4xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create New Invoice</h2>
              <button
                onClick={() => setShowCreateInvoice(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="INV-2024-001"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Client
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Enter client name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  rows={3}
                  placeholder="Enter invoice description"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Invoice Items
                </label>
                <div className="space-y-3">
                  <div className="grid grid-cols-12 gap-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
                    <div className="col-span-5">Description</div>
                    <div className="col-span-2">Quantity</div>
                    <div className="col-span-2">Rate</div>
                    <div className="col-span-2">Amount</div>
                    <div className="col-span-1">Action</div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-5">
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                        placeholder="Item description"
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                        placeholder="1"
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                        placeholder="100"
                      />
                    </div>
                    <div className="col-span-2">
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                        placeholder="100"
                        disabled
                      />
                    </div>
                    <div className="col-span-1">
                      <button
                        type="button"
                        className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <i className="ri-delete-bin-line text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
                
                <button
                  type="button"
                  className="mt-3 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  <i className="ri-add-line mr-1"></i>
                  Add Item
                </button>
              </div>
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-slate-600">
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    Total: $0.00
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowCreateInvoice(false)}
                    className="px-6 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Create Invoice
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Invoice Details Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 w-full max-w-4xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Invoice Details</h2>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-8">
              {/* Invoice Header */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Invoice Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Invoice Number:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{selectedInvoice.invoiceNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Client:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{selectedInvoice.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Issue Date:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {new Date(selectedInvoice.issueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {new Date(selectedInvoice.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedInvoice.status)}`}>
                        <i className={`${getStatusIcon(selectedInvoice.status)} mr-1`}></i>
                        {selectedInvoice.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Amount:</span>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${selectedInvoice.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Invoice Items */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Invoice Items</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-slate-600">
                        <th className="text-left py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Description</th>
                        <th className="text-right py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Quantity</th>
                        <th className="text-right py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Rate</th>
                        <th className="text-right py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoice.items.map((item, index) => (
                        <tr key={item.id} className="border-b border-gray-100 dark:border-slate-700">
                          <td className="py-3 text-gray-900 dark:text-white">{item.description}</td>
                          <td className="py-3 text-right text-gray-900 dark:text-white">{item.quantity}</td>
                          <td className="py-3 text-right text-gray-900 dark:text-white">${item.rate}</td>
                          <td className="py-3 text-right text-gray-900 dark:text-white">${item.amount.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-gray-200 dark:border-slate-600">
                        <td className="py-3 text-lg font-bold text-gray-900 dark:text-white" colSpan={3}>Total:</td>
                        <td className="py-3 text-right text-lg font-bold text-gray-900 dark:text-white">
                          ${selectedInvoice.amount.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-slate-600">
                <button className="px-6 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200">
                  <i className="ri-download-line mr-2"></i>
                  Download PDF
                </button>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  <i className="ri-send-plane-line mr-2"></i>
                  Send Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}