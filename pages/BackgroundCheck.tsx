
import React, { useState } from 'react';
import { 
  ShieldCheck, Search, Filter, Plus, Download, CheckCircle, XCircle, Clock, 
  AlertTriangle, FileText, User, ChevronRight, X, Activity, Database, Fingerprint,
  Zap, ArrowRight, ShieldAlert, BadgeCheck, Briefcase, Loader2, Check, Lock, Sparkles
} from 'lucide-react';

interface VerificationRequest {
  id: string;
  candidateName: string;
  candidateRole: string;
  checks: string[];
  status: 'Verified' | 'Pending' | 'Failed' | 'In Progress';
  dateRequested: string;
  riskScore: 'Low' | 'Medium' | 'High';
}

const MOCK_REQUESTS: VerificationRequest[] = [
  { id: 'VER-001', candidateName: 'David Olaoluwa', candidateRole: 'Senior Frontend Engineer', checks: ['NIN', 'BVN', 'Guarantor'], status: 'Verified', dateRequested: '2023-10-24', riskScore: 'Low' },
  { id: 'VER-002', candidateName: 'Sarah Mensah', candidateRole: 'Product Manager', checks: ['BVN', 'Criminal Record'], status: 'In Progress', dateRequested: '2023-10-25', riskScore: 'Low' },
  { id: 'VER-003', candidateName: 'Emmanuel Kalu', candidateRole: 'Sales Executive', checks: ['Academic', 'Guarantor'], status: 'Failed', dateRequested: '2023-10-22', riskScore: 'High' },
  { id: 'VER-004', candidateName: 'Chinedu Eze', candidateRole: 'DevOps Engineer', checks: ['NIN', 'Previous Employer'], status: 'Pending', dateRequested: '2023-10-26', riskScore: 'Medium' }
];

const BackgroundCheck = () => {
  const [requests, setRequests] = useState<VerificationRequest[]>(MOCK_REQUESTS);
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedVerification, setSelectedVerification] = useState<VerificationRequest | null>(null);
  
  // Free plan limit logic
  const MAX_FREE_FILES = 5;
  const isLimitReached = requests.length >= MAX_FREE_FILES;

  // Form State
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedModules, setSelectedModules] = useState<string[]>(['NIN', 'BVN']);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified': return 'bg-green-100 text-green-700 border-green-200';
      case 'Failed': return 'bg-red-100 text-red-700 border-red-200';
      case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const toggleModule = (module: string) => {
    if (selectedModules.includes(module)) {
      setSelectedModules(selectedModules.filter(m => m !== module));
    } else {
      setSelectedModules([...selectedModules, module]);
    }
  };

  const handleInitiateCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newRole || selectedModules.length === 0 || isLimitReached) return;

    setIsSubmitting(true);
    
    // Simulate API delay to NIMC/NIBSS nodes
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newRequest: VerificationRequest = {
      id: `VER-00${requests.length + 1}`,
      candidateName: newName,
      candidateRole: newRole,
      checks: selectedModules,
      status: 'In Progress',
      dateRequested: new Date().toISOString().split('T')[0],
      riskScore: 'Low'
    };

    setRequests([newRequest, ...requests]);
    setIsSubmitting(false);
    setShowNewRequestModal(false);
    
    // Reset form
    setNewName('');
    setNewRole('');
    setSelectedModules(['NIN', 'BVN']);
  };

  return (
    <div className="space-y-8 relative pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            <ShieldCheck className="text-brand-600" size={32} />
            Identity Ledger
          </h1>
          <p className="text-gray-500 font-medium">Verified by Hotjobs Smart Engine • NIBSS Synced</p>
        </div>
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
           {isLimitReached && (
             <div className="flex items-center gap-3 px-4 py-2 bg-orange-50 border border-orange-100 rounded-xl animate-in slide-in-from-top">
               <AlertTriangle size={16} className="text-orange-600" />
               <span className="text-xs font-bold text-orange-800 italic">You’ve reached the free plan limit.</span>
               <button 
                onClick={() => setShowUpgradeModal(true)}
                className="ml-2 px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-orange-700 transition-all"
               >
                 Upgrade
               </button>
             </div>
           )}
           <div className="flex gap-4">
              <button className="px-6 py-2.5 bg-white border-2 border-gray-100 text-gray-700 rounded-xl text-sm font-black hover:border-brand-600 transition-all flex items-center gap-2">
                <Download size={18} /> Export Log
              </button>
              <button 
                disabled={isLimitReached}
                onClick={() => setShowNewRequestModal(true)}
                className={`px-6 py-2.5 rounded-xl text-sm font-black shadow-xl flex items-center gap-2 transition-all active:scale-95 ${
                  isLimitReached 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' 
                  : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-200'
                }`}
              >
                {isLimitReached ? <Lock size={18} /> : <Plus size={18} />}
                Run New Identity Check
              </button>
           </div>
        </div>
      </div>

      {/* Global Pulse Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Checks Processed", val: requests.length, trend: `Limit: ${MAX_FREE_FILES}`, icon: FileText, color: "text-brand-600", bg: "bg-brand-50" },
          { label: "Verified Clean", val: requests.filter(r => r.status === 'Verified').length, trend: "90% Pass", icon: BadgeCheck, color: "text-green-600", bg: "bg-green-50" },
          { label: "Anomalies Found", val: requests.filter(r => r.status === 'Failed').length, trend: "Action Req", icon: ShieldAlert, color: "text-red-600", bg: "bg-red-50" },
          { label: "Real-time Sync", val: requests.filter(r => r.status === 'In Progress').length, trend: "Live", icon: Database, color: "text-blue-600", bg: "bg-blue-50" }
        ].map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
             <div className="flex justify-between items-start mb-4">
                <div className={`p-4 ${s.bg} ${s.color} rounded-2xl group-hover:scale-110 transition-transform`}>
                  <s.icon size={24} />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${s.color}`}>{s.trend}</span>
             </div>
             <p className="text-3xl font-black text-gray-900 tracking-tighter">{s.val}</p>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Main Ledger Table */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row gap-6 justify-between items-center bg-gray-50/50">
           <div className="relative flex-1 max-w-lg">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             <input 
               type="text" 
               placeholder="Search by candidate or NIBSS ID..." 
               className="w-full pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-1 focus:ring-brand-600 outline-none transition-all shadow-sm"
             />
           </div>
           <div className="flex gap-3">
              <button className="p-3 bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-brand-600 transition-all shadow-sm"><Filter size={20}/></button>
              <button className="p-3 bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-brand-600 transition-all shadow-sm"><Activity size={20}/></button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
               <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                  <th className="px-8 py-5">Verification ID</th>
                  <th className="px-8 py-5">Employee / Candidate</th>
                  <th className="px-8 py-5">Checks</th>
                  <th className="px-8 py-5">Risk Matrix</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
               {requests.map(req => (
                 <tr key={req.id} onClick={() => setSelectedVerification(req)} className="group hover:bg-gray-50/50 cursor-pointer transition-all">
                    <td className="px-8 py-6 font-black text-gray-400 text-xs">#{req.id}</td>
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-brand-600/10 text-brand-600 rounded-xl flex items-center justify-center font-black group-hover:scale-110 transition-transform">{req.candidateName.charAt(0)}</div>
                          <div>
                             <p className="font-black text-gray-900 group-hover:text-brand-600 transition-colors">{req.candidateName}</p>
                             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-0.5">{req.candidateRole}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex flex-wrap gap-2">
                          {req.checks.map((c, i) => (
                            <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[9px] font-black uppercase tracking-widest rounded border border-gray-200">{c}</span>
                          ))}
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${req.riskScore === 'Low' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : req.riskScore === 'Medium' ? 'bg-yellow-500' : 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`}></div>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${req.riskScore === 'Low' ? 'text-green-600' : req.riskScore === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                            {req.riskScore} Risk
                          </span>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border flex items-center gap-2 w-fit ${getStatusColor(req.status)}`}>
                         {req.status === 'In Progress' && <Loader2 size={10} className="animate-spin" />}
                         {req.status}
                       </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <button className="p-2 text-gray-300 group-hover:text-brand-600 transition-all"><ArrowRight size={20}/></button>
                    </td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Verification Detail Drawer */}
      {selectedVerification && (
        <div className="fixed inset-0 z-[110] flex items-center justify-end bg-black/60 backdrop-blur-sm animate-in fade-in">
           <div className="w-full max-w-xl h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                 <div>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">Identity Report</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Ref: {selectedVerification.id}</p>
                 </div>
                 <button onClick={() => setSelectedVerification(null)} className="p-3 hover:bg-gray-200 rounded-2xl transition-colors">
                    <X size={24} className="text-gray-400" />
                 </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-10 space-y-10">
                 <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-brand-600 rounded-3xl flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                       {selectedVerification.candidateName.charAt(0)}
                    </div>
                    <div>
                       <h4 className="text-3xl font-black text-gray-900 tracking-tighter">{selectedVerification.candidateName}</h4>
                       <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{selectedVerification.candidateRole}</p>
                       <div className="flex items-center gap-2 mt-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${getStatusColor(selectedVerification.status)}`}>{selectedVerification.status}</span>
                          <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{selectedVerification.dateRequested}</span>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                       <div className="flex items-center gap-3 mb-4">
                          <Fingerprint className="text-brand-600" size={20} />
                          <h5 className="text-[10px] font-black text-gray-900 uppercase tracking-widest">NIN Sync</h5>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-black text-gray-400 uppercase">Status</span>
                             <span className="text-[10px] font-black text-green-600 uppercase">MATCH</span>
                          </div>
                          <p className="text-xs font-bold text-gray-600">ID: 1234****123</p>
                       </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                       <div className="flex items-center gap-3 mb-4">
                          <Database className="text-brand-600" size={20} />
                          <h5 className="text-[10px] font-black text-gray-900 uppercase tracking-widest">BVN Sync</h5>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-black text-gray-400 uppercase">Status</span>
                             <span className="text-[10px] font-black text-green-600 uppercase">MATCH</span>
                          </div>
                          <p className="text-xs font-bold text-gray-600">ID: 222****555</p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                    <h5 className="text-[10px] font-black text-brand-500 uppercase tracking-widest mb-6">Risk Assessment Matrix</h5>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-400">Identity Fraud Risk</span>
                          <span className="text-sm font-black text-green-400">0.02% (LOW)</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-400">Criminal History</span>
                          <span className="text-sm font-black text-green-400">CLEAN</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-400">Employment Record</span>
                          <span className="text-sm font-black text-blue-400">VERIFIED</span>
                       </div>
                    </div>
                    <Zap className="absolute -right-8 -bottom-8 w-40 h-40 opacity-5" />
                 </div>

                 <div className="p-8 border-2 border-dashed border-gray-100 rounded-[2.5rem] text-center">
                    <FileText className="mx-auto text-gray-200 mb-4" size={48} />
                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Digital Certificate Issued</p>
                    <button className="mt-4 text-xs font-black text-brand-600 hover:underline">Download Verifiable PDF</button>
                 </div>
              </div>

              <div className="p-10 border-t border-gray-100 flex gap-4">
                 <button className="flex-1 py-4 bg-brand-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-700 transition-all">Archive Record</button>
                 <button className="flex-1 py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all">Re-Verify (NIBSS)</button>
              </div>
           </div>
        </div>
      )}

      {/* New Request Modal */}
      {showNewRequestModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-xl animate-in fade-in">
           <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-10 border-b border-gray-50 flex justify-between items-center bg-gray-50">
                 <div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter">New Verification</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Hotjobs Smart Engine</p>
                 </div>
                 <button onClick={() => setShowNewRequestModal(false)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors">
                    <X size={24} className="text-gray-400" />
                 </button>
              </div>
              <form onSubmit={handleInitiateCheck} className="p-10 space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Candidate Name</label>
                       <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                          <input 
                            type="text" 
                            required
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Full Legal Name" 
                            className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-black text-sm" 
                          />
                       </div>
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Candidate Role</label>
                       <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                          <input 
                            type="text" 
                            required
                            value={newRole}
                            onChange={(e) => setNewRole(e.target.value)}
                            placeholder="e.g. Sales Manager" 
                            className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-black text-sm" 
                          />
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Included Checks (NG Context)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       {[
                         { id: 'NIN', name: 'NIN Identity Sync', desc: 'Direct NIMC database cross-match.' },
                         { id: 'BVN', name: 'BVN Financial History', desc: 'Verify ownership via NIBSS protocol.' },
                         { id: 'Criminal Record', name: 'Criminal Record', desc: 'Police Force database search.' },
                         { id: 'Academic', name: 'Academic Check', desc: 'Verify degree with tertiary institutions.' },
                         { id: 'Guarantor', name: 'Guarantor Audit', desc: 'Physical/Digital witness verification.' }
                       ].map(c => (
                         <label 
                            key={c.id} 
                            onClick={() => toggleModule(c.id)}
                            className={`flex items-start gap-4 p-5 rounded-3xl cursor-pointer transition-all border-2 ${selectedModules.includes(c.id) ? 'bg-brand-50 border-brand-600' : 'bg-gray-50 border-transparent hover:bg-gray-100'}`}
                         >
                            <div className={`mt-1 w-5 h-5 rounded-md flex items-center justify-center border-2 transition-colors ${selectedModules.includes(c.id) ? 'bg-brand-600 border-brand-600 text-white' : 'bg-white border-gray-300'}`}>
                               {selectedModules.includes(c.id) && <Check size={12} />}
                            </div>
                            <div>
                               <p className="text-xs font-black text-gray-900 uppercase tracking-tight">{c.name}</p>
                               <p className="text-[9px] text-gray-500 font-medium mt-0.5 leading-tight">{c.desc}</p>
                            </div>
                         </label>
                       ))}
                    </div>
                 </div>

                 <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting || !newName || !newRole || selectedModules.length === 0}
                      className="w-full py-6 bg-brand-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-2xl shadow-brand-100 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Provisioning Check...
                          </>
                        ) : (
                          <>
                            <Zap size={20} className="fill-current" />
                            Initiate Smart Check
                          </>
                        )}
                    </button>
                    <p className="text-center text-[9px] font-black text-gray-300 uppercase tracking-[0.5em] mt-6">Secure Sync Node Enabled</p>
                 </div>
              </form>
           </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-2xl animate-in fade-in">
           <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-10 text-center">
                 <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-8 shadow-inner">
                    <Sparkles size={40} className="animate-pulse" />
                 </div>
                 <h3 className="text-3xl font-black text-gray-900 tracking-tighter mb-4">Upgrade your plan</h3>
                 <p className="text-gray-500 font-medium leading-relaxed mb-10 italic">
                    You've hit the limit for the Free Launch Node. Unlock unlimited verification requests, direct LIRS API sync, and priority NIBSS processing by upgrading to a professional plan.
                 </p>
                 <div className="space-y-4">
                    <button 
                      onClick={() => setShowUpgradeModal(false)}
                      className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-100 transition-all active:scale-95"
                    >
                      View Growth Plans
                    </button>
                    <button 
                      onClick={() => setShowUpgradeModal(false)}
                      className="w-full py-4 bg-gray-50 text-gray-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:text-gray-600 transition-all"
                    >
                      Close
                    </button>
                 </div>
              </div>
              <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Enterprise Identity Infrastructure LAGOS</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundCheck;
