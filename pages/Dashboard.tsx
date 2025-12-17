
import React from 'react';
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
  CheckSquare
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
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-3">
      <div className={`p-2.5 rounded-lg ${color} bg-opacity-10 text-current`}>
        <Icon size={20} className={`${color.replace('bg-', 'text-')}`} />
      </div>
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${trendUp ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
        {trendUp ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
        {trend}
      </span>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
    </div>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Executive Command Center</h1>
          <p className="text-sm text-gray-500">Live sync with employee activities, payroll, and recruitment.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
            Generate Report
          </button>
          <button 
            onClick={() => navigate('/payroll')}
            className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm flex items-center gap-2 shadow-brand-200"
          >
            <DollarSign size={16} />
            Run Payroll
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Total Payroll Cost" 
          value="₦5.2M" 
          trend="12%" 
          trendUp={true} 
          icon={DollarSign} 
          color="bg-brand-500"
          subtext="Next run: Oct 25"
        />
        <StatCard 
          title="Total Employees" 
          value="56" 
          trend="4%" 
          trendUp={true} 
          icon={Users} 
          color="bg-blue-500"
          subtext="4 Onboarding"
        />
        <StatCard 
          title="Active Recruitment" 
          value="8 Roles" 
          trend="2 filled" 
          trendUp={true} 
          icon={Briefcase} 
          color="bg-purple-500"
          subtext="24 Candidates in pipeline"
        />
        <StatCard 
          title="Pending Actions" 
          value="12" 
          trend="5 Urgent" 
          trendUp={false} 
          icon={AlertCircle} 
          color="bg-orange-500"
          subtext="Loans & Leave Requests"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-semibold text-gray-900">Payroll Trends</h3>
             <select className="text-sm border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500">
               <option>Year to Date</option>
               <option>Last 6 Months</option>
             </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={payrollData}>
                <defs>
                  <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  formatter={(value: number) => `₦${value.toLocaleString()}`}
                />
                <Area type="monotone" dataKey="salary" stroke="#FF6B00" strokeWidth={2} fillOpacity={1} fill="url(#colorSalary)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Sidebar Widgets */}
        <div className="space-y-6">
          
          {/* Live Attendance Sync Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <Clock size={16} className="text-brand-600" />
                Live Attendance
              </h3>
              <button onClick={() => navigate('/attendance')} className="text-xs text-brand-600 font-bold hover:underline">View Map</button>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900">45</span>
                <span className="text-xs text-gray-500">Clocked In</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900">3</span>
                <span className="text-xs text-red-500">Late</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900">8</span>
                <span className="text-xs text-gray-400">Absent</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-green-50 rounded border border-green-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-xs text-green-800 font-medium">David O. clocked in at 08:02 AM</p>
              </div>
            </div>
          </div>

          {/* Task Progress Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <CheckSquare size={16} className="text-brand-600" />
                Task Progress
              </h3>
              <button onClick={() => navigate('/tasks')} className="text-xs text-brand-600 font-bold hover:underline">Manage</button>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-gray-700">Compliance Review</span>
                  <span className="text-brand-600 font-bold">75%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-brand-500"></div>
                </div>
              </div>
               <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-gray-700">Engineering Hiring</span>
                  <span className="text-blue-600 font-bold">40%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Hotjobs Recruitment Sync */}
          <div className="bg-gradient-to-br from-brand-900 to-brand-800 p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-1 text-brand-200">Hotjobs Sync</h3>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl font-bold">3</span>
                <span className="text-sm text-brand-200 mb-1">candidates ready to onboard</span>
              </div>
              <p className="text-xs text-brand-100 mb-4">
                Accepted offers from Hotjobsconnect. Sync them to payroll now.
              </p>
              <button className="w-full py-2 bg-white text-brand-800 hover:bg-gray-50 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                <UserPlus size={16} />
                Review & Sync
              </button>
            </div>
            <Briefcase className="absolute -right-4 -bottom-4 text-white opacity-10 w-32 h-32" />
          </div>

        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
         <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Recent Activities</h3>
            <button className="text-sm text-brand-600 hover:text-brand-700 font-medium">View All</button>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Activity</th>
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Loan Approved (₦500k)</td>
                  <td className="px-6 py-4 text-gray-600">Emmanuel K.</td>
                  <td className="px-6 py-4 text-gray-500">Oct 12, 2023</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Completed</span></td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">New Hire Sync</td>
                  <td className="px-6 py-4 text-gray-600">System (Hotjobs)</td>
                  <td className="px-6 py-4 text-gray-500">Oct 11, 2023</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">Synced</span></td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Tax Report Generated</td>
                  <td className="px-6 py-4 text-gray-600">Jane Admin</td>
                  <td className="px-6 py-4 text-gray-500">Oct 10, 2023</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">Downloaded</span></td>
                </tr>
              </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;