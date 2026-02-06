
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, Banknote, ShieldCheck, Sparkles, Zap, CheckCircle, ArrowRight, 
  Users, Clock, Shield, Smartphone, Globe, GraduationCap, Play, Lock, X, 
  Calendar, Check, Menu, ChevronRight, Activity, TrendingUp, Building2,
  FileSearch, UserCheck, BarChart3
} from 'lucide-react';

const MarketingLanding = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-600 selection:text-white overflow-x-hidden">
      {/* Dynamic Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:rotate-12 transition-transform">H</div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">Hotjobsconnect</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#solutions" className="hover:text-brand-600 transition-colors">Solutions</a>
            <a href="#compliance" className="hover:text-brand-600 transition-colors">Compliance</a>
            <a href="#pricing" className="hover:text-brand-600 transition-colors">Pricing</a>
            <button onClick={() => setShowDemoModal(true)} className="text-brand-600 flex items-center gap-2 group">
              <Calendar size={14} /> Request Demo
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/auth/select?mode=login')} className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">Log In</button>
            <button onClick={() => navigate('/auth/select?mode=signup')} className="bg-gray-900 text-white px-7 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black hover:shadow-2xl hover:shadow-gray-200 transition-all active:scale-95">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section: Enterprise Focus */}
      <section className="relative pt-48 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-to-b from-brand-50/80 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-xl shadow-brand-100/50 border border-brand-100 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              <ShieldCheck size={14} className="animate-pulse" /> Verified by NIBSS & CBN Compliance
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black text-gray-900 leading-[0.85] mb-8 tracking-tighter">
              The Gold Standard for <br/>
              <span className="text-brand-600 italic">Workforce Excellence.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-lg font-medium">
              Unified recruitment, automated Nigerian payroll, and deep background verification. Built for the high-growth enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => navigate('/auth/select?mode=signup')}
                className="px-10 py-5 bg-brand-600 text-white rounded-[2rem] font-black text-lg hover:bg-brand-700 shadow-2xl shadow-brand-200 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Hire & Pay Now
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-[2rem] font-black text-lg hover:border-brand-600 hover:bg-brand-50 transition-all active:scale-95"
              >
                Watch Video Tour
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
             <div className="relative z-10 bg-white p-3 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(255,107,0,0.15)] border border-gray-100 group">
                <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                   <div className="flex justify-between items-center mb-10">
                      <div className="flex items-center gap-3">
                         <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><Activity size={24}/></div>
                         <div>
                            <h4 className="font-black text-gray-900 uppercase tracking-tight">Financial Hub</h4>
                            <p className="text-[10px] font-black text-gray-400 uppercase">Real-time Node</p>
                         </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500 text-white text-[9px] font-black rounded-lg animate-pulse">SYSTEM ACTIVE</span>
                   </div>
                   <div className="space-y-8">
                      <div className="flex justify-between items-end border-b border-gray-100 pb-6">
                         <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total October Payroll</p>
                            <p className="text-5xl font-black text-gray-900 tracking-tighter">₦24.8M</p>
                         </div>
                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <TrendingUp size={24} />
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:border-brand-200 transition-all">
                            <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Tax Remitted</p>
                            <p className="text-xl font-black text-brand-600 tracking-tight">₦2.4M</p>
                         </div>
                         <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:border-brand-200 transition-all">
                            <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Pension (RSA)</p>
                            <p className="text-xl font-black text-brand-600 tracking-tight">₦1.8M</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 bg-gray-900 text-white p-5 rounded-3xl">
                         <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center"><UserCheck size={20}/></div>
                         <div>
                            <p className="text-[10px] font-black uppercase text-brand-400 tracking-widest">Verification Status</p>
                            <p className="text-sm font-bold">142 Employees NIBSS-Synced</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-400/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
             <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-brand-600/10 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-center text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-12">The Infrastructure Powering Nigeria's Best Companies</p>
           <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-3xl font-black tracking-tighter">PAYSTACK</span>
              <span className="text-3xl font-black tracking-tighter">KUDA</span>
              <span className="text-3xl font-black tracking-tighter">MONIEPOINT</span>
              <span className="text-3xl font-black tracking-tighter">FLUTTERWAVE</span>
              <span className="text-3xl font-black tracking-tighter">PAGA</span>
           </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">Engineered for Scale.</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium leading-relaxed">Built with the local context of the Nigerian labor market at its core.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "One-Click Payroll", desc: "Automate PAYE, NHF, and Pension schedules in seconds.", icon: Banknote, color: "text-brand-600", bg: "bg-brand-50" },
                { title: "Recruitment Sync", desc: "AI-matching for 2.4M verified Nigerian professionals.", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
                { title: "Identity Ledger", desc: "Direct BVN/NIN verification for zero-fraud onboarding.", icon: ShieldCheck, color: "text-green-600", bg: "bg-green-50" },
                { title: "Smart Analytics", desc: "Predictive attrition and salary benchmarking reports.", icon: BarChart3, color: "text-purple-600", bg: "bg-purple-50" }
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-gray-50 rounded-[3rem] hover:bg-white hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gray-100">
                   <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <item.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                   <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-32 bg-gray-50" id="compliance">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-600/10 text-brand-600 text-[10px] font-black uppercase tracking-widest mb-8 rounded-lg border border-brand-600/20">
                 Compliance Engine
              </div>
              <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-8 leading-none">Stay Compliant, <br/>Stay Ahead.</h2>
              <div className="space-y-8">
                 {[
                   { title: "Tax Automation", desc: "Direct generation of LIRS and FIRS schedules with automated monthly remittance." },
                   { title: "Pension PRA 2014", desc: "Automated 8% employee and 10% employer contribution tracking." },
                   { title: "NIBSS Integration", desc: "Bank-grade employee identity verification via BVN protocols." }
                 ].map((c, i) => (
                   <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-brand-600 font-black">{i+1}</div>
                      <div>
                         <h4 className="font-black text-gray-900 uppercase tracking-tight mb-1">{c.title}</h4>
                         <p className="text-sm text-gray-500 font-medium leading-relaxed">{c.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-gray-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <h3 className="text-3xl font-black mb-8 tracking-tight">Identity Assurance Report</h3>
              <div className="space-y-6">
                 {[
                   { name: "BVN Verification", status: "Verified", color: "text-green-400" },
                   { name: "NIN Validation", status: "Verified", color: "text-green-400" },
                   { name: "Criminal Record Check", status: "Clean", color: "text-blue-400" },
                   { name: "Guarantor Auth", status: "Pending", color: "text-yellow-400" }
                 ].map((row, i) => (
                   <div key={i} className="flex justify-between items-center py-4 border-b border-white/10">
                      <span className="text-xs font-black uppercase tracking-widest text-gray-400">{row.name}</span>
                      <span className={`text-xs font-black uppercase tracking-widest ${row.color}`}>{row.status}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-5 bg-white text-gray-900 rounded-3xl font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-50 transition-all">Download Audit Report</button>
              <ShieldCheck className="absolute -right-10 -bottom-10 w-48 h-48 text-white opacity-5 rotate-12" />
           </div>
        </div>
      </section>

      {/* Pricing: The Hotjobs Offer */}
      <section className="py-32" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">Designed for Growth.</h2>
              <p className="text-gray-500 font-medium">Clear, transparent pricing for teams of all sizes.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 rounded-[3rem] border-2 border-gray-100 flex flex-col hover:border-brand-200 transition-all duration-500">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Starter</h4>
                 <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-black">₦0</span>
                    <span className="text-gray-400 text-xs font-black uppercase">Forever</span>
                 </div>
                 <ul className="space-y-5 flex-1 mb-10">
                    {['Up to 5 Employees', 'Digital Payslips', 'NIN/BVN Verifier', 'Email Support'].map(li => (
                      <li key={li} className="flex items-center gap-3 text-sm text-gray-500 font-bold"><Check size={18} className="text-brand-600" /> {li}</li>
                    ))}
                 </ul>
                 <button onClick={() => navigate('/auth/select?mode=signup')} className="w-full py-5 bg-gray-50 text-gray-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all">Activate Plan</button>
              </div>

              <div className="p-10 rounded-[3rem] bg-gray-950 text-white relative shadow-2xl flex flex-col transform md:scale-110 z-10 border-4 border-brand-600">
                 <div className="absolute top-6 right-6 px-3 py-1 bg-brand-600 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">Popular</div>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-4">Professional</h4>
                 <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-black tracking-tighter">₦45k</span>
                    <span className="text-gray-500 text-xs font-black uppercase tracking-widest">/Month</span>
                 </div>
                 <ul className="space-y-5 flex-1 mb-10">
                    {['Up to 100 Employees', 'Recruitment Smart Sync', 'Full Compliance Filing', 'Task Automation', '24/7 Priority Chat'].map(li => (
                      <li key={li} className="flex items-center gap-3 text-sm text-white font-black"><Check size={18} className="text-brand-500" /> {li}</li>
                    ))}
                 </ul>
                 <button onClick={() => navigate('/auth/select?mode=signup')} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-900/50 transition-all">Scale My Business</button>
              </div>

              <div className="p-10 rounded-[3rem] border-2 border-gray-100 flex flex-col hover:border-brand-200 transition-all duration-500">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Enterprise</h4>
                 <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-black tracking-tighter">Custom</span>
                 </div>
                 <ul className="space-y-5 flex-1 mb-10">
                    {['Unlimited Employees', 'Custom API Access', 'Dedicated Account Lead', 'On-site Training', 'HR Policy Consulting'].map(li => (
                      <li key={li} className="flex items-center gap-3 text-sm text-gray-500 font-bold"><Check size={18} className="text-blue-600" /> {li}</li>
                    ))}
                 </ul>
                 <button onClick={() => setShowDemoModal(true)} className="w-full py-5 bg-gray-50 text-gray-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all">Talk to Sales</button>
              </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 bg-brand-600 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none">Your Future <br/>is Hotjobs.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button onClick={() => navigate('/auth/select?mode=signup')} className="px-12 py-6 bg-white text-brand-600 rounded-[2.5rem] font-black text-2xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95">Get Started Free</button>
               <button onClick={() => setShowDemoModal(true)} className="px-12 py-6 bg-brand-800 text-white rounded-[2.5rem] font-black text-2xl hover:bg-brand-900 transition-all">Request Demo</button>
            </div>
         </div>
         <Zap className="absolute -left-20 -bottom-20 w-[600px] h-[600px] text-white opacity-10 rotate-12" />
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-black">H</div>
               <span className="text-xl font-black tracking-tighter text-gray-900">Hotjobsconnect</span>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-widest text-gray-400">
               <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-brand-600 transition-colors">Compliance</a>
               <a href="#" className="hover:text-brand-600 transition-colors">API Docs</a>
            </div>
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">© 2024 HOTJOBSCONNECT AFRICA</p>
         </div>
      </footer>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-xl animate-in fade-in">
           <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-10 border-b border-gray-50 flex justify-between items-center bg-gray-50">
                 <div>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Enterprise Demo</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Unified HR Solutions</p>
                 </div>
                 <button onClick={() => setShowDemoModal(false)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors">
                    <X size={24} className="text-gray-400" />
                 </button>
              </div>
              <form className="p-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll call you in 5 minutes."); setShowDemoModal(false); }}>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                       <input type="text" required placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                       <input type="email" required placeholder="ceo@company.com" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" />
                    </div>
                 </div>
                 <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input type="tel" required placeholder="+234..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" />
                 </div>
                 <button type="submit" className="w-full py-6 bg-brand-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl shadow-brand-100 transition-all mt-6 active:scale-95">Schedule My Tour</button>
                 <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">Join 1,200+ companies scaling with Hotjobs</p>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default MarketingLanding;
