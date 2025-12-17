
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Briefcase, Star, Zap, Users, CheckCircle, Sparkles, ShieldCheck, GraduationCap, ArrowRight, Plus, X, Loader2, FileText, UserCheck, XCircle } from 'lucide-react';

// --- Types ---
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
  role: string;
  score: number;
  skills: string[];
  status: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Rejected';
}

// --- Mock Data ---
const INITIAL_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Lagos (Hybrid)',
    applicants: 45,
    aiMatches: 8,
    offers: 2,
    status: 'Live'
  },
  {
    id: '2',
    title: 'Product Marketing Manager',
    department: 'Marketing',
    type: 'Contract',
    location: 'Remote',
    applicants: 12,
    aiMatches: 2,
    offers: 0,
    status: 'Live'
  }
];

const MOCK_AI_RANKINGS: Candidate[] = [
  { id: 'c1', name: 'David Olaoluwa', role: 'Senior Frontend', score: 96, skills: ['React', 'TypeScript', 'Node.js'], status: 'Interview' },
  { id: 'c2', name: 'Sarah Mensah', role: 'Senior Frontend', score: 89, skills: ['Vue', 'JavaScript', 'AWS'], status: 'Screening' },
  { id: 'c3', name: 'Emmanuel Kalu', role: 'Frontend Dev', score: 82, skills: ['Angular', 'C#'], status: 'Applied' },
  { id: 'c4', name: 'Zainab Ibrahim', role: 'Web Developer', score: 74, skills: ['HTML', 'CSS', 'jQuery'], status: 'Rejected' },
];

const TALENT_POOL_MOCK: Candidate[] = [
  { id: 't1', name: 'Chinedu Eze', role: 'DevOps Engineer', score: 92, skills: ['Docker', 'Kubernetes', 'AWS'], status: 'Applied' },
  { id: 't2', name: 'Amara Nnaji', role: 'UI/UX Designer', score: 88, skills: ['Figma', 'Adobe XD', 'Prototyping'], status: 'Applied' },
  { id: 't3', name: 'Tunde Bakare', role: 'Backend Developer', score: 90, skills: ['Python', 'Django', 'PostgreSQL'], status: 'Applied' },
];

const Recruitment = () => {
  const navigate = useNavigate();
  // --- State ---
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [activeView, setActiveView] = useState<'pipelines' | 'talentPool'>('pipelines');
  
  // Modals
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [activeRankingJobId, setActiveRankingJobId] = useState<string | null>(null);
  
  // Marketplace States
  const [outsourcingStatus, setOutsourcingStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  
  // Sync State
  const [isSyncing, setIsSyncing] = useState(false);

  // Form State
  const [newJobForm, setNewJobForm] = useState({ title: '', department: '', type: 'Full-time' });

  // --- Handlers ---

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobForm.title || !newJobForm.department) return;

    const newJob: Job = {
      id: Date.now().toString(),
      title: newJobForm.title,
      department: newJobForm.department,
      type: newJobForm.type,
      location: 'Lagos',
      applicants: 0,
      aiMatches: 0,
      offers: 0,
      status: 'Live'
    };

    setJobs([newJob, ...jobs]);
    setIsPostJobOpen(false);
    setNewJobForm({ title: '', department: '', type: 'Full-time' });
  };

  const handleSyncTalent = () => {
    setIsSyncing(true);
    // Simulate API call
    setTimeout(() => {
      setIsSyncing(false);
      // Add fake applicants to the first job
      const updatedJobs = [...jobs];
      if (updatedJobs.length > 0) {
        updatedJobs[0].applicants += 15;
        updatedJobs[0].aiMatches += 5;
        setJobs(updatedJobs);
      }
      alert("Sync Complete: 15 candidates imported from Hotjobsconnect Talent Pool.");
    }, 1500);
  };

  const handleOutsourcingRequest = () => {
    setOutsourcingStatus('sending');
    setTimeout(() => setOutsourcingStatus('sent'), 1000);
  };

  return (
    <div className="space-y-6 relative">
      
      {/* --- Hero Section --- */}
      <div className="bg-gradient-to-r from-brand-900 to-brand-700 rounded-xl p-8 text-white relative overflow-hidden shadow-lg transition-all">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 bg-white/20 rounded text-[10px] font-bold uppercase tracking-wider border border-white/10">Hotjobs Boost Enabled</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Recruitment & Talent Hub</h1>
          <p className="text-brand-100 max-w-2xl leading-relaxed">
            Post jobs directly to the Hotjobsconnect board, leverage Gemini AI to rank applicants, and automatically sync successful hires to your payroll system.
          </p>
          <div className="mt-8 flex gap-3">
            <button 
              onClick={() => setIsPostJobOpen(true)}
              className="px-6 py-2.5 bg-white text-brand-800 font-bold rounded-lg shadow hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Post New Job
            </button>
            <button 
              onClick={() => setActiveView(activeView === 'pipelines' ? 'talentPool' : 'pipelines')}
              className={`px-6 py-2.5 font-medium rounded-lg border transition-colors flex items-center gap-2 ${
                activeView === 'talentPool' 
                  ? 'bg-brand-800 text-white border-brand-600 ring-2 ring-brand-500' 
                  : 'bg-brand-800 text-white border-brand-600 hover:bg-brand-700'
              }`}
            >
              {activeView === 'talentPool' ? 'Back to Pipelines' : 'Access Talent Pool'}
              {activeView !== 'talentPool' && <ArrowRight size={16} />}
            </button>
          </div>
        </div>
        {/* Decorative Pattern */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 transform skew-x-12"></div>
        <Briefcase className="absolute -right-10 -bottom-10 text-white opacity-10 w-64 h-64 transform -rotate-12" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- Main Content Area (Left Column) --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold text-gray-900">
              {activeView === 'pipelines' ? 'Active Pipelines' : 'Hotjobs Talent Database'}
            </h2>
            {activeView === 'pipelines' && (
              <button className="text-sm text-brand-600 font-medium hover:underline">View archived jobs</button>
            )}
          </div>

          {/* Pipelines View */}
          {activeView === 'pipelines' && (
            <div className="space-y-4">
              {jobs.length === 0 && (
                <div className="p-10 text-center bg-white border border-gray-200 rounded-xl text-gray-500">
                  No active jobs. Post a new job to get started.
                </div>
              )}
              {jobs.map(job => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-200 transition-all group relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-600 transition-colors">{job.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{job.department} • {job.type} • {job.location}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${job.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {job.status}
                    </span>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-8">
                    <div>
                       <p className="text-2xl font-bold text-gray-900">{job.applicants}</p>
                       <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Applicants</p>
                    </div>
                     <div>
                       <p className="text-2xl font-bold text-gray-900 flex items-center gap-1">
                         {job.aiMatches} 
                         <Sparkles size={16} className="text-yellow-500" />
                       </p>
                       <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">AI Top Matches</p>
                    </div>
                     <div>
                       <p className="text-2xl font-bold text-gray-900">{job.offers}</p>
                       <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Offers Out</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3">
                    <button 
                      onClick={() => setActiveRankingJobId(job.id)}
                      className="flex-1 py-2 bg-brand-50 text-brand-700 text-sm font-medium rounded-lg hover:bg-brand-100 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Sparkles size={16} />
                      View AI Rankings
                    </button>
                    <button 
                      onClick={() => alert(`Opening pipeline management for ${job.title}`)}
                      className="flex-1 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Manage Pipeline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Talent Pool View */}
          {activeView === 'talentPool' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search by skill, role, or keyword..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 outline-none"
                  />
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {TALENT_POOL_MOCK.map(candidate => (
                  <div key={candidate.id} className="p-5 hover:bg-gray-50 transition-colors flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-lg">
                        {candidate.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{candidate.name}</h4>
                        <p className="text-sm text-gray-600">{candidate.role}</p>
                        <div className="flex gap-2 mt-2">
                          {candidate.skills.map(skill => (
                            <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end text-brand-600 font-bold mb-2">
                        <Sparkles size={14} />
                        <span>{candidate.score}% Match</span>
                      </div>
                      <button className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* --- Right Column: Marketplace & Widgets --- */}
        <div className="space-y-6">
           
           {/* Services Marketplace */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
              <Zap size={18} className="text-orange-500 fill-current" />
              HR Services Marketplace
            </h3>
            
            <div className="space-y-4">
              {/* Background Check */}
              <div 
                onClick={() => navigate('/verification')}
                className="flex items-start gap-3 p-3 rounded-lg transition-all cursor-pointer border border-transparent hover:bg-brand-50 hover:border-brand-200 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-800 group-hover:text-brand-900">Background Checks</p>
                    <ArrowRight size={14} className="text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Verify ID (NIN, BVN) & Guarantors instantly.</p>
                  <div className="mt-2">
                    <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">From ₦2,500/check</span>
                  </div>
                </div>
              </div>

              {/* Upskilling */}
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">Staff Upskilling</p>
                  <p className="text-xs text-gray-500 mt-0.5">Buy Excel, Leadership, & Soft Skill courses.</p>
                   <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">Bulk discounts</span>
                    <button className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-medium hover:bg-blue-700">Browse</button>
                  </div>
                </div>
              </div>

               {/* Outsourcing */}
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">HR Outsourcing</p>
                  <p className="text-xs text-gray-500 mt-0.5">Delegate payroll tax filing to our experts.</p>
                   <div className="mt-2 flex items-center justify-between">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleOutsourcingRequest(); }}
                      disabled={outsourcingStatus !== 'idle'}
                      className={`text-xs px-2 py-1 rounded font-medium ml-auto transition-colors ${outsourcingStatus === 'sent' ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white hover:bg-green-700'}`}
                    >
                      {outsourcingStatus === 'idle' && 'Contact'}
                      {outsourcingStatus === 'sending' && 'Sending...'}
                      {outsourcingStatus === 'sent' && 'Request Sent'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* Talent Sync Widget */}
           <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 text-white shadow-xl">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <Sparkles size={14} className="text-yellow-400" />
              Talent Pool Sync
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Our system automatically scans the Hotjobsconnect database for candidates matching your criteria.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-3 mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-300">Matching Accuracy</span>
                <span className="text-brand-400 font-bold">92%</span>
              </div>
              <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-brand-500"></div>
              </div>
            </div>

            <button 
              onClick={handleSyncTalent}
              disabled={isSyncing}
              className="w-full py-2 bg-white text-gray-900 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              {isSyncing ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Syncing...
                </>
              ) : (
                'Review 15 New Matches'
              )}
            </button>
           </div>
        </div>
      </div>

      {/* --- Modals --- */}
      {/* (Modals logic same as before but ensuring new colors) */}
      {isPostJobOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg">Post New Job</h3>
              <button onClick={() => setIsPostJobOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handlePostJob} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Marketing Manager"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500"
                  value={newJobForm.title}
                  onChange={e => setNewJobForm({...newJobForm, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Marketing"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500"
                  value={newJobForm.department}
                  onChange={e => setNewJobForm({...newJobForm, department: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500"
                  value={newJobForm.type}
                  onChange={e => setNewJobForm({...newJobForm, type: e.target.value})}
                >
                  <option>Full-time</option>
                  <option>Contract</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="pt-2 flex gap-3">
                <button type="button" onClick={() => setIsPostJobOpen(false)} className="flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 py-2.5 bg-brand-600 rounded-lg text-white font-medium hover:bg-brand-700">Post Job</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Recruitment;