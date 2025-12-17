
import React from 'react';
import { Download, FileText, Wallet, ChevronRight, Plus } from 'lucide-react';

const PAYSLIPS = [
  { month: 'October 2023', amount: '₦850,000', status: 'Paid' },
  { month: 'September 2023', amount: '₦850,000', status: 'Paid' },
  { month: 'August 2023', amount: '₦850,000', status: 'Paid' },
];

const Finance = () => {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Finance</h1>
        <p className="text-sm text-gray-500">Access payslips, loans, and tax documents.</p>
      </div>

      {/* Loans Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
           <div>
             <h2 className="text-lg font-bold flex items-center gap-2">
               <Wallet className="text-brand-400" /> Loan Balance
             </h2>
             <p className="text-gray-400 text-sm">Active Salary Advance</p>
           </div>
           <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
             <Plus size={16} /> Request New Loan
           </button>
        </div>
        
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold">₦150,000</span>
          <span className="text-sm text-gray-400 mb-2">remaining of ₦200,000</span>
        </div>
        
        <div className="w-full bg-gray-700 h-2 rounded-full mt-4 mb-2">
          <div className="bg-brand-500 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>Paid: ₦50,000</span>
          <span>Next Deduction: ₦50,000 (Nov 25)</span>
        </div>
      </div>

      {/* Payroll History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Payslip History</h3>
          <button className="text-sm text-brand-600 font-medium hover:underline">Download Tax Certificate (P.A.Y.E)</button>
        </div>
        <div className="divide-y divide-gray-100">
          {PAYSLIPS.map((slip, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-lg text-gray-600">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{slip.month}</p>
                  <p className="text-xs text-gray-500">Net Pay: {slip.amount}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{slip.status}</span>
                <button className="text-gray-400 hover:text-brand-600">
                  <Download size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-100 text-center">
          <button className="text-sm text-gray-500 font-medium hover:text-gray-900">View Older Payslips</button>
        </div>
      </div>
    </div>
  );
};

export default Finance;