
import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Upload, UserPlus, Download, FileText, ChevronDown, AlertCircle, X, CheckCircle2 } from 'lucide-react';
import { Employee, EmployeeStatus } from '../types';

const MOCK_EMPLOYEES: Employee[] = [
  {
    id: 'EMP001',
    fullName: 'Ade Olaoluwa',
    email: 'ade.o@hotjobs.com',
    role: 'Senior Developer',
    department: 'Engineering',
    status: EmployeeStatus.Active,
    salary: 850000,
    currency: 'NGN',
    joinDate: '2023-01-15',
    avatarUrl: 'https://picsum.photos/id/64/100/100',
    compliance: { taxId: 'T12345', pensionId: 'PEN889' }
  },
  {
    id: 'EMP002',
    fullName: 'Chioma Nwafor',
    email: 'chioma.n@hotjobs.com',
    role: 'Product Manager',
    department: 'Product',
    status: EmployeeStatus.Active,
    salary: 920000,
    currency: 'NGN',
    joinDate: '2022-11-01',
    avatarUrl: 'https://picsum.photos/id/65/100/100',
    compliance: { taxId: 'T12346', pensionId: 'PEN890' }
  },
  {
    id: 'EMP003',
    fullName: 'Emeka Okafor',
    email: 'emeka.o@hotjobs.com',
    role: 'Sales Exec',
    department: 'Sales',
    status: EmployeeStatus.OnLeave,
    salary: 450000,
    currency: 'NGN',
    joinDate: '2023-06-10',
    avatarUrl: 'https://picsum.photos/id/91/100/100',
    compliance: { taxId: 'T12347', pensionId: 'PEN891' }
  },
  {
    id: 'EMP004',
    fullName: 'Yusuf Ibrahim',
    email: 'yusuf.i@hotjobs.com',
    role: 'Junior Analyst',
    department: 'Finance',
    status: EmployeeStatus.Onboarding,
    salary: 300000,
    currency: 'NGN',
    joinDate: '2023-10-20',
    avatarUrl: 'https://picsum.photos/id/92/100/100',
    compliance: { }
  }
];

const Employees = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'onboarding'>('all');
  const [employees, setEmployees] = useState<Employee[]>(MOCK_EMPLOYEES);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', role: '', department: 'Engineering' });

  // Function to handle status changes
  const handleStatusChange = (employeeId: string, newStatus: string) => {
    setEmployees(prev => prev.map(emp => 
      emp.id === employeeId ? { ...emp, status: newStatus as EmployeeStatus } : emp
    ));
  };

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmp: Employee = {
      id: `EMP00${employees.length + 1}`,
      fullName: formData.fullName,
      email: formData.email,
      role: formData.role,
      department: formData.department,
      status: EmployeeStatus.Onboarding,
      salary: 0,
      currency: 'NGN',
      joinDate: new Date().toISOString().split('T')[0],
      avatarUrl: `https://i.pravatar.cc/150?u=${formData.email}`,
      compliance: {}
    };
    setEmployees([...employees, newEmp]);
    setIsAddModalOpen(false);
    setFormData({ fullName: '', email: '', role: '', department: 'Engineering' });
  };

  const filteredEmployees = activeTab === 'all' 
    ? employees.filter(e => e.status !== EmployeeStatus.Onboarding)
    : employees.filter(e => e.status === EmployeeStatus.Onboarding);

  const getStatusColor = (status: EmployeeStatus) => {
    switch (status) {
      case EmployeeStatus.Active: return 'bg-green-100 text-green-800 border-green-200';
      case EmployeeStatus.OnLeave: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case EmployeeStatus.Terminated: return 'bg-red-100 text-red-800 border-red-200';
      case EmployeeStatus.Onboarding: return 'bg-brand-100 text-brand-800 border-brand-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your workforce, digital files, and compliance.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
            <Upload size={16} />
            Bulk Import
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
            <Download size={16} />
            Export
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm"
          >
            <Plus size={16} />
            Add Employee
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'all'
                ? 'border-brand-500 text-brand-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Employees
            <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">{employees.filter(e => e.status !== EmployeeStatus.Onboarding).length}</span>
          </button>
          <button
            onClick={() => setActiveTab('onboarding')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
              activeTab === 'onboarding'
                ? 'border-brand-500 text-brand-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <UserPlus size={16} />
            Onboarding
            <span className="bg-brand-100 text-brand-600 py-0.5 px-2 rounded-full text-xs">{employees.filter(e => e.status === EmployeeStatus.Onboarding).length}</span>
          </button>
        </nav>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
            <Filter size={16} />
            Filter
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Employee</th>
                <th className="px-6 py-4 font-medium">Role & Dept</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Compensation</th>
                <th className="px-6 py-4 font-medium">Compliance IDs</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={emp.avatarUrl} alt="" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{emp.fullName}</p>
                        <p className="text-xs text-gray-500">{emp.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{emp.role}</p>
                    <p className="text-xs text-gray-500">{emp.department}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative inline-block group">
                      <select
                        value={emp.status}
                        onChange={(e) => handleStatusChange(emp.id, e.target.value)}
                        className={`appearance-none cursor-pointer pl-3 pr-8 py-1 rounded-full text-xs font-bold border focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-500 transition-all ${getStatusColor(emp.status)}`}
                      >
                        {Object.values(EmployeeStatus).map((status) => (
                          <option key={status} value={status} className="bg-white text-gray-900">
                            {status}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-current opacity-60 group-hover:opacity-100 transition-opacity">
                        <ChevronDown size={12} />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">{emp.currency}</span> {emp.salary.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">Monthly Gross</div>
                  </td>
                  <td className="px-6 py-4">
                    {emp.compliance.taxId ? (
                       <div className="flex flex-col gap-1">
                         <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 w-fit">TIN: {emp.compliance.taxId}</span>
                         {emp.compliance.pensionId && <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 w-fit">RSA: {emp.compliance.pensionId}</span>}
                       </div>
                    ) : (
                      <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle size={12} /> Missing Info
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredEmployees.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <FileText className="w-12 h-12 text-gray-300 mb-2" />
                      <p className="text-sm font-medium">No employees found in this category.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Employee Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-6 animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
             <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-2xl font-black text-gray-900">Add New Staff</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-xl transition-colors">
                  <X size={24} className="text-gray-400" />
                </button>
             </div>
             <form onSubmit={handleAddEmployee} className="p-8 space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Legal Name</label>
                  <input type="text" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-bold" placeholder="Femi Ola" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-bold" placeholder="f.ola@company.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Role</label>
                    <input type="text" required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-bold text-sm" placeholder="Designer" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Dept</label>
                    <select value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-bold text-sm appearance-none">
                       <option>Engineering</option>
                       <option>Marketing</option>
                       <option>Sales</option>
                       <option>Finance</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl transition-all active:scale-95 mt-4">
                   Send Onboarding Invite
                </button>
             </form>
          </div>
        </div>
      )}
      
      {/* AI Insight for Employees */}
      {activeTab === 'all' && (
        <div className="bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <UserPlus size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Attrition Risk Detected</h4>
              <p className="text-xs text-white/90">Gemini AI predicts 2 employees in "Sales" are at risk of leaving based on recent activity patterns.</p>
            </div>
          </div>
          <button className="bg-white text-brand-600 px-3 py-1.5 rounded text-xs font-bold hover:bg-brand-50 transition-colors">
            View Analysis
          </button>
        </div>
      )}
    </div>
  );
};

export default Employees;
