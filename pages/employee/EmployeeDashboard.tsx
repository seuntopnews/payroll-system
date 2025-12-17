
import React, { useState } from 'react';
import { 
  Wallet, 
  Briefcase, 
  Sparkles, 
  Bell,
  Clock,
  CheckCircle2,
  PlayCircle,
  StopCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [isClockedIn, setIsClockedIn] = useState(false);

  const handleClockInOut = () => {
    const newState = !isClockedIn;
    setIsClockedIn(newState);
    // In a real app, this would send an API request to sync with the Employer Dashboard
    alert(newState ? "Clocked In Successfully! Location Synced." : "Clocked Out. Have a great evening!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good Morning, David</h1>
          <p className="text-sm text-gray-500">Here is what's happening with your career today.</p>
        </div>
        <button className="p-2 relative bg-white rounded-full border border-gray-200 hover:bg-gray-50 text-gray-500">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-600 rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* AI Insight Banner */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl p-6 text-white relative overflow-hidden shadow-lg">
        <div className="relative z-10 flex gap-4">
          <div className="p-3 bg-white/20 rounded-lg h-fit">
            <Sparkles className="text-yellow-300" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Hotjobs AI Career Tip</h3>
            <p className="text-brand-100 text-sm max-w-xl mb-4">
              Your profile matches <strong>85%</strong> with a new "Senior Frontend" role at Paystack. Updating your "React Native" skill could boost this to 95%.
            </p>
            <div className="flex gap-3">
              <button onClick={() => navigate('/portal/jobs')} className="bg-white text-brand-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-50 transition-colors">
                View Job Match
              </button>
              <button onClick={() => navigate('/portal/profile')} className="bg-brand-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-900 transition-colors">
                Update Skills
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-64 bg-white/5 transform skew-x-12"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Attendance Clock In/Out (SYNCED) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
           <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-orange-50 rounded-lg text-brand-600">
              <Clock size={20} />
            </div>
            <span className={`flex items-center gap-1 text-xs font-medium ${isClockedIn ? 'text-green-600' : 'text-gray-400'}`}>
              <span className={`w-2 h-2 rounded-full ${isClockedIn ? 'bg-green-500' : 'bg-gray-400'}`}></span> 
              {isClockedIn ? 'Online' : 'Offline'}
            </span>
          </div>
          
          <div className="text-center my-2">
            <p className="text-3xl font-bold text-gray-900">{isClockedIn ? '04:30:12' : '--:--:--'}</p>
            <p className="text-xs text-gray-500">{isClockedIn ? 'Hours Worked Today' : 'Not Clocked In'}</p>
          </div>

          <button 
            onClick={handleClockInOut}
            className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
              isClockedIn 
                ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                : 'bg-brand-600 text-white hover:bg-brand-700'
            }`}
          >
            {isClockedIn ? <><StopCircle size={16} /> Clock Out</> : <><PlayCircle size={16} /> Clock In</>}
          </button>
        </div>

        {/* Salary Widget */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <Wallet size={20} />
            </div>
            <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">Oct 25</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">₦850,000</h3>
          <p className="text-sm text-gray-500">Next Salary Payout</p>
          <div className="mt-3 pt-3 border-t border-gray-50 flex justify-between items-center">
            <span className="text-xs text-gray-400">Includes Tax & Pension</span>
            <button onClick={() => navigate('/portal/finance')} className="text-xs font-bold text-green-600 hover:underline">View Slip</button>
          </div>
        </div>

        {/* Job Search Widget */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
           <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Briefcase size={20} />
            </div>
            <span className="px-2 py-1 bg-blue-50 rounded text-xs font-medium text-blue-600">3 New</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">12 Matches</h3>
          <p className="text-sm text-gray-500">Jobs fitting your profile</p>
          <div className="mt-3 pt-3 border-t border-gray-50 flex justify-between items-center">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <button onClick={() => navigate('/portal/jobs')} className="text-xs font-bold text-blue-600 hover:underline">Apply Now</button>
          </div>
        </div>
      </div>

      {/* Active Applications & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Synced Tasks Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Pending Tasks (From Employer)</h3>
            <button onClick={() => navigate('/portal/tasks')} className="text-xs text-brand-600 font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-3">
             <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <div className="mt-0.5">
                <div className="w-4 h-4 rounded-full border-2 border-brand-500"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Complete "Data Privacy" Training</p>
                <p className="text-xs text-gray-500">Assigned by Jane Admin • Due in 2 days</p>
              </div>
            </div>
             <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <div className="mt-0.5">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 hover:border-green-500"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Confirm bank details for payroll</p>
                 <p className="text-xs text-gray-500">Assigned by System</p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Applications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900 mb-4">Active Job Applications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center border border-gray-200 font-bold text-gray-700">P</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Product Manager</p>
                  <p className="text-xs text-gray-500">Paystack • Lagos</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">Interview</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center border border-gray-200 font-bold text-gray-700">K</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Backend Engineer</p>
                  <p className="text-xs text-gray-500">Kuda Bank • Remote</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Applied</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;