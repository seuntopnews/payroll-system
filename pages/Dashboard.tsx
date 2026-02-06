
import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  Briefcase, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  CheckCircle2,
  Activity,
  UserPlus,
  ShieldCheck,
  Clock,
  CheckSquare,
  X,
  ChevronRight,
  Zap
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const payrollData = [
  { name: 'Jan', salary: 4000000 },
  { name: 'Feb', salary: 4200000 },
  { name: 'Mar', salary: 4100000 },
  { name: 'Apr', salary: 4800000 },
  { name: 'May', salary: 5000000 },
  { name: 'Jun', salary: 5200000 },
];

const StatCard = ({ title, value, trend, trendUp, icon: Icon, color, subtext }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-current`}>
        <Icon size={24} className={`${color.replace('bg-', 'text-')}`} />
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1 ${trendUp ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
        {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {trend}
      </span>
    </div>
    <div>
      <h3 className="text-3xl font-black text-gray-900 tracking-tight">{value}</h3>
      <p className="text-sm text-gray-500 font-bold mt-1 uppercase tracking-wider">{title}</p>
      {subtext && <p className="text-xs text-gray-400 mt-2 font-medium">{subtext}</p>}
    </div>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [showPayrollPreview, setShowPayrollPreview] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRunPayroll = () => {
    setShowPayrollPreview(true);
  };

  const confirmPayroll = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPayrollPreview(false);
      navigate('/payroll');
    }, 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Management Pulse</h1>
          <p className="text-gray-500 font-medium">Real-time sync between your Nigeria HQ and remote staff.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 bg-white border-2 border-gray-100 text-gray-700 rounded-xl text-sm font-black hover:border-brand-200 transition-all shadow-sm">
            Insights Report
          </button>
          <button 
            onClick={handleRunPayroll}
            className="px-6 py-2.5 bg-brand-600 text-white rounded-xl text-sm font-black hover:bg-brand-700 shadow-xl shadow-brand-200 flex items-center gap-2 transition-all active:scale-95"
          >
            <DollarSign size={18} />
            Run Oct Payroll
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Payroll Volume" 
          value="₦5.24M" 
          trend="12.4%" 
          trendUp={true} 
          icon={DollarSign} 
          color="bg-brand-600"
          subtext="Net disbursement for Oct"
        />
        <StatCard 
          title="Total Workforce" 
          value="56" 
          trend="4.2%" 
          trendUp={true} 
          icon={Users} 
          color="bg-blue-600"
          subtext="4 Onboarding via Hotjobs"
        />
        <StatCard 
          title="Job Pipelines" 
          value="8" 
          trend="2 Filled" 
          trendUp={true} 
          icon={Briefcase} 
          color="bg-purple-600"
          subtext="340 Total applications"
        />
        <StatCard 
          title="Smart Alerts" 
          value="12" 
          trend="5 Urgent" 
          trendUp={false} 
          icon={AlertCircle} 
          color="bg-orange-600"
          subtext="Loans & Leave tasks"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
             <h3 className="text-xl font-black text-gray-900">Financial Growth</h3>
             <select className="text-sm font-bold border-gray-200 rounded-xl focus:ring-brand-500 bg-gray-50 px-4 py-2 outline-none">
               <option>Year to Date</option>
               <option>Last 6 Months</option>
             </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={payrollData}>
                <defs>
                  <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px'}}
                  formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Payroll Cost']}
                />
                <Area type="monotone" dataKey="salary" stroke="#FF6B00" strokeWidth={4} fillOpacity={1} fill="url(#colorSalary)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Clock size={16} className="text-brand-600" />
                Live Attendance
              </h3>
              <button onClick={() => navigate('/attendance')} className="text-xs text-brand-600 font-black hover:underline">Full View</button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <span className="block text-2xl font-black text-gray-900">45</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">Active</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-black text-red-500">3</span>
                <span className="text-[10px] font-bold text-red-400 uppercase">Late</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-black text-gray-300">8</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">Out</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-brand-50 rounded-2xl border border-brand-100 animate-in fade-in slide-in-from-left">
                <div className="w-2 h-2 bg-brand-600 rounded-full animate-ping"></div>
                <p className="text-xs text-brand-900 font-bold">David O. clocked in (GPS: Lekki HQ)</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <p className="text-xs text-gray-600 font-bold">Chinedu E. requested Early Exit</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-600 p-8 rounded-[2rem] shadow-2xl shadow-brand-200 text-white relative overflow-hidden group transition-all hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={20} className="text-white fill-current" />
                <span className="text-xs font-black uppercase tracking-widest text-brand-100">Recruitment Sync</span>
              </div>
              <h3 className="text-2xl font-black mb-2 leading-tight">3 Top Hires Found</h3>
              <p className="text-brand-100 text-xs font-medium mb-6 leading-relaxed">
                Hotjobs Smart Engine found 3 candidates in your pool with 90%+ match scores.
              </p>
              <button onClick={() => navigate('/recruitment')} className="w-full py-3 bg-white text-brand-600 hover:bg-brand-50 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2">
                <UserPlus size={18} />
                Hire & Sync Now
              </button>
            </div>
            <Briefcase className="absolute -right-8 -bottom-8 text-white opacity-10 w-40 h-40 group-hover:rotate-12 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Action Drawer / Modal for Payroll Preview */}
      {showPayrollPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
               <div>
                 <h2 className="text-2xl font-black text-gray-900">Payroll Preview</h2>
                 <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">October 2023 Cycle</p>
               </div>
               <button onClick={() => setShowPayrollPreview(false)} className="p-2 hover:bg-gray-200 rounded-xl transition-colors">
                 <X size={24} className="text-gray-400" />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
                  <p className="text-xs font-black text-brand-600 uppercase tracking-widest mb-1">Total Net</p>
                  <p className="text-3xl font-black text-brand-700">₦5.24M</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Total Tax</p>
                  <p className="text-3xl font-black text-gray-900">₦1.12M</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Statutory Deductions (Nigeria)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-bold text-gray-600">PAYE (Personal Income Tax)</span>
                    <span className="font-black text-gray-900">₦842,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-bold text-gray-600">Employee Pension (8%)</span>
                    <span className="font-black text-gray-900">₦240,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-bold text-gray-600">NHF (National Housing Fund)</span>
                    <span className="font-black text-gray-900">₦38,000</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={20} className="text-blue-600" />
                  <p className="text-sm font-black text-blue-900">Verified by Hotjobs Smart Engine</p>
                </div>
                <p className="text-xs text-blue-700 font-medium">All bank accounts are BVN-linked. NIP transfer protocol ready.</p>
              </div>
            </div>

            <div className="p-8 bg-white border-t border-gray-100 flex flex-col gap-3">
               <button 
                 onClick={confirmPayroll}
                 disabled={isProcessing}
                 className="w-full py-4 bg-brand-600 text-white rounded-2xl font-black text-lg hover:bg-brand-700 shadow-xl shadow-brand-100 transition-all flex items-center justify-center gap-3"
               >
                 {isProcessing ? (
                   <>
                    <Activity size={20} className="animate-spin" />
                    Connecting to NIP...
                   </>
                 ) : (
                   <>
                    <Zap size={20} className="fill-current" />
                    Process Disbursement
                   </>
                 )}
               </button>
               <button onClick={() => setShowPayrollPreview(false)} className="w-full py-4 bg-white text-gray-400 font-black rounded-2xl hover:text-gray-600">
                 Wait, Review Details
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
