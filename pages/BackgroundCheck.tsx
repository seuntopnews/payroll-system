
import React, { useState } from 'react';
import { ShieldCheck, Search, Filter, Plus, Download, CheckCircle, XCircle, Clock, AlertTriangle, FileText, User, ChevronRight } from 'lucide-react';

interface VerificationRequest {
  id: string;
  candidateName: string;
  candidateRole: string;
  checks: string[]; // e.g., ['NIN', 'BVN', 'Criminal']
  status: 'Verified' | 'Pending' | 'Failed' | 'In Progress';
  dateRequested: string;
  riskScore: 'Low' | 'Medium' | 'High';
}

const MOCK_REQUESTS: VerificationRequest[] = [
  {
    id: 'VER-001',
    candidateName: 'David Olaoluwa',
    candidateRole: 'Senior Frontend Engineer',
    checks: ['NIN', 'BVN', 'Guarantor'],
    status: 'Verified',
    dateRequested: '2023-10-24',
    riskScore: 'Low'
  },
  {
    id: 'VER-002',
    candidateName: 'Sarah Mensah',
    candidateRole: 'Product Manager',
    checks: ['BVN', 'Criminal Record'],
    status: 'In Progress',
    dateRequested: '2023-10-25',
    riskScore: 'Low'
  },
  {
    id: 'VER-003',
    candidateName: 'Emmanuel Kalu',
    candidateRole: 'Sales Executive',
    checks: ['Academic', 'Guarantor'],
    status: 'Failed',
    dateRequested: '2023-10-22',
    riskScore: 'High'
  },
  {
    id: 'VER-004',
    candidateName: 'Chinedu Eze',
    candidateRole: 'DevOps Engineer',
    checks: ['NIN', 'Previous Employer'],
    status: 'Pending',
    dateRequested: '2023-10-26',
    riskScore: 'Medium'
  }
];

const BackgroundCheck = () => {
  const [requests, setRequests] = useState<VerificationRequest[]>(MOCK_REQUESTS);
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified': return 'bg-green-100 text-green-700 border-green-200';
      case 'Failed': return 'bg-red-100 text-red-700 border-red-200';
      case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'Low': return <span className="flex items-center gap-1 text-xs font-medium text-green-600"><ShieldCheck size={12} /> Low Risk</span>;
      case 'Medium': return <span className="flex items-center gap-1 text-xs font-medium text-yellow-600"><AlertTriangle size={12} /> Medium Risk</span>;
      case 'High': return <span className="flex items-center gap-1 text-xs font-bold text-red-600"><AlertTriangle size={12} /> High Risk</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <ShieldCheck className="text-brand-600" />
            Background Verification
          </h1>
          <p className="text-sm text-gray-500">Manage identity checks, criminal records, and guarantor verification.</p>
        </div>
        <button 
          onClick={() => setShowNewRequestModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm transition-colors"
        >
          <Plus size={16} />
          New Request
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">Total Checks</span>
            <div className="p-2 bg-gray-50 rounded-lg text-gray-600"><FileText size={18} /></div>
          </div>
          <p className="text-2xl font-bold text-gray-900">142</p>
          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <CheckCircle size={10} /> 12 completed this week
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">Verified Clean</span>
            <div className="p-2 bg-green-50 rounded-lg text-green-600"><CheckCircle size={18} /></div>
          </div>
          <p className="text-2xl font-bold text-gray-900">128</p>
          <p className="text-xs text-gray-400 mt-1">90% pass rate</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">Issues Found</span>
            <div className="p-2 bg-red-50 rounded-lg text-red-600"><AlertTriangle size={18} /></div>
          </div>
          <p className="text-2xl font-bold text-gray-900">4</p>
          <p className="text-xs text-red-600 mt-1 font-medium">Action Required</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">In Progress</span>
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Clock size={18} /></div>
          </div>
          <p className="text-2xl font-bold text-gray-900">10</p>
          <p className="text-xs text-blue-600 mt-1">Est. completion: 2 days</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by candidate name or ID..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Download size={16} />
              Export Report
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Request ID</th>
                <th className="px-6 py-4 font-medium">Candidate</th>
                <th className="px-6 py-4 font-medium">Checks Included</th>
                <th className="px-6 py-4 font-medium">Risk Assessment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {req.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                        {req.candidateName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{req.candidateName}</p>
                        <p className="text-xs text-gray-500">{req.candidateRole}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {req.checks.map((check, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">
                          {check}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getRiskBadge(req.riskScore)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(req.status)}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {req.dateRequested}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-brand-600 transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Request Modal (Mock) */}
      {showNewRequestModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-900">Initiate New Verification</h3>
              <button onClick={() => setShowNewRequestModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle size={20} />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Candidate Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500" placeholder="Enter full name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Checks</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" className="text-brand-600 rounded focus:ring-brand-500" defaultChecked />
                    <div>
                      <span className="block text-sm font-medium text-gray-900">Identity Verification</span>
                      <span className="text-xs text-gray-500">NIN, BVN, and Voters Card check</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" className="text-brand-600 rounded focus:ring-brand-500" />
                    <div>
                      <span className="block text-sm font-medium text-gray-900">Criminal Record</span>
                      <span className="text-xs text-gray-500">Police clearance and court records</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" className="text-brand-600 rounded focus:ring-brand-500" />
                    <div>
                      <span className="block text-sm font-medium text-gray-900">Guarantor Check</span>
                      <span className="text-xs text-gray-500">Verify guarantor details and address</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button onClick={() => setShowNewRequestModal(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
              <button onClick={() => setShowNewRequestModal(false)} className="px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg">Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundCheck;