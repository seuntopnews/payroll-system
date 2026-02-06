
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Briefcase, Building2, ArrowRight, Mail, Lock, User, CheckCircle, ChevronLeft, 
  Smartphone, Globe, CreditCard, ShieldCheck, Activity, Zap, ShieldAlert 
} from 'lucide-react';

interface AuthProps {
  onLogin: (role: 'employer' | 'employee' | 'superadmin') => void;
}

export const UserSelection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';

  const handleSelection = (type: 'employer' | 'employee') => {
    if (type === 'employee') navigate(`/auth/employee/${mode}`);
    else {
      if (mode === 'signup') navigate('/welcome#pricing');
      else navigate(`/auth/login`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <button onClick={() => navigate('/welcome')} className="mb-10 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-black text-[10px] uppercase tracking-widest transition-colors">
          <ChevronLeft size={16} /> Back to Home
        </button>
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4 tracking-tighter">Enter the Ecosystem.</h2>
        <p className="text-center text-gray-500 mb-12 font-medium">Choose your portal into Nigeria's #1 unified HR network.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div onClick={() => handleSelection('employee')} className="bg-gray-50 p-10 rounded-[2.5rem] border-2 border-transparent hover:border-brand-600 hover:bg-white cursor-pointer transition-all group shadow-sm hover:shadow-2xl">
            <div className="w-16 h-16 bg-white text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all"><User size={32} /></div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Verified Employee</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">Find verified roles, track your payslips, and build a career history with identity assurance.</p>
          </div>
          <div onClick={() => handleSelection('employer')} className="bg-gray-900 p-10 rounded-[2.5rem] text-white cursor-pointer transition-all group shadow-2xl hover:scale-[1.02]">
            <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-8"><Building2 size={32} /></div>
            <h3 className="text-2xl font-black mb-2 tracking-tight">Business Hub</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">Automate payroll, compliance, and recruitment for your Nigerian workforce in one place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Login = ({ onLogin }: AuthProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'root@hotjobs.com') onLogin('superadmin');
      else onLogin('employer');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl mx-auto mb-6">H</div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Management Console</h2>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-[10px] mt-2">Secure Business Access</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all font-medium" placeholder="ceo@company.com" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="password" required className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all font-medium" placeholder="••••••••" />
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 transition-all shadow-xl active:scale-95 mt-4">
            {isLoading ? 'Decrypting...' : 'Sign In'}
          </button>
        </form>
        <div className="mt-8 p-4 bg-gray-50 rounded-xl flex items-start gap-3">
          <ShieldAlert size={16} className="text-brand-600 shrink-0 mt-0.5" />
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Super Admin Login: use <span className="text-gray-900">root@hotjobs.com</span></p>
        </div>
      </div>
    </div>
  );
};

export const Signup = ({ onLogin }: AuthProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || 'starter';
  const [step, setStep] = useState(packageName === 'starter' ? 2 : 1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); setStep(2); }, 2500);
  };

  const handleFinalSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); onLogin('employer'); }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {step === 1 ? (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><CreditCard size={32} /></div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Checkout</h2>
              <p className="text-gray-500 font-medium">Activate <span className="text-brand-600 font-black uppercase tracking-widest text-[10px]">{packageName}</span></p>
            </div>
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 mb-8 shadow-sm">
               <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <span className="text-xl font-black text-gray-900">Total Due</span>
                <span className="text-3xl font-black text-brand-600">₦35,000</span>
              </div>
              <div className="space-y-4">
                 <input type="text" placeholder="Card Number" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none" />
                 <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl" />
                    <input type="text" placeholder="CVV" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl" />
                 </div>
              </div>
            </div>
            <button onClick={handlePayment} disabled={isProcessing} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl transition-all">
              {isProcessing ? <Activity size={20} className="animate-spin mx-auto" /> : 'Confirm Order'}
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Deploy Organization</h2>
              <p className="text-gray-500 font-medium">Configure your Hotjobsconnect workspace.</p>
            </div>
            <form onSubmit={handleFinalSignup} className="space-y-4">
              <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Business Name" />
              <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Full Name" />
              <input type="email" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Work Email" />
              <input type="password" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Password" />
              <button type="submit" disabled={isProcessing} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl mt-6 active:scale-95">
                {isProcessing ? 'Deploying...' : 'Launch Workspace'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export const EmployeeLogin = ({ onLogin }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); onLogin('employee'); }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
           <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><User size={32} /></div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Employee Portal.</h2>
          <p className="text-gray-500 font-medium">Career, Finance & Verified Identity.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="email" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Email Address" />
          <input type="password" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Password" />
          <button type="submit" disabled={isLoading} className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl mt-4">
            {isLoading ? 'Accessing...' : 'Log In to My Portal'}
          </button>
        </form>
      </div>
    </div>
  );
};

export const EmployeeSignup = ({ onLogin }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); onLogin('employee'); }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Become Verified Talent.</h2>
          <p className="text-gray-500 font-medium">Join 2.4M employees already synced with top recruiters.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="First Name" />
            <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Last Name" />
          </div>
          <input type="email" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Email Address" />
          <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Primary Profession" />
          <input type="password" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Password" />
          <div className="p-5 bg-brand-50 rounded-[2rem] border border-brand-100 text-[11px] font-bold text-brand-900 flex items-start gap-4">
             <CheckCircle size={18} className="shrink-0 text-brand-600" />
             <div>Your profile is automatically indexed by the <span className="font-black">Smart Engine</span> for premium verified roles.</div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 transition-all shadow-xl mt-6 active:scale-95">
            {isLoading ? 'Processing...' : 'Create Verified Talent Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};
