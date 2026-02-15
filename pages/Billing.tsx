
import React, { useState } from 'react';
import { 
  CreditCard, 
  Check, 
  ArrowUpRight, 
  Download, 
  Zap, 
  ShieldCheck, 
  Clock,
  History,
  TrendingUp,
  X,
  Lock,
  Activity
} from 'lucide-react';

const Billing = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const currentPlan = {
    name: 'Growth',
    price: '35,000',
    status: 'Active',
    nextBilling: 'Nov 24, 2023',
    usage: 42,
    limit: 50
  };

  const plans = [
    { id: 'starter', name: 'Starter', price: '0', features: ['Up to 5 Staff', 'Digital Payslips', 'NIN/BVN Verifier'] },
    { id: 'growth', name: 'Growth', price: '35,000', features: ['Up to 50 Staff', 'Recruitment Sync', 'FIRS/LIRS Tax Filing', 'Smart Compliance AI'] },
    { id: 'pro', name: 'Professional', price: '45,000', features: ['Up to 100 Staff', 'Everything in Growth', 'Priority Support', 'Custom Reports'] }
  ];

  const handleUpgrade = (plan: any) => {
    setSelectedPlan(plan);
    setShowCheckout(true);
  };

  const processPayment = () => {
    setIsProcessing(true);
    // Simulate Paystack processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setShowCheckout(false);
        setPaymentSuccess(false);
      }, 2000);
    }, 2500);
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Billing & Plans</h1>
          <p className="text-gray-500 font-medium">Manage your subscription and organization's economy.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-2.5 bg-white border-2 border-gray-100 text-gray-700 rounded-xl text-sm font-black hover:border-brand-600 transition-all flex items-center gap-2">
             <Download size={18} /> Tax Receipts
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Plan Overview */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-brand-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-brand-200">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">
                    Current Package
                  </div>
                  <h2 className="text-5xl font-black tracking-tighter mb-2">{currentPlan.name} Plan</h2>
                  <p className="text-brand-100 font-medium">Next billing date: <span className="text-white font-bold">{currentPlan.nextBilling}</span></p>
               </div>
               <div className="text-right">
                  <p className="text-xs font-black text-brand-200 uppercase tracking-widest mb-1">Monthly Subscription</p>
                  <p className="text-4xl font-black tracking-tighter">₦{currentPlan.price}</p>
               </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-sm font-bold text-brand-100 uppercase tracking-widest">Employee Quota</span>
                     <span className="text-sm font-black">{currentPlan.usage} / {currentPlan.limit} Used</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                     <div className="bg-white h-full transition-all duration-1000" style={{ width: `${(currentPlan.usage/currentPlan.limit)*100}%` }}></div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl border border-white/10">
                    <TrendingUp size={24} />
                  </div>
                  <p className="text-xs font-medium text-brand-50 leading-relaxed">
                    You've utilized <strong className="text-white">84%</strong> of your growth capacity. Consider scaling up soon.
                  </p>
               </div>
            </div>
            <Zap className="absolute -right-10 -bottom-10 text-white opacity-5 w-64 h-64" />
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
               <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                 <History size={24} className="text-brand-600"/>
                 Payment History
               </h3>
               <button className="text-xs font-black text-brand-600 hover:underline uppercase tracking-widest">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="bg-gray-50/50 border-b border-gray-100">
                    <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                       <th className="px-8 py-4">Reference</th>
                       <th className="px-8 py-4">Plan / Description</th>
                       <th className="px-8 py-4">Amount</th>
                       <th className="px-8 py-4">Status</th>
                       <th className="px-8 py-4 text-right">Receipt</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                    {[
                      { ref: 'T742X9', desc: 'Growth Plan - Oct', amt: '₦35,000', status: 'Successful', date: 'Oct 24, 2023' },
                      { ref: 'T120A4', desc: 'Growth Plan - Sep', amt: '₦35,000', status: 'Successful', date: 'Sep 24, 2023' },
                      { ref: 'T994B1', desc: 'Verification Bundle (x10)', amt: '₦10,000', status: 'Successful', date: 'Sep 10, 2023' },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-gray-50 transition-all">
                        <td className="px-8 py-5 text-xs font-black text-gray-400">#{row.ref}</td>
                        <td className="px-8 py-5">
                           <p className="text-sm font-bold text-gray-900">{row.desc}</p>
                           <p className="text-[10px] font-medium text-gray-400">{row.date}</p>
                        </td>
                        <td className="px-8 py-5 font-black text-gray-900">{row.amt}</td>
                        <td className="px-8 py-5">
                           <span className="px-3 py-1 bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-widest rounded-lg border border-green-200">
                             {row.status}
                           </span>
                        </td>
                        <td className="px-8 py-5 text-right">
                           <button className="p-2 text-gray-400 hover:text-brand-600 transition-colors">
                              <Download size={18} />
                           </button>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Change Plans / Upgrade */}
        <div className="space-y-6">
           <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest ml-4">Available Upgrades</h3>
           {plans.map(plan => (
             <div key={plan.id} className={`p-8 rounded-[2.5rem] bg-white border-2 transition-all group ${plan.name === currentPlan.name ? 'border-brand-600' : 'border-gray-100 hover:border-brand-200'}`}>
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h4 className="text-xl font-black text-gray-900">{plan.name}</h4>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                        {plan.id === 'pro' ? 'Recommended for Enterprise' : 'Best for startups'}
                      </p>
                   </div>
                   {plan.name === currentPlan.name && <Check className="text-brand-600" size={24} />}
                </div>
                <div className="mb-8">
                   <span className="text-3xl font-black text-gray-900 tracking-tighter">₦{plan.price}</span>
                   <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                   {plan.features.slice(0, 3).map((f, i) => (
                     <li key={i} className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                        <Check className="text-brand-500" size={14} /> {f}
                     </li>
                   ))}
                </ul>
                <button 
                  onClick={() => handleUpgrade(plan)}
                  disabled={plan.name === currentPlan.name}
                  className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                    plan.name === currentPlan.name 
                      ? 'bg-gray-100 text-gray-400 cursor-default' 
                      : 'bg-gray-900 text-white hover:bg-black shadow-xl active:scale-95'
                  }`}
                >
                  {plan.name === currentPlan.name ? 'Active Plan' : 'Select Plan'}
                </button>
             </div>
           ))}
        </div>
      </div>

      {/* Checkout Modal (Simulated Paystack Flow) */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/40 backdrop-blur-xl animate-in fade-in">
           <div className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              {paymentSuccess ? (
                <div className="p-12 text-center animate-in zoom-in">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck size={40} />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 mb-2">Payment Successful</h3>
                   <p className="text-sm font-medium text-gray-500">Your plan has been upgraded to {selectedPlan.name}.</p>
                </div>
              ) : (
                <>
                  {/* Paystack Header Branding */}
                  <div className="bg-[#011b33] p-8 text-white relative overflow-hidden">
                     <div className="relative z-10 flex justify-between items-start">
                        <div>
                           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Paying Hotjobsconnect</p>
                           <h3 className="text-2xl font-black tracking-tighter">₦{selectedPlan.price}</h3>
                        </div>
                        <button onClick={() => setShowCheckout(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                           <X size={20} className="text-gray-400" />
                        </button>
                     </div>
                     <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">
                        <Lock size={12} /> SECURE CHECKOUT
                     </div>
                  </div>

                  <div className="p-8 space-y-6">
                     <div className="space-y-4">
                        <div className="space-y-1">
                           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Card Number</label>
                           <div className="relative">
                              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                              <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all font-mono" />
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Expiry</label>
                              <input type="text" placeholder="MM/YY" className="w-full px-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-500 outline-none font-mono" />
                           </div>
                           <div className="space-y-1">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">CVV</label>
                              <input type="text" placeholder="123" className="w-full px-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-500 outline-none font-mono" />
                           </div>
                        </div>
                     </div>

                     <button 
                        onClick={processPayment}
                        disabled={isProcessing}
                        className="w-full py-5 bg-[#3bb75e] text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#32a351] transition-all shadow-xl shadow-green-900/10 flex items-center justify-center gap-3 active:scale-95"
                     >
                        {isProcessing ? (
                           <>
                              <Activity size={18} className="animate-spin" />
                              Verifying...
                           </>
                        ) : (
                           `Pay ₦${selectedPlan.price}`
                        )}
                     </button>
                     
                     <div className="flex flex-col items-center gap-4 pt-4">
                        <div className="flex gap-4 opacity-30 grayscale items-center">
                           <span className="text-[10px] font-black">VISA</span>
                           <span className="text-[10px] font-black">MASTERCARD</span>
                           <span className="text-[10px] font-black">VERVE</span>
                        </div>
                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                           POWERED BY <span className="text-gray-400">PAYSTACK</span>
                        </p>
                     </div>
                  </div>
                </>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
