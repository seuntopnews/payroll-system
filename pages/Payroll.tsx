
import React from 'react';
import { CheckCircle, Clock, AlertTriangle, Download, ChevronRight, Building2, Banknote, Wallet } from 'lucide-react';

const Payroll = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payroll Center</h1>
          <p className="text-sm text-gray-500">Manage cycles, approve payments, and handle compliance.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
            Payroll History
          </button>
          <button className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 flex items-center gap-2">
            <Banknote size={16} />
            Process October Cycle
          </button>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <CheckCircle size={20} />
            </div>
            <span className="text-xs font-bold text-green-600">Data Sync</span>
            <span className="text-[10px] text-gray-400 absolute top-14 w-24 text-center">Attendance & Loans synced</span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <CheckCircle size={20} />
            </div>
            <span className="text-xs font-bold text-green-600">Calculations</span>
             <span className="text-[10px] text-gray-400 absolute top-14 w-24 text-center">Tax & Deductions computed</span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-lg ring-4 ring-brand-50 animate-pulse">
              <Clock size={20} />
            </div>
            <span className="text-xs font-bold text-brand-700">Approvals</span>
             <span className="text-[10px] text-brand-600 absolute top-14 w-24 text-center">Pending Finance Director</span>
          </div>

           <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 border-2 border-white">
              <span className="text-sm font-bold">4</span>
            </div>
            <span className="text-xs font-medium text-gray-400">Disbursement</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Detailed Breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Banknote size={18} className="text-gray-400"/>
                October Payroll Breakdown
              </h3>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full uppercase tracking-wide">Pending Approval</span>
            </div>
            
            <div className="p-6 grid grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Total Gross Pay</p>
                <p className="text-2xl font-bold text-gray-900">₦12,400,000</p>
              </div>
              <div className="p-4 bg-brand-50 rounded-lg border border-brand-100">
                <p className="text-xs text-brand-600 uppercase font-semibold mb-1">Net Payable</p>
                <p className="text-2xl font-bold text-brand-700">₦10,245,600</p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Deductions Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded">
                  <span className="text-gray-600">PAYE Tax (Lagos State)</span>
                  <span className="font-medium text-gray-900">₦1,200,400</span>
                </div>
                <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded">
                  <span className="text-gray-600">Pension (Employee 8%)</span>
                  <span className="font-medium text-gray-900">₦850,000</span>
                </div>
                 <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded">
                  <span className="text-gray-600">NHF (2.5%)</span>
                  <span className="font-medium text-gray-900">₦45,000</span>
                </div>
                 <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Wallet size={14} className="text-gray-400" />
                    Loan Repayments
                  </span>
                  <span className="font-medium text-red-600">-₦59,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Anomalies / AI Insights */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <AlertTriangle size={100} />
             </div>
            <div className="flex gap-4 relative z-10">
              <div className="p-3 bg-blue-100 rounded-lg h-fit">
                <AlertTriangle size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-sm">Gemini AI Detected Anomalies</h4>
                <p className="text-sm text-blue-700 mt-2 leading-relaxed">
                  The system flagged <strong>3 employees</strong> with salary variances > 10% compared to last month:
                </p>
                <ul className="mt-3 space-y-1">
                    <li className="text-xs font-medium text-blue-800 bg-blue-100/50 px-2 py-1 rounded w-fit">• John Doe (Unexpected Overtime: +24hrs)</li>
                    <li className="text-xs font-medium text-blue-800 bg-blue-100/50 px-2 py-1 rounded w-fit">• Sarah Smith (Performance Bonus applied manually)</li>
                </ul>
                <div className="mt-4 flex gap-3">
                   <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded font-medium hover:bg-blue-700">Review Anomalies</button>
                   <button className="text-xs text-blue-700 hover:underline">Ignore & Proceed</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Payment Method Selector */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Disbursement Method</h3>
            <div className="space-y-3">
               <label className="flex items-center gap-3 p-3 border border-brand-200 bg-brand-50 rounded-lg cursor-pointer">
                 <input type="radio" name="payment" checked readOnly className="text-brand-600 focus:ring-brand-500" />
                 <div className="flex-1">
                   <span className="block text-sm font-bold text-gray-900">Paystack</span>
                   <span className="text-xs text-gray-500">Direct Bank Transfer (NIP)</span>
                 </div>
                 <Building2 size={18} className="text-brand-600" />
               </label>
               <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer opacity-60">
                 <input type="radio" name="payment" disabled className="text-gray-400" />
                 <div className="flex-1">
                   <span className="block text-sm font-bold text-gray-900">Flutterwave</span>
                   <span className="text-xs text-gray-500">Coming soon</span>
                 </div>
               </label>
            </div>
          </div>

          {/* Compliance Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Statutory Remittance</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <span>Download Tax Schedule</span>
                <Download size={16} className="text-gray-400" />
              </button>
               <button className="w-full flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <span>Download Pension Schedule</span>
                <Download size={16} className="text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl shadow-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-1">Approvals</h3>
            <p className="text-sm text-gray-400 mb-6">2 approvals required before disbursement.</p>
            
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">JD</div>
               <div className="h-0.5 flex-1 bg-gray-700"></div>
               <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-500 flex items-center justify-center text-xs font-bold text-gray-400">FD</div>
            </div>

            <button className="w-full py-3 bg-brand-600 hover:bg-brand-500 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-brand-900/50">
              Send for Approval
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;