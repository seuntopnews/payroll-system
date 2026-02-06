
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Briefcase, Star, Zap, Users, CheckCircle2, Sparkles, ShieldCheck, GraduationCap, 
  ArrowRight, Plus, X, Loader2, FileText, UserCheck, XCircle, Activity 
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  applicants: number;
  aiMatches: number;
  offers: number;
  status: 'Live' | 'Draft' | 'Closed';
}

const INITIAL_JOBS: Job[] = [
  { id: '1', title: 'Senior Frontend Engineer', department: 'Engineering', type: 'Full-time', location: 'Lagos (Hybrid)', applicants: 45, aiMatches: 8, offers: 2, status: 'Live' },
  { id: '2', title: 'Product Marketing Manager', department: 'Marketing', type: 'Contract', location: 'Remote', applicants: 12, aiMatches: 2, offers: 0, status: 'Live' }
];

const Recruitment = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [activeSyncStep, setActiveSyncStep] = useState(0);

  const handleSyncTalent = () => {
    setIsSyncing(true);
    setActiveSyncStep(1);
    
    setTimeout(() => setActiveSyncStep(2), 1000);
    setTimeout(() => setActiveSyncStep(3), 2000);
    
    setTimeout(() => {
      setIsSyncing(false);
      setActiveSyncStep(0);
      alert("Employee Sync Complete: Verified talent pool integrated into your pipeline.");
    }, 3000);
  };

  return (
    <div className="space-y-8 relative pb-12">
      <div className="bg-brand-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-brand-200">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">The Engine of Growth.</h1>
            <p className="text-brand-100 text-lg font-medium leading-relaxed mb-8 opacity-90">
              Source from our verified 2.4M talent database. Use Hotjobs Smart Engine to rank candidates by local verified skills and NIN/BVN status.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setIsPostJobOpen(true)}
                className="px-8 py-4 bg-white text-brand-600 font-black rounded-2xl shadow-xl hover:bg-brand-50 transition-all flex items-center gap-3 active:scale-95"
              >
                <Plus size={20} />
                Post New Opening
              </button>
              <button 
                onClick={handleSyncTalent}
                disabled={isSyncing}
                className="px-8 py-4 bg-brand-800 text-white font-black rounded-2xl shadow-xl hover:bg-brand-900 transition-all flex items-center gap-3 active:scale-95"
              >
                {isSyncing ? <Activity size={20} className="animate-spin" /> : <Sparkles size={20} />}
                Run Smart Sync
              </button>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all"></div>
             <div className="w-56 h-56 bg-white/10 border border-white/20 rounded-full flex flex-col items-center justify-center backdrop-blur-md">
                <span className="text-4xl font-black">2.4M</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-200">Verified Talent</span>
             </div>
          </div>
        </div>
        <Zap className="absolute -left-20 -bottom-20 text-white opacity-5 w-[400px] h-[400px]" />
      </div>

      {isSyncing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xl p-6 animate-in fade-in">
           <div className="bg-white w-full max-w-md rounded-[3rem] p-12 text-center shadow-2xl animate-in zoom-in-95 duration-500">
             <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-8">
               <Activity size={48} className="animate-spin" />
             </div>
             <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-4">Smart Sync in Progress</h3>
             <div className="space-y-4">
                <div className={`flex items-center gap-3 text-sm font-bold transition-all ${activeSyncStep >= 1 ? 'text-green-600' : 'text-gray-300'}`}>
                  <CheckCircle2 size={18} /> Indexed Hotjobs Database
                </div>
                <div className={`flex items-center gap-3 text-sm font-bold transition-all ${activeSyncStep >= 2 ? 'text-green-600' : 'text-gray-300'}`}>
                  <CheckCircle2 size={18} /> Cross-referencing BVN/NIN Identity
                </div>
                <div className={`flex items-center gap-3 text-sm font-bold transition-all ${activeSyncStep >= 3 ? 'text-green-600' : 'text-gray-300'}`}>
                  <CheckCircle2 size={18} /> Ranking Candidates (90%+ Match)
                </div>
             </div>
           </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center px-4">
             <h3 className="text-xl font-black text-gray-900 tracking-tight">Active Pipelines</h3>
             <select className="bg-white border-2 border-gray-100 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest outline-none">
               <option>All Departments</option>
               <option>Engineering</option>
               <option>Marketing</option>
             </select>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {jobs.map(job => (
              <div key={job.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all group">
                <div className="flex justify-between items-start mb-10">
                   <div>
                     <h4 className="text-2xl font-black text-gray-900 group-hover:text-brand-600 transition-colors tracking-tight">{job.title}</h4>
                     <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{job.department} • {job.location}</p>
                   </div>
                   <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" />)}
                     <div className="w-10 h-10 rounded-full bg-brand-50 border-4 border-white flex items-center justify-center text-[10px] font-black text-brand-600">+{job.applicants - 4}</div>
                   </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                   <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Leads</p>
                     <p className="text-2xl font-black text-gray-900">{job.applicants}</p>
                   </div>
                    <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
                     <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-1">Smart Matches</p>
                     <p className="text-2xl font-black text-brand-600">{job.aiMatches}</p>
                   </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Active Offers</p>
                     <p className="text-2xl font-black text-gray-900">{job.offers}</p>
                   </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-gray-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">Manage Pipeline</button>
                  <button className="px-6 py-4 bg-brand-50 text-brand-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-100 transition-all"><ArrowRight size={20}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-8">HR Services Store</h3>
              <div className="space-y-4">
                <div 
                  onClick={() => navigate('/verification')}
                  className="p-5 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-brand-50 hover:border-brand-200 transition-all cursor-pointer group"
                >
                   <ShieldCheck size={28} className="text-brand-600 mb-4" />
                   <h5 className="font-black text-gray-900 uppercase tracking-tight">Identity Assurance</h5>
                   <p className="text-xs text-gray-500 font-medium leading-relaxed mt-1">BVN, NIN, and Criminal check in 60s.</p>
                   <button className="mt-4 text-[10px] font-black text-brand-600 uppercase tracking-widest group-hover:translate-x-2 transition-transform">Run Checks →</button>
                </div>
                <div className="p-5 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer group">
                   <GraduationCap size={28} className="text-blue-600 mb-4" />
                   <h5 className="font-black text-gray-900 uppercase tracking-tight">Sales Masterclass</h5>
                   <p className="text-xs text-gray-500 font-medium leading-relaxed mt-1">Upskill your current staff instantly.</p>
                   <button className="mt-4 text-[10px] font-black text-blue-600 uppercase tracking-widest group-hover:translate-x-2 transition-transform">Browse Academy →</button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
