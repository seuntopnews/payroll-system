
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, Banknote, ShieldCheck, Sparkles, Zap, CheckCircle, ArrowRight, 
  Users, Clock, Shield, Smartphone, Globe, GraduationCap, Play, Lock, X, XCircle,
  Calendar, Check, Menu, ChevronRight, Activity, TrendingUp, Building2,
  FileSearch, UserCheck, BarChart3, Fingerprint, MousePointer2, Rocket,
  ShieldAlert, BadgeCheck, Scale, Globe2, HelpCircle, MessageCircle, AlertTriangle,
  Layers, Database, Cpu, Search, MapPin
} from 'lucide-react';

const MarketingLanding = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [activeComplianceTab, setActiveComplianceTab] = useState('LIRS');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const goToLogin = () => navigate('/auth/select?mode=login');
  const goToSignup = () => navigate('/auth/select?mode=signup');

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-600 selection:text-white overflow-x-hidden">
      {/* Platform Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-2xl py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:rotate-12 transition-transform">H</div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">Hotjobsconnect</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            <button onClick={() => scrollToSection('why-us')} className="hover:text-brand-600 transition-colors uppercase">Why Us</button>
            <button onClick={() => scrollToSection('solutions')} className="hover:text-brand-600 transition-colors uppercase">Solutions</button>
            <button onClick={() => scrollToSection('compliance')} className="hover:text-brand-600 transition-colors uppercase">Compliance</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-brand-600 transition-colors uppercase">Pricing</button>
            <button onClick={() => setShowDemoModal(true)} className="text-brand-600 flex items-center gap-2 group uppercase border-b-2 border-transparent hover:border-brand-600 py-1 transition-all">
              <Calendar size={14} /> Request Demo
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={goToLogin} className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">Log In</button>
            <button onClick={goToSignup} className="bg-gray-900 text-white px-7 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black hover:shadow-2xl hover:shadow-gray-200 transition-all active:scale-95">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero: The Infrastructure for Growth */}
      <section className="relative pt-48 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1200px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-50/60 via-transparent to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-xl shadow-brand-100/50 border border-brand-100 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              <div className="w-2 h-2 bg-brand-600 rounded-full animate-ping"></div>
              Scaling Africa's Workforce with Certainty
            </div>
            <h1 className="text-7xl md:text-[7.5rem] font-black text-gray-900 leading-[0.82] mb-10 tracking-tighter">
              The Engine of <br/>
              <span className="text-brand-600 relative">
                Excellence.
              </span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-lg font-medium italic">
              Unified payroll, AI recruitment, and total statutory compliance for the modern Nigerian enterprise. No more manual spreadsheets. No more tax audit panics.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={goToSignup}
                className="px-12 py-6 bg-brand-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-brand-700 shadow-2xl shadow-brand-200 transition-all flex items-center justify-center gap-3 active:scale-95 group"
              >
                Launch Workspace
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="px-12 py-6 bg-white border-2 border-gray-100 text-gray-900 rounded-[2.5rem] font-black text-xl hover:border-brand-600 hover:bg-brand-50 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Explore Modules
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
             <div className="relative z-10 bg-white p-4 rounded-[4rem] shadow-[0_100px_200px_-40px_rgba(255,107,0,0.25)] border border-gray-100 group">
                <div className="bg-gray-950 p-10 rounded-[3.5rem] border border-gray-800 relative overflow-hidden">
                   <div className="flex justify-between items-center mb-12">
                      <div className="flex items-center gap-4">
                         <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><Activity size={28}/></div>
                         <div>
                            <h4 className="font-black text-white uppercase tracking-tight text-lg">Payroll Kernel</h4>
                            <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Live NIP Disbursement Node</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-500 text-[10px] font-black rounded-lg uppercase tracking-widest border border-green-500/20">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        System Healthy
                      </div>
                   </div>
                   <div className="space-y-10">
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Net Disbursement Vol.</p>
                         <p className="text-7xl font-black text-white tracking-tighter">₦84.2M</p>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-brand-600 transition-all cursor-pointer">
                            <p className="text-[10px] font-black text-gray-500 uppercase mb-2">LIRS/FIRS Tax</p>
                            <p className="text-3xl font-black text-brand-500 tracking-tight">₦8.2M</p>
                         </div>
                         <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-brand-600 transition-all cursor-pointer">
                            <p className="text-[10px] font-black text-gray-500 uppercase mb-2">Pension RSA</p>
                            <p className="text-3xl font-black text-brand-500 tracking-tight">₦4.8M</p>
                         </div>
                      </div>
                      <div className="flex items-center justify-between bg-brand-600 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group/btn cursor-pointer" onClick={goToSignup}>
                         <div className="relative z-10">
                            <p className="text-[10px] font-black uppercase text-brand-100 tracking-widest mb-1">Authorization Pending</p>
                            <p className="text-lg font-black italic">Approve Cycle #OCT-24</p>
                         </div>
                         <Zap className="group-hover/btn:scale-125 transition-transform relative z-10" fill="currentColor" />
                         <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      </div>
                   </div>
                </div>
             </div>
             <MousePointer2 className="absolute -bottom-10 -right-10 text-brand-600 w-16 h-16 drop-shadow-2xl animate-bounce" />
          </div>
        </div>
      </section>

      {/* Trust & Ecosystem */}
      <section className="py-24 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mb-16">Powering the New African Economy</p>
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {['PAYSTACK', 'FLUTTERWAVE', 'KUDA', 'MONIEPOINT', 'PAGA', 'FAIRMONEY'].map(brand => (
                <span key={brand} className="text-3xl font-black tracking-tighter hover:text-brand-600 transition-colors">{brand}</span>
              ))}
           </div>
        </div>
      </section>

      {/* Compliance Command Center - DETAILED FIX */}
      <section className="py-32 bg-gray-950 text-white overflow-hidden relative" id="compliance">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest mb-8 rounded-lg">Compliance Command</div>
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85]">Zero-Risk <br/><span className="text-brand-500 italic">Statutory Hub.</span></h2>
                 <p className="text-gray-400 text-xl font-medium leading-relaxed mb-12 max-w-lg">
                    Hotjobsconnect automatically handles the entire Nigerian compliance stack. No more penalties. No more manual filing.
                 </p>
                 
                 <div className="space-y-6">
                    {[
                      { id: 'LIRS', label: 'LIRS & FIRS (Tax)', desc: 'Automatic PAYE calculation and instant schedule generation for direct LIRS/FIRS portal uploads.' },
                      { id: 'PENSION', label: 'Pension Reform Act', desc: 'Precise 18% contribution splits (8% employee / 10% employer) with automated PFA portal sync.' },
                      { id: 'NHF', label: 'NHF & NSITF', desc: 'Deduction and reporting for National Housing Fund (2.5%) and Employee Compensation Act compliance.' }
                    ].map(tab => (
                      <div 
                        key={tab.id}
                        onClick={() => setActiveComplianceTab(tab.id)}
                        className={`p-6 rounded-[2.5rem] border-2 transition-all cursor-pointer group ${activeComplianceTab === tab.id ? 'bg-brand-600 border-brand-600' : 'bg-white/5 border-white/10 hover:border-brand-600/50'}`}
                      >
                         <h4 className="text-lg font-black uppercase tracking-tight mb-2 flex items-center gap-3">
                           {activeComplianceTab === tab.id ? <CheckCircle className="text-white" /> : <Layers className="text-brand-600" />}
                           {tab.label}
                         </h4>
                         <p className={`text-sm font-medium leading-relaxed ${activeComplianceTab === tab.id ? 'text-brand-100' : 'text-gray-500 group-hover:text-gray-300'}`}>
                           {tab.desc}
                         </p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative group">
                 <div className="bg-white p-2 rounded-[4rem] shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="bg-gray-50 p-10 rounded-[3.5rem] border border-gray-100 overflow-hidden">
                       <div className="flex justify-between items-center mb-10">
                          <h5 className="text-xl font-black text-gray-900 uppercase tracking-tighter">Statutory Ledger</h5>
                          <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest animate-pulse">Auto-Filing...</span>
                       </div>
                       <div className="space-y-6">
                          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">LIRS Lagos Payment</p>
                             <div className="flex justify-between items-end">
                                <p className="text-4xl font-black text-gray-900 tracking-tighter">₦4,240,000</p>
                                <span className="text-green-600 font-black text-[10px] uppercase">Synced</span>
                             </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-5 bg-white rounded-2xl border border-gray-100">
                                <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Pension RSA</p>
                                <p className="text-xl font-black text-brand-600">₦2.1M</p>
                             </div>
                             <div className="p-5 bg-white rounded-2xl border border-gray-100">
                                <p className="text-[10px] font-black text-gray-400 uppercase mb-1">NHF Housing</p>
                                <p className="text-xl font-black text-brand-600">₦450k</p>
                             </div>
                          </div>
                          <div className="pt-6">
                             <button className="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all">Download Statutory Pack</button>
                             <p className="text-center text-[9px] font-black text-gray-300 uppercase mt-4 tracking-widest italic">PRN: Hotjobs-Stat-84291-Lagos</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-600/30 blur-[100px] rounded-full"></div>
                 <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-600/30 blur-[100px] rounded-full"></div>
              </div>
           </div>
        </div>
        <Database className="absolute -right-20 -top-20 w-[500px] h-[500px] text-white opacity-[0.02] rotate-12" />
      </section>

      {/* Advanced Feature Grid */}
      <section className="py-32" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8">Unified <br/>Capabilities.</h2>
              <p className="text-gray-500 text-xl font-medium">Why disconnect your business? Hotjobsconnect replaces seven tools with one powerful infrastructure.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "NIP Payroll", icon: Banknote, desc: "Instant disbursements to all banks in Nigeria via NIBSS protocol integration.", color: "text-brand-600", bg: "bg-brand-50" },
                { title: "AI Candidate Search", icon: Sparkles, desc: "Search 2.4M verified profiles. Gemini AI matches skill-to-role with 98% accuracy.", color: "text-blue-600", bg: "bg-blue-50" },
                { title: "Identity Vault", icon: Fingerprint, desc: "Real-time BVN and NIN verification to eliminate ghost workers and identity fraud.", color: "text-green-600", bg: "bg-green-50" },
                { title: "Earned Wage Access", icon: Zap, desc: "Give staff access to their earned salary before payday. Boost retention by 40%.", color: "text-yellow-600", bg: "bg-yellow-50" },
                { title: "Geo-Fenced Clock", icon: MapPin, desc: "GPS-verified attendance tracking. Staff can only clock in from approved HQ zones.", color: "text-purple-600", bg: "bg-purple-50" },
                { title: "Enterprise API", icon: Cpu, desc: "Fully document API for tech firms to integrate payroll into their existing internal tools.", color: "text-red-600", bg: "bg-red-50" }
              ].map((feat, i) => (
                <div key={i} className="group p-10 bg-gray-50 rounded-[3.5rem] border-2 border-transparent hover:border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                   <div className={`w-20 h-20 ${feat.bg} ${feat.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <feat.icon size={36} />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-none">{feat.title}</h3>
                   <p className="text-gray-500 font-medium text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Pricing: High-Impact Tiers (5 Varieties) */}
      <section className="py-32 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24 max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8 leading-none">Scale Your <br/><span className="text-brand-600 italic">Ambition.</span></h2>
              <p className="text-gray-500 text-lg font-medium italic">Professional plans designed for the Nigerian business lifecycle.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
              {/* Launch */}
              <div className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 flex flex-col hover:border-brand-200 transition-all shadow-sm group">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 group-hover:text-brand-600">Launch Node</p>
                 <div className="mb-10">
                    <span className="text-5xl font-black tracking-tighter">₦0</span>
                    <span className="text-gray-400 text-xs font-black uppercase ml-1">Forever</span>
                 </div>
                 <ul className="space-y-4 flex-1 mb-10">
                    {['Up to 3 Staff', 'Payslip Portal', 'Basic KYC Sync'].map(li => (
                      <li key={li} className="flex items-center gap-2 text-xs text-gray-500 font-bold italic"><Check size={14} className="text-brand-600" /> {li}</li>
                    ))}
                 </ul>
                 <button onClick={goToSignup} className="w-full py-4 bg-gray-100 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">Start Free</button>
              </div>

              {/* Growth */}
              <div className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 flex flex-col hover:border-brand-200 transition-all shadow-sm group">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 group-hover:text-brand-600">Growth Node</p>
                 <div className="mb-10">
                    <span className="text-5xl font-black tracking-tighter">₦55k</span>
                    <span className="text-gray-400 text-[10px] font-black uppercase ml-1">/mo</span>
                 </div>
                 <ul className="space-y-4 flex-1 mb-10">
                    {['Up to 20 Staff', 'Recruitment Match', 'Statutory Schedules'].map(li => (
                      <li key={li} className="flex items-center gap-2 text-xs text-gray-500 font-bold italic"><Check size={14} className="text-brand-600" /> {li}</li>
                    ))}
                 </ul>
                 <button onClick={goToSignup} className="w-full py-4 bg-gray-100 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-600 hover:text-white transition-all">Select Node</button>
              </div>

              {/* Business - THE CHOICE */}
              <div className="p-10 rounded-[4rem] bg-gray-950 text-white relative shadow-2xl flex flex-col transform lg:scale-110 z-10 border-4 border-brand-600 overflow-hidden group">
                 <div className="absolute top-6 right-6 px-3 py-1 bg-brand-600 rounded-full text-[8px] font-black uppercase tracking-[0.2em]">Most Recommended</div>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6">Business Standard</p>
                 <div className="mb-10">
                    <span className="text-5xl font-black tracking-tighter">₦145k</span>
                    <span className="text-gray-500 text-[10px] font-black uppercase ml-1">/mo</span>
                 </div>
                 <ul className="space-y-5 flex-1 mb-12">
                    {['Up to 75 Staff Node', 'Earned Wage Access', 'LIRS Direct API', 'Priority NIP Sync', 'Full HR Task Hub'].map(li => (
                      <li key={li} className="flex items-center gap-4 text-xs text-white font-black"><div className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center shrink-0"><Check size={12} className="text-white" /></div> {li}</li>
                    ))}
                 </ul>
                 <button onClick={goToSignup} className="w-full py-5 bg-brand-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-900 transition-all active:scale-95 relative z-10">Scale Now</button>
                 <Zap size={160} className="absolute -right-16 -bottom-16 text-white opacity-[0.03] rotate-12 group-hover:scale-110 transition-transform duration-1000" />
              </div>

              {/* Enterprise */}
              <div className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 flex flex-col hover:border-brand-200 transition-all shadow-sm group">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 group-hover:text-blue-600">Enterprise Core</p>
                 <div className="mb-10">
                    <span className="text-5xl font-black tracking-tighter">₦450k</span>
                    <span className="text-gray-400 text-[10px] font-black uppercase ml-1">/mo</span>
                 </div>
                 <ul className="space-y-4 flex-1 mb-10">
                    {['Up to 250 Staff', 'White-labeled Payslips', 'Custom API Access', 'On-site HR Training'].map(li => (
                      <li key={li} className="flex items-center gap-2 text-xs text-gray-500 font-bold italic"><Check size={14} className="text-blue-600" /> {li}</li>
                    ))}
                 </ul>
                 <button onClick={goToSignup} className="w-full py-4 bg-gray-100 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">Get Core</button>
              </div>

              {/* Conglomerate */}
              <div className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 flex flex-col hover:border-brand-200 transition-all shadow-sm group">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 group-hover:text-purple-600">Infinite Root</p>
                 <div className="mb-10">
                    <span className="text-5xl font-black tracking-tighter italic">Custom</span>
                 </div>
                 <ul className="space-y-4 flex-1 mb-10">
                    {['250+ Global Nodes', 'Dedicated Audit Hub', 'Custom Multi-State Logic', 'Global Payout Engine'].map(li => (
                      <li key={li} className="flex items-center gap-2 text-xs text-gray-500 font-bold italic"><Check size={14} className="text-purple-600" /> {li}</li>
                    ))}
                 </ul>
                 <button onClick={() => setShowDemoModal(true)} className="w-full py-4 bg-gray-100 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">Talk to Sales</button>
              </div>
           </div>
        </div>
      </section>

      {/* The Ledger of Trust: Stats & Testimonials */}
      <section className="py-48 bg-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <h2 className="text-5xl md:text-[8rem] font-black text-gray-900 tracking-tighter leading-[0.8] mb-12">The Proof <br/><span className="text-brand-600 italic">is Live.</span></h2>
                  <div className="grid grid-cols-2 gap-10">
                     {[
                       { label: 'Market Talent Index', val: '2.4M+' },
                       { label: 'Monthly Payout Flow', val: '₦2.8B' },
                       { label: 'Uptime Integrity', val: '99.98%' },
                       { label: 'Partner Banks', val: '24' }
                     ].map((stat, i) => (
                       <div key={i} className="group cursor-default">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">{stat.label}</p>
                          <p className="text-5xl font-black text-gray-900 tracking-tighter group-hover:text-brand-600 transition-colors">{stat.val}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="bg-gray-50 p-12 rounded-[4rem] border-2 border-gray-100 relative z-10">
                     <p className="text-3xl font-black text-gray-900 tracking-tight leading-relaxed italic mb-12">
                        "Hotjobsconnect is the only platform that truly understands the complexity of Nigerian payroll. We scaled from 20 to 500 staff without doubling our HR budget. The compliance automation is a life-saver."
                     </p>
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-brand-600 rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-brand-200">OO</div>
                        <div>
                           <h5 className="text-xl font-black text-gray-900 tracking-tight uppercase">Olumide Ojo</h5>
                           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operations Director, Sterling Logistics</p>
                        </div>
                     </div>
                     <Sparkles className="absolute -top-6 -right-6 text-brand-600 w-16 h-16" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-600/5 blur-[60px] rounded-full"></div>
               </div>
            </div>
         </div>
      </section>

      {/* Final Conversion Hub */}
      <section className="py-64 bg-brand-600 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-6xl md:text-[11rem] font-black text-white mb-16 tracking-tighter leading-[0.75]">Modern <br/>Infrastructure.</h2>
            <p className="text-brand-100 text-3xl font-medium mb-20 max-w-2xl mx-auto opacity-90 italic">
               Join 1,200+ organizations building the future of Africa on Hotjobsconnect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <button onClick={goToSignup} className="px-16 py-8 bg-white text-brand-600 rounded-[4rem] font-black text-2xl hover:shadow-[0_30px_70px_rgba(255,255,255,0.4)] hover:-translate-y-2 transition-all active:scale-95 flex items-center gap-4 justify-center">
                  Launch Free Node
                  <Rocket size={32} />
               </button>
               <button onClick={() => setShowDemoModal(true)} className="px-16 py-8 bg-brand-950 text-white rounded-[4rem] font-black text-2xl hover:bg-black transition-all flex items-center gap-4 justify-center">
                  Book A Demo
                  <Smartphone size={32} />
               </button>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-white opacity-[0.03] blur-[150px] rounded-full"></div>
         <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-brand-400 opacity-[0.1] blur-[150px] rounded-full"></div>
         <Zap className="absolute -left-20 -bottom-20 w-[700px] h-[700px] text-white opacity-[0.05] rotate-12" />
      </section>

      {/* Footer System */}
      <footer className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
               <div className="max-w-sm">
                  <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                     <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg">H</div>
                     <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">Hotjobsconnect</span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed italic">
                     Building the essential infrastructure for African excellence. Secure, verified, and always compliant.
                  </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24">
                  <div>
                     <h5 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Modules</h5>
                     <ul className="space-y-4 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                        <li><button onClick={() => scrollToSection('solutions')} className="hover:text-brand-600 transition-colors uppercase">Payroll Node</button></li>
                        <li><button onClick={() => scrollToSection('why-us')} className="hover:text-brand-600 transition-colors uppercase">Talent Marketplace</button></li>
                        <li><button onClick={() => scrollToSection('compliance')} className="hover:text-brand-600 transition-colors uppercase">Statutory Engine</button></li>
                        <li><button onClick={() => scrollToSection('pricing')} className="hover:text-brand-600 transition-colors uppercase">Pricing Matrix</button></li>
                     </ul>
                  </div>
                  <div>
                     <h5 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Infrastructure</h5>
                     <ul className="space-y-4 text-[11px] font-black text-gray-400 uppercase tracking-widest uppercase">
                        <li><a href="#" className="hover:text-brand-600 transition-colors">Developer Portal</a></li>
                        <li><a href="#" className="hover:text-brand-600 transition-colors">API Docs</a></li>
                        <li><a href="#" className="hover:text-brand-600 transition-colors">System Uptime</a></li>
                        <li><a href="#" className="hover:text-brand-600 transition-colors">Status Node</a></li>
                     </ul>
                  </div>
                  <div className="hidden lg:block">
                     <h5 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Legal Core</h5>
                     <ul className="space-y-4 text-[11px] font-black text-gray-400 uppercase tracking-widest uppercase">
                        <li><a href="#" className="hover:text-brand-600 transition-colors">Compliance Policy</a></li>
                        <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Shield</a></li>
                        <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-gray-100">
               <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">© 2025 HOTJOBSCONNECT AFRICA • CLOUD INFRASTRUCTURE LAGOS</p>
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300 border border-gray-100 hover:text-brand-600 transition-colors cursor-pointer"><Globe2 size={18} /></div>
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300 border border-gray-100 hover:text-brand-600 transition-colors cursor-pointer"><ShieldCheck size={18} /></div>
               </div>
            </div>
         </div>
      </footer>

      {/* Demo Modal System */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-2xl animate-in fade-in">
           <div className="bg-white w-full max-w-xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-12 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                 <div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter leading-none uppercase">Enterprise Demo</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mt-4 italic">Request a Private Architectural Tour</p>
                 </div>
                 <button onClick={() => setShowDemoModal(false)} className="p-4 hover:bg-gray-100 rounded-[2rem] transition-colors">
                    <X size={28} className="text-gray-400" />
                 </button>
              </div>
              <form className="p-12 space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Hotjobs System Alert: Demo request transmitted. An Account Executive will be in touch shortly."); setShowDemoModal(false); }}>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Name</label>
                       <input type="text" required placeholder="Femi Ola" className="w-full px-7 py-5 bg-gray-50 border-none rounded-[2rem] focus:ring-2 focus:ring-brand-500 outline-none font-bold" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Enterprise Email</label>
                       <input type="email" required placeholder="ceo@company.ng" className="w-full px-7 py-5 bg-gray-50 border-none rounded-[2rem] focus:ring-2 focus:ring-brand-500 outline-none font-bold" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Global Workforce Nodes</label>
                    <select className="w-full px-7 py-5 bg-gray-50 border-none rounded-[2rem] focus:ring-2 focus:ring-brand-500 outline-none font-bold appearance-none">
                       <option>Under 50 Staff</option>
                       <option>50 - 200 Staff</option>
                       <option>200 - 1,000 Staff</option>
                       <option>1,000+ Global Conglomerate</option>
                    </select>
                 </div>
                 <button type="submit" className="w-full py-7 bg-brand-600 text-white rounded-[2.5rem] font-black text-xl uppercase tracking-widest hover:bg-brand-700 shadow-2xl shadow-brand-100 transition-all mt-6 active:scale-95">
                    Connect With Specialist
                 </button>
                 <p className="text-center text-[9px] font-black text-gray-300 uppercase tracking-[0.5em]">Enterprise Encryption Active</p>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default MarketingLanding;
