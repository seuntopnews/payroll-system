
import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Download, 
  ChevronRight, 
  Building2, 
  Banknote, 
  Wallet,
  Zap,
  Activity,
  X,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

const Payroll = () => {
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1); // 1: Review, 2: Send, 3: Success

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 3000);
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Payroll Engine</h1>
          <p className="text-gray-500 font-medium">Lagos HQ • October 2023 Cycle</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 bg-white border-2 border-gray-100 text-gray-700 rounded-xl text-sm font-black hover:border-brand-200 shadow-sm transition-all">
            Full History
          </button>
          <button 
            onClick={() => setShowApprovalModal(true)}
            className="px-6 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-black hover:bg-brand-700 shadow-xl shadow-brand-200 flex items-center gap-2 transition-all active:scale-95"
          >
            <Zap size={18} className="fill-current" />
            Process Cycle
          </button>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Activity size={120} />
        </div>
        <div className="flex items-center justify-between relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-xl shadow-green-100 transition-transform hover:scale-110">
              <CheckCircle size={24} />
            </div>
            <span className="text-xs font-black text-green-600 uppercase tracking-widest">Data Sync</span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-xl shadow-green-100 transition-transform hover:scale-110">
              <CheckCircle size={24} />
            </div>
            <span className="text-xs font-black text-green-600 uppercase tracking-widest">Tax Compute</span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-2xl shadow-brand-200 animate-pulse ring-8 ring-brand-50">
              <Clock size={24} />
            </div>
            <span className="text-xs font-black text-brand-600 uppercase tracking-widest">Approval</span>
          </div>

           <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-gray-300">
              <span className="text-xl font-black">4</span>
            </div>
            <span className="text-xs font-black text-gray-300 uppercase tracking-widest">Payout</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                <Banknote size={24} className="text-brand-600"/>
                Financial Summary
              </h3>
              <span className="px-4 py-1.5 bg-brand-600 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] shadow-lg shadow-brand-200">Processing</span>
            </div>
            
            <div className="p-8 grid grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-brand-200 transition-all">
                <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Cycle Total Gross</p>
                <p className="text-4xl font-black text-gray-900 tracking-tighter">₦12.42M</p>
              </div>
              <div className="p-8 bg-brand-600 rounded-3xl text-white shadow-2xl shadow-brand-100 transition-all hover:scale-[1.02]">
                <p className="text-xs font-black text-brand-100 uppercase tracking-[0.2em] mb-2">Net Disbursement</p>
                <p className="text-4xl font-black tracking-tighter">₦10.24M</p>
              </div>
            </div>

            <div className="px-8 pb-8">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Nigeria Statutory Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-2xl transition-colors border-2 border-transparent hover:border-gray-100">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Lagos State PAYE Tax</span>
                  <span className="font-black text-gray-900 text-lg">₦1,240,400</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-2xl transition-colors border-2 border-transparent hover:border-gray-100">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Pension Remittance (18% Total)</span>
                  <span className="font-black text-gray-900 text-lg">₦850,000</span>
                </div>
                 <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-2xl transition-colors border-2 border-transparent hover:border-gray-100">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">NHF (National Housing)</span>
                  <span className="font-black text-gray-900 text-lg">₦45,000</span>
                </div>
                 <div className="flex justify-between items-center p-4 bg-red-50/50 rounded-2xl border-2 border-transparent hover:border-red-100 group">
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wider flex items-center gap-2">
                    <Wallet size={16} />
                    Salary Loan Repayments
                  </span>
                  <span className="font-black text-red-700 text-lg group-hover:scale-105 transition-transform">-₦59,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-100 text-white relative overflow-hidden group">
            <div className="relative z-10 flex gap-6 items-center">
              <div className="p-4 bg-white/20 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-xl font-black mb-1">Smart Compliance Assurance</h4>
                <p className="text-blue-100 text-sm font-medium leading-relaxed">
                  Hotjobs Smart Engine has verified all <strong>56 employee bank details</strong> via NIBSS. BVN mismatch protection is active.
                </p>
              </div>
            </div>
            <Zap className="absolute -right-8 -bottom-8 text-white opacity-5 w-40 h-40 group-hover:rotate-12 transition-transform duration-700" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Disbursement Protocol</h3>
            <div className="space-y-4">
               <label className="flex items-center gap-4 p-5 border-2 border-brand-600 bg-brand-50 rounded-2xl cursor-pointer shadow-lg shadow-brand-50 transition-all">
                 <input type="radio" name="payment" checked readOnly className="w-5 h-5 text-brand-600 focus:ring-brand-500" />
                 <div className="flex-1">
                   <span className="block text-sm font-black text-gray-900 uppercase tracking-widest">NIP Transfer (NIBSS)</span>
                   <span className="text-xs text-brand-600 font-bold">Instant via Paystack API</span>
                 </div>
                 <Building2 size={24} className="text-brand-600" />
               </label>
               <label className="flex items-center gap-4 p-5 border-2 border-gray-100 rounded-2xl cursor-not-allowed opacity-50 grayscale">
                 <input type="radio" name="payment" disabled className="w-5 h-5 text-gray-400" />
                 <div className="flex-1">
                   <span className="block text-sm font-black text-gray-400 uppercase tracking-widest">International SWIFT</span>
                   <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Coming Q4</span>
                 </div>
               </label>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Statutory Schedules</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 border-2 border-gray-50 bg-gray-50/50 rounded-2xl text-sm font-black text-gray-700 hover:border-brand-200 hover:bg-white transition-all group">
                <span className="uppercase tracking-widest text-[10px]">FIRS Tax Schedule</span>
                <Download size={18} className="text-gray-400 group-hover:text-brand-600 group-hover:scale-110 transition-all" />
              </button>
               <button className="w-full flex items-center justify-between p-4 border-2 border-gray-50 bg-gray-50/50 rounded-2xl text-sm font-black text-gray-700 hover:border-brand-200 hover:bg-white transition-all group">
                <span className="uppercase tracking-widest text-[10px]">Pension RSA Report</span>
                <Download size={18} className="text-gray-400 group-hover:text-brand-600 group-hover:scale-110 transition-all" />
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-8 text-white group overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="font-black text-2xl mb-1 tracking-tighter">Director Approval</h3>
              <p className="text-xs font-bold text-gray-400 mb-8 uppercase tracking-[0.2em]">Pending disbursement authority</p>
              
              <div className="flex items-center gap-3 mb-10">
                 <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-sm font-black shadow-xl shadow-brand-900/50">JD</div>
                 <div className="h-0.5 flex-1 bg-gray-800"></div>
                 <div className="w-12 h-12 rounded-2xl bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-sm font-black text-gray-600">FD</div>
              </div>

              <button 
                onClick={() => setShowApprovalModal(true)}
                className="w-full py-5 bg-brand-600 hover:bg-brand-500 rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-900/50 active:scale-95"
              >
                Launch Final Approval
              </button>
            </div>
            <Activity className="absolute -right-8 -bottom-8 text-white opacity-5 w-40 h-40 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </div>

      {/* Final Disbursement Modal */}
      {showApprovalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-6 animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {step === 3 ? (
              <div className="p-12 text-center flex flex-col items-center">
                 <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 animate-bounce">
                   <CheckCircle size={48} />
                 </div>
                 <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Disbursement Successful!</h2>
                 <p className="text-gray-500 font-medium mb-8">₦10.24M processed via NIP transfer to 56 employees. Payslips have been sent to their portals.</p>
                 <button 
                  onClick={() => setShowApprovalModal(false)}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all"
                 >
                   Back to Dashboard
                 </button>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                   <h3 className="text-xl font-black text-gray-900 tracking-tight">Authorize Disbursement</h3>
                   <button onClick={() => setShowApprovalModal(false)} className="p-2 hover:bg-gray-200 rounded-xl transition-colors">
                     <X size={24} className="text-gray-400" />
                   </button>
                </div>
                <div className="p-8 space-y-6">
                  <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
                    <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-1">Final Amount</p>
                    <p className="text-4xl font-black text-brand-700">₦10,245,600</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Verification Status</p>
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle size={18} className="text-green-500" /> 56 Accounts Validated (NIP)
                    </div>
                     <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle size={18} className="text-green-500" /> PAYE Schedules Generated
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
                   <button 
                    onClick={handleProcess}
                    disabled={isProcessing}
                    className="w-full py-4 bg-brand-600 text-white rounded-2xl font-black text-lg hover:bg-brand-700 shadow-xl shadow-brand-100 transition-all flex items-center justify-center gap-3"
                   >
                     {isProcessing ? (
                       <>
                        <Activity size={20} className="animate-spin" />
                        Initiating Transfers...
                       </>
                     ) : (
                       <>
                        <Zap size={20} className="fill-current" />
                        Release Funds (NIP)
                       </>
                     )}
                   </button>
                   <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">Secure transaction via Hotjobs Gateway</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Payroll;
