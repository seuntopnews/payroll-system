
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Briefcase, Star, Zap, Users, CheckCircle2, Sparkles, ShieldCheck, GraduationCap, 
  ArrowRight, Plus, X, Loader2, FileText, UserCheck, XCircle, Activity, 
  ChevronRight, ExternalLink, Send, BadgeCheck, ShieldAlert
} from 'lucide-react';
import { analyzeCandidateCV } from '../services/geminiService';

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

interface Candidate {
  id: string;
  name: string;
  score: number;
  status: 'Applied' | 'Shortlisted' | 'Interview' | 'Hired' | 'Rejected';
  avatar: string;
  summary: string;
}

const INITIAL_JOBS: Job[] = [
  { id: '1', title: 'Senior Frontend Engineer', department: 'Engineering', type: 'Full-time', location: 'Lagos (Hybrid)', applicants: 45, aiMatches: 8, offers: 2, status: 'Live' },
  { id: '2', title: 'Product Marketing Manager', department: 'Marketing', type: 'Contract', location: 'Remote', applicants: 12, aiMatches: 2, offers: 0, status: 'Live' }
];

const MOCK_CANDIDATES: Candidate[] = [
  { id: 'C1', name: 'Amaka Eze', score: 94, status: 'Shortlisted', avatar: 'https://i.pravatar.cc/150?u=amaka', summary: 'Senior React Dev with 6 years experience at Flutterwave.' },
  { id: 'C2', name: 'Babatunde Ojo', score: 88, status: 'Interview', avatar: 'https://i.pravatar.cc/150?u=babatunde', summary: 'Product specialized in growth and fintech compliance.' },
  { id: 'C3', name: 'Blessing Okoro', score: 72, status: 'Applied', avatar: 'https://i.pravatar.cc/150?u=blessing', summary: 'Strong backend skills, transition into frontend/React.' }
];

const Recruitment = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [activeSyncStep, setActiveSyncStep] = useState(0);
  const [isHiring, setIsHiring] = useState<string | null>(null);

  // Post Job Form State
  const [newJob, setNewJob] = useState({ title: '', department: 'Engineering', location: 'Remote', type: 'Full-time' });

  const handleSyncTalent = () => {
    setIsSyncing(true);
    setActiveSyncStep(1);
    setTimeout(() => setActiveSyncStep(2), 1000);
    setTimeout(() => setActiveSyncStep(3), 2000);
    setTimeout(() => {
      setIsSyncing(false);
      setActiveSyncStep(0);
    }, 3000);
  };

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    const job: Job = {
      id: Math.random().toString(36).substr(2, 9),
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      applicants: 0,
      aiMatches: 0,
      offers: 0,
      status: 'Live'
    };
    setJobs([job, ...jobs]);
    setIsPostJobOpen(false);
    setNewJob({ title: '', department: 'Engineering', location: 'Remote', type: 'Full-time' });
  };

  const handleHireCandidate = (candidateId: string) => {
    setIsHiring(candidateId);
    setTimeout(() => {
      alert(`Success! Employee conversion initiated. A welcome kit and digital onboarding link have been sent to the candidate's Hotjobs portal.`);
      setIsHiring(null);
      // In a real app, this would update the global employee state to add them to 'onboarding'
    }, 2000);
  };

  const selectedJob = jobs.find(j => j.id === selectedJobId);

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
             <div className="space-y-4 text-left px-4">
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

      {/* Pipeline Modal */}
      {selectedJobId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xl p-6 animate-in fade-in">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col">
            <div className="p-10 border-b border-gray-100 flex justify-between items-center bg-gray-50">
               <div>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Pipeline Management</h3>
                  <p className="text-sm font-bold text-brand-600 uppercase tracking-widest mt-1">{selectedJob?.title} • {selectedJob?.applicants} Applicants</p>
               </div>
               <button onClick={() => setSelectedJobId(null)} className="p-3 hover:bg-gray-200 rounded-2xl transition-colors">
                  <X size={24} className="text-gray-400" />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-10 space-y-6">
               <div className="grid grid-cols-1 gap-4">
                  {MOCK_CANDIDATES.map(candidate => (
                    <div key={candidate.id} className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all">
                       <img src={candidate.avatar} className="w-16 h-16 rounded-2xl shadow-md border-2 border-white" />
                       <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                             <h4 className="text-xl font-black text-gray-900">{candidate.name}</h4>
                             <span className="px-3 py-0.5 bg-brand-50 text-brand-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-brand-100">AI Score: {candidate.score}%</span>
                          </div>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-lg">{candidate.summary}</p>
                       </div>
                       <div className="flex gap-3">
                          <button className="px-5 py-3 bg-white border border-gray-200 rounded-xl text-xs font-black uppercase tracking-widest hover:border-brand-600 transition-all flex items-center gap-2">
                             <FileText size={16} /> CV
                          </button>
                          <button 
                            onClick={() => handleHireCandidate(candidate.id)}
                            disabled={isHiring === candidate.id}
                            className="px-6 py-3 bg-brand-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-700 shadow-lg shadow-brand-100 transition-all flex items-center gap-2"
                          >
                             {isHiring === candidate.id ? <Loader2 size={16} className="animate-spin" /> : <UserCheck size={16} />}
                             Hire & Onboard
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Post Job Modal */}
      {isPostJobOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xl p-6 animate-in fade-in">
          <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10 border-b border-gray-100 flex justify-between items-center bg-gray-50">
               <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Post Job Node</h3>
               <button onClick={() => setIsPostJobOpen(false)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors">
                  <X size={24} className="text-gray-400" />
               </button>
            </div>
            <form onSubmit={handlePostJob} className="p-10 space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Position Title</label>
                  <input 
                    type="text" required 
                    value={newJob.title}
                    onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                    placeholder="e.g. Lead Product Designer" 
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-bold" 
                  />
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Department</label>
                    <select 
                      value={newJob.department}
                      onChange={(e) => setNewJob({...newJob, department: e.target.value})}
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-bold appearance-none"
                    >
                       <option>Engineering</option>
                       <option>Marketing</option>
                       <option>Sales</option>
                       <option>Operations</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Location</label>
                    <input 
                      type="text" required 
                      value={newJob.location}
                      onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                      placeholder="Lagos / Remote" 
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-bold" 
                    />
                  </div>
               </div>
               <button type="submit" className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-100 transition-all active:scale-95">
                  Launch Live Opening
               </button>
            </form>
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
                  <button 
                    onClick={() => setSelectedJobId(job.id)}
                    className="flex-1 py-4 bg-gray-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all"
                  >
                    Manage Pipeline
                  </button>
                  <button onClick={() => setSelectedJobId(job.id)} className="px-6 py-4 bg-brand-50 text-brand-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-100 transition-all">
                    <ArrowRight size={20}/>
                  </button>
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
