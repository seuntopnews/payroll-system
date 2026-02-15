
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  Building2, Users, Banknote, ShieldAlert, Zap, ArrowUpRight, ArrowDownRight, Activity, 
  Search, Filter, ExternalLink, Settings, MoreHorizontal, Database, CheckCircle2,
  Lock, Terminal, Save, Trash2, ShieldCheck, RefreshCcw, CreditCard, Globe, Cpu,
  Image as ImageIcon, Eye, Play, Smartphone, CheckSquare, X, AlertCircle,
  LayoutDashboard, BellRing, Server, HardDrive, Key, Globe2, AlertTriangle, ShieldX
} from 'lucide-react';

const globalMetrics = [
  { name: 'Jul', revenue: 4500000, users: 1200 },
  { name: 'Aug', revenue: 5200000, users: 1450 },
  { name: 'Sep', revenue: 6800000, users: 1900 },
  { name: 'Oct', revenue: 8400000, users: 2400 },
];

const MOCK_ORGS = [
  { id: 'ORG-001', name: 'Paystack Africa', plan: 'Enterprise', users: 450, status: 'Active', revenue: '₦1.2M' },
  { id: 'ORG-002', name: 'Kuda Microfinance', plan: 'Enterprise', users: 890, status: 'Active', revenue: '₦2.4M' },
  { id: 'ORG-003', name: 'Moniepoint', plan: 'Growth', users: 42, status: 'Suspended', revenue: '₦0' },
  { id: 'ORG-004', name: 'Glo Mobile', plan: 'Professional', users: 120, status: 'Active', revenue: '₦450k' },
];

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orgs' | 'system' | 'cms' | 'revenue' | 'modules' | 'broadcast'>('overview');
  const [isSaving, setIsSaving] = useState(false);
  const [orgs, setOrgs] = useState(MOCK_ORGS);
  
  // Platform-wide Config State (Simulated CMS)
  const [cmsConfig, setCmsConfig] = useState({
    heroHeadline: "The Gold Standard for Workforce Excellence.",
    heroSub: "Unified recruitment, automated Nigerian payroll, and deep background verification. Built for the high-growth enterprise.",
    primaryCTA: "Hire & Pay Now",
    showTrustBar: true,
    pricingTiers: {
      professional: "45,000"
    }
  });

  // Feature Flags
  const [modules, setModules] = useState([
    { id: 'ai_assistant', name: 'Gemini AI Assistant', status: true, desc: 'Enables Hotjobs Smart Intelligence across all portals.' },
    { id: 'verification', name: 'Identity Ledger', status: true, desc: 'Real-time BVN/NIN verification modules.' },
    { id: 'payroll', name: 'Compliance Engine', status: true, desc: 'Tax and Pension calculation automation.' },
    { id: 'recruitment', name: 'Marketplace Sync', status: true, desc: 'Candidate indexing and search platform.' }
  ]);

  const handleSaveCMS = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Homepage Updated Successfully. Changes are now LIVE.");
    }, 1500);
  };

  const toggleModule = (id: string) => {
    setModules(modules.map(m => m.id === id ? { ...m, status: !m.status } : m));
  };

  const updateOrgStatus = (id: string, status: string) => {
    setOrgs(orgs.map(o => o.id === id ? { ...o, status } : o));
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
      <div className="flex flex-wrap gap-2 bg-gray-900/50 p-2 rounded-[2rem] border border-gray-800 w-fit">
        {[
          { id: 'overview', label: 'Overview', icon: LayoutDashboard },
          { id: 'revenue', label: 'Revenue', icon: CreditCard },
          { id: 'cms', label: 'Homepage CMS', icon: Globe2 },
          { id: 'orgs', label: 'Org Vault', icon: Building2 },
          { id: 'modules', label: 'Gatekeeper', icon: Cpu },
          { id: 'broadcast', label: 'Broadcast', icon: BellRing },
          { id: 'system', label: 'Kernel', icon: Terminal }
        ].map(t => (
          <button 
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === t.id ? 'bg-brand-600 text-white shadow-xl shadow-brand-900/40' : 'text-gray-500 hover:text-white'}`}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-black text-white tracking-tighter">Command Center</h1>
              <p className="text-gray-500 font-medium">Core platform heartbeat across all Nigerian nodes.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatBox label="Global Transaction Vol" value="₦142.5M" trend="31" icon={Banknote} />
            <StatBox label="Subscription Revenue" value="₦4.8M" trend="12" icon={CreditCard} />
            <StatBox label="API Health (NIBSS)" value="99.98%" trend="0.02" icon={Activity} />
            <StatBox label="Active Workforce" value="24.8K" trend="8" icon={Users} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-10 rounded-[3rem] shadow-2xl">
               <h3 className="text-2xl font-black text-white tracking-tight mb-8">Platform Revenue Growth</h3>
               <div className="h-80">
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
                      <Area type="monotone" dataKey="revenue" stroke="#FF6B00" strokeWidth={5} fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-10 rounded-[3rem] flex flex-col justify-between">
               <div>
                  <h4 className="text-[10px] font-black text-brand-500 uppercase tracking-widest mb-4">Pending Verifications</h4>
                  <div className="space-y-4">
                     {[1,2,3].map(i => (
                       <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                          <div>
                             <p className="text-white text-sm font-black">Manual Bank Transfer</p>
                             <p className="text-[10px] text-gray-500 font-bold uppercase">Kuda MFB - ₦120,000</p>
                          </div>
                          <button className="px-3 py-1 bg-brand-600 text-white text-[10px] font-black rounded-lg hover:bg-brand-700 transition-colors">Verify</button>
                       </div>
                     ))}
                  </div>
               </div>
               <button onClick={() => setActiveTab('revenue')} className="w-full mt-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10">View Revenue Hub</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orgs' && (
        <div className="animate-in fade-in slide-in-from-right duration-500">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-black text-white tracking-tighter">Organization Vault</h2>
            <div className="relative w-96">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
               <input type="text" placeholder="Search enterprise ID..." className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-2xl text-white outline-none focus:ring-1 focus:ring-brand-600" />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-[2.5rem] overflow-hidden">
             <table className="w-full text-left">
                <thead className="bg-black/20 border-b border-gray-800 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                   <tr>
                      <th className="px-10 py-6">Reference ID</th>
                      <th className="px-10 py-6">Organization Name</th>
                      <th className="px-10 py-6">Subscription</th>
                      <th className="px-10 py-6">Workforce</th>
                      <th className="px-10 py-6">Status</th>
                      <th className="px-10 py-6 text-right">Action</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                   {orgs.map(org => (
                     <tr key={org.id} className="group hover:bg-white/5 transition-all">
                        <td className="px-10 py-7 text-xs font-mono text-gray-500">{org.id}</td>
                        <td className="px-10 py-7">
                           <p className="text-sm font-black text-white">{org.name}</p>
                           <p className="text-[10px] font-bold text-gray-500 uppercase mt-0.5 tracking-wider">NG-ENT-NODE</p>
                        </td>
                        <td className="px-10 py-7">
                           <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest border ${org.plan === 'Enterprise' ? 'border-brand-600 text-brand-500 bg-brand-600/5' : 'border-blue-600 text-blue-500'}`}>
                             {org.plan}
                           </span>
                        </td>
                        <td className="px-10 py-7 font-black text-white">{org.users}</td>
                        <td className="px-10 py-7">
                           <span className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${org.status === 'Active' ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>
                             <div className={`w-1.5 h-1.5 rounded-full ${org.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                             {org.status}
                           </span>
                        </td>
                        <td className="px-10 py-7 text-right">
                           <div className="flex justify-end gap-2">
                              {org.status === 'Active' ? (
                                <button onClick={() => updateOrgStatus(org.id, 'Suspended')} className="p-2 bg-red-600/10 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all"><ShieldX size={16} /></button>
                              ) : (
                                <button onClick={() => updateOrgStatus(org.id, 'Active')} className="p-2 bg-green-600/10 text-green-500 rounded-xl hover:bg-green-600 hover:text-white transition-all"><CheckCircle2 size={16} /></button>
                              )}
                              <button className="p-2 bg-white/5 text-gray-400 rounded-xl hover:text-white"><ExternalLink size={16} /></button>
                           </div>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      )}

      {activeTab === 'system' && (
        <div className="animate-in fade-in slide-in-from-bottom duration-500 max-w-5xl space-y-10">
           <div className="flex justify-between items-center">
             <div>
               <h2 className="text-4xl font-black text-white tracking-tighter">Kernel Config</h2>
               <p className="text-gray-500 font-medium">Platform-wide environment and security settings.</p>
             </div>
             <div className="flex gap-4">
                <button className="px-6 py-3 bg-gray-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-700 flex items-center gap-2"><RefreshCcw size={14}/> Reboot Node</button>
                <button className="px-6 py-3 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 shadow-xl shadow-red-900/40">Flush Cache</button>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 space-y-6">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-brand-600/10 text-brand-600 rounded-2xl"><Key size={24}/></div>
                    <h3 className="text-lg font-black text-white">API Integration Keys</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="p-4 bg-black/40 rounded-xl border border-gray-800 flex justify-between items-center">
                       <div>
                          <p className="text-[10px] font-black text-gray-500 uppercase">NIBSS Verification</p>
                          <code className="text-xs text-brand-500 font-mono">sk_live_51M...f9X1</code>
                       </div>
                       <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white"><Save size={16}/></button>
                    </div>
                    <div className="p-4 bg-black/40 rounded-xl border border-gray-100/5 flex justify-between items-center">
                       <div>
                          <p className="text-[10px] font-black text-gray-500 uppercase">Paystack Secret</p>
                          <code className="text-xs text-brand-500 font-mono">sk_live_21A...m0R2</code>
                       </div>
                       <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white"><Save size={16}/></button>
                    </div>
                 </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 space-y-6">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl"><Server size={24}/></div>
                    <h3 className="text-lg font-black text-white">Node Health</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                          <span>CPU Load</span>
                          <span>12%</span>
                       </div>
                       <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full w-[12%]"></div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                          <span>Memory Usage</span>
                          <span>4.2GB / 16GB</span>
                       </div>
                       <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full w-[26%]"></div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                          <span>Storage Sync</span>
                          <span>Healthy</span>
                       </div>
                       <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-brand-500 h-full w-[94%]"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-gray-900 p-10 rounded-[3rem] border border-gray-800 flex items-center justify-between">
              <div className="flex gap-6 items-center">
                 <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 border border-red-600/20">
                    <AlertTriangle size={32} />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-white mb-1">Maintenance Mode</h4>
                    <p className="text-sm text-gray-500 font-medium">Suspend all incoming requests to the platform except for Super Admins.</p>
                 </div>
              </div>
              <button className="px-8 py-4 bg-gray-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">Enable Lockdown</button>
           </div>
        </div>
      )}

      {activeTab === 'cms' && (
        <div className="animate-in fade-in slide-in-from-right duration-500">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-gray-900 p-10 rounded-[3rem] border border-gray-800 space-y-8 shadow-2xl">
                 <h2 className="text-3xl font-black text-white tracking-tighter">Homepage CMS</h2>
                 <p className="text-gray-500 font-medium">Modify the landing page text and visibility instantly.</p>
                 
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Hero Headline</label>
                       <textarea 
                        value={cmsConfig.heroHeadline}
                        onChange={(e) => setCmsConfig({...cmsConfig, heroHeadline: e.target.value})}
                        className="w-full bg-black/40 border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:ring-1 focus:ring-brand-600 font-black text-xl leading-tight" rows={3} 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Sub-headline Description</label>
                       <textarea 
                        value={cmsConfig.heroSub}
                        onChange={(e) => setCmsConfig({...cmsConfig, heroSub: e.target.value})}
                        className="w-full bg-black/40 border border-gray-800 rounded-2xl px-6 py-4 text-gray-400 outline-none focus:ring-1 focus:ring-brand-600 text-sm leading-relaxed" rows={3} 
                       />
                    </div>
                    <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                       <div>
                          <p className="text-sm font-black text-white">Trust Bar Visibility</p>
                          <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Show major partner logos</p>
                       </div>
                       <button onClick={() => setCmsConfig({...cmsConfig, showTrustBar: !cmsConfig.showTrustBar})} className={`w-14 h-7 rounded-full p-1 transition-all ${cmsConfig.showTrustBar ? 'bg-brand-600' : 'bg-gray-700'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full transition-all ${cmsConfig.showTrustBar ? 'translate-x-7' : ''}`}></div>
                       </button>
                    </div>
                 </div>

                 <button 
                  onClick={handleSaveCMS}
                  disabled={isSaving}
                  className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-900/40 flex items-center justify-center gap-3 transition-all active:scale-95"
                 >
                   {isSaving ? <RefreshCcw className="animate-spin" size={20} /> : <Save size={20} />}
                   Deploy Changes
                 </button>
              </div>

              <div className="bg-gray-800 p-2 rounded-[3.5rem] shadow-2xl relative border border-gray-700 h-[600px]">
                 <div className="bg-white rounded-[3rem] w-full h-full overflow-y-auto scrollbar-hide scale-[1.0] p-10 text-center flex flex-col items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-600/10 text-brand-600 text-[8px] font-black uppercase tracking-widest mb-6 rounded-lg border border-brand-600/20">LIVE PREVIEW</div>
                    <h1 className="text-4xl font-black text-gray-900 leading-tight mb-4 tracking-tighter">
                       {cmsConfig.heroHeadline}
                    </h1>
                    <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto font-medium">
                       {cmsConfig.heroSub}
                    </p>
                    <button className="px-10 py-4 bg-brand-600 text-white rounded-[2rem] font-black text-sm shadow-xl">
                       {cmsConfig.primaryCTA}
                    </button>
                    {cmsConfig.showTrustBar && (
                      <div className="mt-12 flex justify-center gap-8 opacity-20 grayscale scale-75">
                         <span className="font-black text-gray-900">PAYSTACK</span>
                         <span className="font-black text-gray-900">KUDA</span>
                      </div>
                    )}
                 </div>
              </div>
           </div>
        </div>
      )}

      {activeTab === 'modules' && (
        <div className="animate-in fade-in slide-in-from-bottom duration-500 max-w-4xl space-y-10">
           <div className="mb-4">
             <h2 className="text-4xl font-black text-white tracking-tighter mb-2">Platform Gatekeeper</h2>
             <p className="text-gray-500 font-medium">Toggle high-level features for all organizations.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map(mod => (
                <div key={mod.id} className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 hover:border-brand-600 transition-all group">
                   <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl ${mod.status ? 'bg-brand-600/10 text-brand-600' : 'bg-gray-800 text-gray-600'}`}>
                         <Cpu size={28} />
                      </div>
                      <button onClick={() => toggleModule(mod.id)} className={`w-14 h-7 rounded-full p-1 transition-all ${mod.status ? 'bg-brand-600' : 'bg-gray-700'}`}>
                         <div className={`w-5 h-5 bg-white rounded-full transition-all ${mod.status ? 'translate-x-7' : ''}`}></div>
                      </button>
                   </div>
                   <h4 className="text-lg font-black text-white mb-2">{mod.name}</h4>
                   <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{mod.desc}</p>
                   <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${mod.status ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${mod.status ? 'text-green-500' : 'text-red-500'}`}>{mod.status ? 'OPERATIONAL' : 'OFFLINE'}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )}

      {activeTab === 'broadcast' && (
        <div className="animate-in fade-in slide-in-from-right duration-500 max-w-4xl space-y-10">
           <div className="mb-4">
             <h2 className="text-4xl font-black text-white tracking-tighter mb-2">Platform Broadcast</h2>
             <p className="text-gray-500 font-medium">Send a global alert to all active users on the platform.</p>
           </div>

           <div className="bg-gray-900 p-10 rounded-[3rem] border border-gray-800 space-y-8">
              <div className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Broadcast Message</label>
                    <textarea placeholder="e.g. System maintenance scheduled for Sunday at 2 AM WAT." className="w-full bg-black/40 border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:ring-1 focus:ring-brand-600 font-bold" rows={4}></textarea>
                 </div>
                 <div className="flex items-center gap-4">
                    <label className="flex-1 p-5 bg-white/5 border border-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all flex items-center gap-4">
                       <input type="radio" name="level" defaultChecked className="w-5 h-5 text-brand-600" />
                       <div>
                          <p className="text-sm font-black text-white uppercase tracking-tight">Info Level</p>
                          <p className="text-xs text-gray-500">Standard notification for all users.</p>
                       </div>
                    </label>
                    <label className="flex-1 p-5 bg-red-600/5 border border-red-600/10 rounded-2xl cursor-pointer hover:bg-red-600/10 transition-all flex items-center gap-4">
                       <input type="radio" name="level" className="w-5 h-5 text-red-600" />
                       <div>
                          <p className="text-sm font-black text-red-500 uppercase tracking-tight">Urgent Level</p>
                          <p className="text-xs text-red-800/60 font-medium">High priority modal popup.</p>
                       </div>
                    </label>
                 </div>
              </div>
              <button className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-900/40 flex items-center justify-center gap-3">
                 <BellRing size={20}/> Send Global Broadcast
              </button>
           </div>
        </div>
      )}

      {activeTab === 'revenue' && (
        <div className="space-y-10 animate-in fade-in slide-in-from-right duration-500">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-900 border border-gray-800 rounded-[2.5rem]">
                 <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Automated Collection</p>
                 <p className="text-4xl font-black text-white tracking-tighter">₦38.4M</p>
              </div>
              <div className="p-8 bg-gray-900 border border-gray-800 rounded-[2.5rem]">
                 <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Manual Bank Transfers</p>
                 <p className="text-4xl font-black text-white tracking-tighter">₦4.1M</p>
              </div>
              <div className="p-8 bg-brand-600 rounded-[2.5rem] shadow-2xl">
                 <p className="text-[10px] font-black text-brand-200 uppercase tracking-widest mb-2">Platform Commision</p>
                 <p className="text-4xl font-black text-white tracking-tighter">₦2.8M</p>
              </div>
           </div>

           <div className="bg-gray-900 border border-gray-800 rounded-[3rem] overflow-hidden">
              <div className="p-8 border-b border-gray-800 flex justify-between items-center bg-black/20">
                 <h3 className="text-xl font-black text-white flex items-center gap-3">
                   <CreditCard className="text-brand-600" /> Platform Transaction Ledger
                 </h3>
                 <button className="px-5 py-2.5 bg-gray-800 text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Download Master Sheet</button>
              </div>
              <table className="w-full text-left">
                <thead className="bg-black/10 border-b border-gray-800">
                  <tr className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <th className="px-10 py-6">Tx Reference</th>
                    <th className="px-10 py-6">Customer / Org</th>
                    <th className="px-10 py-6">Amount</th>
                    <th className="px-10 py-6">Channel</th>
                    <th className="px-10 py-6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                   {[
                     { ref: 'PS-10294', org: 'Paystack Africa', amt: '₦35,000', chan: 'Paystack Card', stat: 'Completed' },
                     { ref: 'MN-94821', org: 'Kuda MFB', amt: '₦120,000', chan: 'Manual Transfer', stat: 'Pending' },
                     { ref: 'PS-88402', org: 'Glo Mobile', amt: '₦1,400,000', chan: 'Enterprise Billing', stat: 'Completed' },
                   ].map((tx, i) => (
                     <tr key={i} className="group hover:bg-white/5 transition-all">
                       <td className="px-10 py-7 text-xs font-black text-gray-500">#{tx.ref}</td>
                       <td className="px-10 py-7">
                         <p className="text-sm font-black text-white">{tx.org}</p>
                         <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Subscription Renewal</p>
                       </td>
                       <td className="px-10 py-7 text-lg font-black text-white">{tx.amt}</td>
                       <td className="px-10 py-7 text-xs font-bold text-gray-400">{tx.chan}</td>
                       <td className="px-10 py-7 text-right">
                          <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${tx.stat === 'Completed' ? 'border-green-600 text-green-500' : 'border-yellow-600 text-yellow-500 animate-pulse'}`}>
                            {tx.stat}
                          </span>
                       </td>
                     </tr>
                   ))}
                </tbody>
              </table>
           </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDashboard;
