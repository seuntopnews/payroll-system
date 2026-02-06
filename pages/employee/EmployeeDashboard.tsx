
import React, { useState } from 'react';
import { 
  Wallet, 
  Briefcase, 
  Sparkles, 
  Bell,
  Clock,
  CheckCircle2,
  PlayCircle,
  StopCircle,
  MapPin,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [locationVerified, setLocationVerified] = useState(false);

  const handleClockInOut = () => {
    if (!isClockedIn) {
      setIsVerifying(true);
      // Simulate GPS Verification
      setTimeout(() => {
        setIsVerifying(false);
        setIsClockedIn(true);
        setLocationVerified(true);
        // Reset location badge after a while
        setTimeout(() => setLocationVerified(false), 5000);
      }, 1500);
    } else {
      setIsClockedIn(false);
      setLocationVerified(false);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome, David</h1>
          <p className="text-gray-500 font-medium">Lekki Branch • Engineering Team</p>
        </div>
        <button className="p-3 relative bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-200 text-gray-500 transition-all shadow-sm">
          <Bell size={24} />
          <span className="absolute top-2 right-2 w-3 h-3 bg-brand-600 rounded-full border-4 border-white"></span>
        </button>
      </div>

      {/* Smart Hub Banner */}
      <div className="bg-brand-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-brand-100 group">
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center shrink-0 border border-white/20 animate-pulse">
            <Sparkles className="text-brand-100" size={40} />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-white/10">
              Hotjobs Intelligence
            </div>
            <h3 className="text-3xl font-black mb-3 leading-tight">Your Profile is Trending!</h3>
            <p className="text-brand-100 text-sm max-w-xl font-medium leading-relaxed mb-6">
              Our Smart Engine matched you with <strong className="text-white">Paystack</strong> and <strong className="text-white">Moniepoint</strong>. Adding "Cloud Architecture" to your CV could increase your match score by 15%.
            </p>
            <div className="flex gap-4">
              <button onClick={() => navigate('/portal/jobs')} className="bg-white text-brand-600 px-6 py-3 rounded-xl text-sm font-black hover:bg-brand-50 transition-all shadow-lg shadow-brand-800/20 active:scale-95">
                Apply to Paystack
              </button>
              <button onClick={() => navigate('/portal/profile')} className="bg-brand-800 text-white px-6 py-3 rounded-xl text-sm font-black hover:bg-brand-900 transition-all active:scale-95">
                Optimize CV
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-white/5 transform skew-x-12 -z-0"></div>
        <Zap className="absolute -left-10 -bottom-10 text-white opacity-5 w-64 h-64" />
      </div>

      {/* Sync Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Attendance Widget */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
           <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-brand-50 rounded-2xl text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <Clock size={28} />
            </div>
            <div className="text-right">
               <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isClockedIn ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                <span className={`w-2 h-2 rounded-full ${isClockedIn ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span> 
                {isClockedIn ? 'Working' : 'Offline'}
              </span>
              {locationVerified && (
                <div className="flex items-center gap-1 mt-2 text-[10px] font-black text-blue-600 animate-bounce">
                  <MapPin size={10} /> GPS VERIFIED
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center my-6">
            <p className="text-5xl font-black text-gray-900 tracking-tighter">{isClockedIn ? '04:30:12' : '--:--:--'}</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">{isClockedIn ? 'Shift Time Active' : 'Start your shift'}</p>
          </div>

          <button 
            onClick={handleClockInOut}
            disabled={isVerifying}
            className={`w-full py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 ${
              isClockedIn 
                ? 'bg-red-50 text-red-600 hover:bg-red-100 shadow-red-100' 
                : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-100'
            }`}
          >
            {isVerifying ? (
              <>
                <Activity size={18} className="animate-spin" />
                Verifying GPS...
              </>
            ) : (
              isClockedIn ? <><StopCircle size={20} /> Finish Shift</> : <><PlayCircle size={20} /> Clock In Now</>
            )}
          </button>
        </div>

        {/* Finance Snapshot */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-green-50 rounded-2xl text-green-600">
              <Wallet size={28} />
            </div>
            <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-black text-gray-400">OCT 2023</span>
          </div>
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Expected Payout</p>
          <h3 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">₦850,000</h3>
          <p className="text-xs text-green-600 font-bold flex items-center gap-1 mb-6">
            <ShieldCheck size={14} /> BVN & Tax Linked
          </p>
          <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
            <button onClick={() => navigate('/portal/finance')} className="text-xs font-black text-brand-600 hover:underline uppercase tracking-widest">My Payslips</button>
            <button onClick={() => navigate('/portal/finance')} className="text-xs font-black text-gray-400 hover:text-brand-600 uppercase tracking-widest">Request Advance</button>
          </div>
        </div>

        {/* Recruitment Sync */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
           <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
              <Briefcase size={28} />
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-black animate-pulse">3 NEW</span>
          </div>
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Top Talent Sync</p>
          <h3 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">12 Matches</h3>
          <p className="text-xs text-blue-600 font-bold mb-6">85%+ Compatibility Score</p>
          <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
            <div className="flex -space-x-3">
              <img src="https://picsum.photos/40/40?random=1" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
              <img src="https://picsum.photos/40/40?random=2" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
              <img src="https://picsum.photos/40/40?random=3" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
            </div>
            <button onClick={() => navigate('/portal/jobs')} className="px-5 py-2.5 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all">View All</button>
          </div>
        </div>
      </div>

      {/* Task Center */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-gray-900">Task Command</h3>
            <button onClick={() => navigate('/portal/tasks')} className="text-xs text-brand-600 font-black hover:underline uppercase tracking-widest">Open List</button>
          </div>
          <div className="space-y-4">
             <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-brand-200 cursor-pointer transition-all">
              <div className="w-6 h-6 rounded-full border-2 border-brand-500 mt-0.5 shrink-0 flex items-center justify-center">
                 <div className="w-2.5 h-2.5 bg-brand-500 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
              </div>
              <div>
                <p className="text-base font-black text-gray-900">Digital Compliance Check</p>
                <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wider">From: Compliance Dept • Due: Tomorrow</p>
              </div>
            </div>
             <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-brand-200 cursor-pointer transition-all">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 mt-0.5 shrink-0"></div>
              <div>
                <p className="text-base font-black text-gray-900">Update BVN on Portal</p>
                 <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wider">From: Hotjobs Smart Engine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Pipeline */}
        <div className="bg-gray-900 rounded-[2rem] shadow-2xl p-8 text-white">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black">Application Pulse</h3>
            <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Active Status</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-black text-gray-900 text-xl group-hover:scale-110 transition-transform">P</div>
                <div>
                  <p className="text-base font-black">Product Manager</p>
                  <p className="text-xs text-gray-400 font-medium">Paystack • Lagos</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-brand-600/20 text-brand-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-brand-500/30">Interview</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-black text-gray-900 text-xl group-hover:scale-110 transition-transform">K</div>
                <div>
                  <p className="text-base font-black">Lead Dev</p>
                  <p className="text-xs text-gray-400 font-medium">Kuda Bank • Remote</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-500/30">Applied</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
