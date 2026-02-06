
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  Building2, Users, Banknote, ShieldAlert, Zap, ArrowUpRight, ArrowDownRight, Activity, 
  Search, Filter, ExternalLink, Settings, MoreHorizontal, Database, CheckCircle2,
  Lock, Terminal, Save, Trash2, ShieldCheck, RefreshCcw
} from 'lucide-react';

const globalMetrics = [
  { name: 'Jul', revenue: 4500000, users: 1200 },
  { name: 'Aug', revenue: 5200000, users: 1450 },
  { name: 'Sep', revenue: 6800000, users: 1900 },
  { name: 'Oct', revenue: 8400000, users: 2400 },
];

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orgs' | 'system'>('overview');
  const [isSaving, setIsSaving] = useState(false);
  
  // Simulated State for Global Settings
  const [settings, setSettings] = useState({
    platformFee: 2.5,
    maxPayout: "50,000,000",
    taxEnabled: true,
    pensionRate: 18,
    maintenanceMode: false
  });

  const handleSaveSettings = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("System Configuration Synchronized Successfully.");
    }, 1500);
  };

  const StatBox = ({ label, value, trend, icon: Icon }: any) => (
    <div className="bg-gray-900 border border-gray-800 p-8 rounded-[2.5rem] group hover:border-brand-600 transition-all duration-500 shadow-2xl">
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-brand-600/10 text-brand-600 rounded-2xl group-hover:bg-brand-600 group-hover:text-white transition-all">
          <Icon size={28} />
        </div>
        <span className="text-[10px] font-black text-green-500 flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full">
          <ArrowUpRight size={12} /> {trend}%
        </span>
      </div>
      <p className="text-4xl font-black text-white tracking-tighter">{value}</p>
      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">{label}</p>
    </div>
  );

  return (
    <div className="space-y-10 pb-16">
      {/* Dynamic Tab Navigation */}
      <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded-[2rem] border border-gray-800 w-fit">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'overview' ? 'bg-brand-600 text-white shadow-xl shadow-brand-900/40' : 'text-gray-500 hover:text-white'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('orgs')}
          className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'orgs' ? 'bg-brand-600 text-white shadow-xl shadow-brand-900/40' : 'text-gray-500 hover:text-white'}`}
        >
          Manage Orgs
        </button>
        <button 
          onClick={() => setActiveTab('system')}
          className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'system' ? 'bg-brand-600 text-white shadow-xl shadow-brand-900/40' : 'text-gray-500 hover:text-white'}`}
        >
          System Config
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-black text-white tracking-tighter">Global Management</h1>
              <p className="text-gray-500 font-medium">Core platform pulse & operational intelligence.</p>
            </div>
            <div className="flex gap-4">
               <button className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                 System Logs
               </button>
               <button 
                onClick={() => setSettings({...settings, maintenanceMode: !settings.maintenanceMode})}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${settings.maintenanceMode ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
               >
                 {settings.maintenanceMode ? 'Maintenance ON' : 'Maintenance OFF'}
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatBox label="Platform Revenue (NGN)" value="₦42.5M" trend="24" icon={Banknote} />
            <StatBox label="Registered Orgs" value="156" trend="12" icon={Building2} />
            <StatBox label="Talent Network" value="8,420" trend="18" icon={Users} />
            <StatBox label="Root Health" value="99.9%" trend="0.1" icon={Activity} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-10 rounded-[3rem] shadow-2xl">
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-2xl font-black text-white tracking-tight">Financial Flow</h3>
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-1 px-3 py-1 bg-brand-600/10 text-brand-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-600/20">
                      Marketplace
                   </div>
                   <div className="flex items-center gap-1 px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-600/20">
                      Subscriptions
                   </div>
                </div>
              </div>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={globalMetrics}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 10, fontWeight: 900}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 10, fontWeight: 900}} />
                    <Tooltip 
                       contentStyle={{backgroundColor: '#030712', borderRadius: '24px', border: '1px solid #1f2937', color: '#fff'}}
                       itemStyle={{color: '#FF6B00'}}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#FF6B00" strokeWidth={5} fillOpacity={1} fill="url(#colorRev)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-600 p-10 rounded-[3rem] shadow-2xl shadow-brand-900/40 relative overflow-hidden group">
                 <div className="relative z-10">
                    <ShieldAlert size={48} className="text-white mb-8 group-hover:rotate-12 transition-transform duration-500" />
                    <h3 className="text-3xl font-black text-white mb-3">Critical Alert</h3>
                    <p className="text-brand-100 text-sm font-medium mb-8">NIBSS Gateway timeout detected for Providus Bank. 12 transfers pending resolution.</p>
                    <button className="w-full py-4 bg-white text-brand-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:shadow-xl transition-all">Resolve Now</button>
                 </div>
                 <Database className="absolute -right-10 -bottom-10 text-white opacity-10 w-48 h-48" />
              </div>
              
              <div className="bg-gray-900 border border-gray-800 p-10 rounded-[3rem]">
                 <div className="flex items-center gap-3 mb-8">
                   <Activity className="text-brand-500" />
                   <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">System Health</h4>
                 </div>
                 <div className="space-y-6">
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-gray-500 uppercase">Compute Load</span>
                       <span className="text-xs font-black text-green-500">12%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-brand-600 h-full w-[12%]"></div>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-gray-500 uppercase">DB Throughput</span>
                       <span className="text-xs font-black text-green-500">Normal</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-brand-600 h-full w-[45%]"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'system' && (
        <div className="animate-in fade-in slide-in-from-right duration-500 max-w-4xl">
           <div className="mb-12">
             <h2 className="text-4xl font-black text-white tracking-tighter mb-2">Platform Configuration</h2>
             <p className="text-gray-500 font-medium">Edit system-wide financial and operational parameters.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 space-y-6">
                 <div className="flex items-center gap-3 mb-2">
                    <Banknote className="text-brand-500" size={20} />
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Financial Rules</h4>
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Platform Fee (%)</label>
                       <input 
                         type="number" 
                         value={settings.platformFee} 
                         onChange={(e) => setSettings({...settings, platformFee: parseFloat(e.target.value)})}
                         className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:ring-1 focus:ring-brand-600" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Max Payout Cap (NGN)</label>
                       <input 
                         type="text" 
                         value={settings.maxPayout} 
                         onChange={(e) => setSettings({...settings, maxPayout: e.target.value})}
                         className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:ring-1 focus:ring-brand-600" 
                       />
                    </div>
                 </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 space-y-6">
                 <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="text-blue-500" size={20} />
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Compliance Engine</h4>
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Pension Rate (%)</label>
                       <input 
                         type="number" 
                         value={settings.pensionRate} 
                         onChange={(e) => setSettings({...settings, pensionRate: parseFloat(e.target.value)})}
                         className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:ring-1 focus:ring-brand-600" 
                       />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl mt-4">
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Automatic Tax Filing</span>
                       <button 
                        onClick={() => setSettings({...settings, taxEnabled: !settings.taxEnabled})}
                        className={`w-12 h-6 rounded-full p-1 transition-all ${settings.taxEnabled ? 'bg-brand-600' : 'bg-gray-700'}`}
                       >
                         <div className={`w-4 h-4 bg-white rounded-full transition-all ${settings.taxEnabled ? 'translate-x-6' : ''}`}></div>
                       </button>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-10 flex justify-end">
              <button 
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="px-10 py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-900/40 flex items-center gap-3"
              >
                {isSaving ? <RefreshCcw size={18} className="animate-spin" /> : <Save size={18} />}
                Deploy System Configuration
              </button>
           </div>
        </div>
      )}

      {activeTab === 'orgs' && (
        <div className="animate-in fade-in slide-in-from-left duration-500">
           <div className="mb-12 flex justify-between items-end">
             <div>
                <h2 className="text-4xl font-black text-white tracking-tighter mb-2">Organization Vault</h2>
                <p className="text-gray-500 font-medium">Manage corporate identities and subscription health.</p>
             </div>
             <div className="flex items-center gap-4">
               <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                 <input type="text" placeholder="Search companies..." className="bg-gray-900 border border-gray-800 rounded-2xl pl-12 pr-6 py-3 text-sm text-white focus:ring-1 focus:ring-brand-600 outline-none" />
               </div>
               <button className="p-3 bg-gray-900 border border-gray-800 text-gray-400 rounded-xl hover:text-white transition-all"><Filter size={20}/></button>
             </div>
           </div>

           <div className="bg-gray-900 border border-gray-800 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-black/20 border-b border-gray-800">
                    <tr className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                      <th className="px-10 py-6">Identity</th>
                      <th className="px-10 py-6">Subscription</th>
                      <th className="px-10 py-6">Staffing</th>
                      <th className="px-10 py-6">LTV (NGN)</th>
                      <th className="px-10 py-6">Safety</th>
                      <th className="px-10 py-6 text-right">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      { name: 'Paystack Africa', plan: 'Enterprise', staff: 145, rev: '₦4.2M', status: 'Active' },
                      { name: 'Kuda MFB', plan: 'Growth', staff: 52, rev: '₦1.1M', status: 'Active' },
                      { name: 'Acme Logistics', plan: 'Starter', staff: 8, rev: '₦0', status: 'Suspended' },
                      { name: 'Moniepoint', plan: 'Enterprise', staff: 840, rev: '₦12.8M', status: 'Active' },
                      { name: 'Glo Mobile', plan: 'Enterprise', staff: 2400, rev: '₦42.5M', status: 'Active' },
                    ].map((org, i) => (
                      <tr key={i} className="group hover:bg-white/[0.03] transition-all">
                        <td className="px-10 py-7">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand-600/10 text-brand-600 rounded-2xl flex items-center justify-center font-black text-xl border border-brand-600/20">{org.name.charAt(0)}</div>
                            <div>
                               <p className="font-black text-white group-hover:text-brand-500 transition-colors">{org.name}</p>
                               <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">UUID: ORG-{i}94X</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-10 py-7">
                          <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${org.plan === 'Enterprise' ? 'border-purple-600 text-purple-400 bg-purple-600/10' : 'border-brand-600 text-brand-400 bg-brand-600/10'}`}>
                            {org.plan}
                          </span>
                        </td>
                        <td className="px-10 py-7 text-sm font-bold text-gray-400">{org.staff} Verified Employees</td>
                        <td className="px-10 py-7 font-black text-white">{org.rev}</td>
                        <td className="px-10 py-7">
                           <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${org.status === 'Active' ? 'bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]' : 'bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]'}`}></div>
                             <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{org.status}</span>
                           </div>
                        </td>
                        <td className="px-10 py-7 text-right">
                           <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button className="p-2 text-gray-500 hover:text-white transition-colors"><Settings size={18}/></button>
                             <button className="p-2 text-gray-500 hover:text-red-500 transition-colors"><Trash2 size={18}/></button>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDashboard;
