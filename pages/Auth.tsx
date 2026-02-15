
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  sendEmailVerification,
  signOut
} from 'firebase/auth';
import { auth, googleProvider, microsoftProvider } from '../services/firebase';
import { 
  Briefcase, Building2, ArrowRight, Mail, Lock, User, CheckCircle, ChevronLeft, 
  Smartphone, Globe, CreditCard, ShieldCheck, Activity, Zap, ShieldAlert, AlertTriangle, Copy, Check, ExternalLink, HardDrive, Cpu, Terminal, Key, UserPlus
} from 'lucide-react';

interface AuthProps {
  onLoginSuccess: (role: 'employer' | 'employee' | 'superadmin') => void;
}

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h11v11H0z" fill="#f25022"/>
    <path d="M12 0h11v11H12z" fill="#7fbb00"/>
    <path d="M0 12h11v11H0z" fill="#00a1f1"/>
    <path d="M12 12h11v11H12z" fill="#ffb900"/>
  </svg>
);

const getFriendlyAuthError = (error: any) => {
  const code = error?.code || (typeof error === 'string' ? error : '');
  const message = error?.message || '';
  if (code.includes('unauthorized-domain') || message.includes('unauthorized-domain')) {
    return `Domain Authorization Required: ${window.location.hostname}`;
  }
  switch (code) {
    case 'auth/invalid-credential': return "Invalid login details. Please check your email and password.";
    case 'auth/email-already-in-use': return "This email is already registered. Please log in instead.";
    case 'auth/weak-password': return "Password is too weak. Please use at least 6 characters.";
    case 'auth/too-many-requests': return "Access temporarily disabled due to many failed attempts.";
    case 'auth/popup-closed-by-user': return "Sign-in popup closed before completion. Please try again.";
    default: return "Authentication failed. Please try again or check your connection.";
  }
};

const AuthErrorDisplay = ({ error }: { error: string }) => {
  if (!error) return null;
  const isDomainError = error.includes("Domain Authorization Required");
  return (
    <div className={`p-4 rounded-2xl mb-6 text-xs font-bold border flex gap-3 ${isDomainError ? 'bg-orange-50 text-orange-800 border-orange-200' : 'bg-red-50 text-red-600 border-red-100'}`}>
      <AlertTriangle size={18} className="shrink-0" />
      <div>
        <p className="font-black uppercase tracking-tight mb-1">{isDomainError ? "System Configuration" : "Error"}</p>
        <p className="font-medium">{error}</p>
      </div>
    </div>
  );
};

const SocialAuth = ({ onAuth, isLoading, role }: { onAuth: (provider: any) => void, isLoading: boolean, role: string }) => (
  <div className="space-y-3 mt-6">
    <div className="relative py-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-100"></div>
      </div>
      <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
        <span className="bg-white px-4 text-gray-400">or continue with</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <button 
        type="button"
        disabled={isLoading}
        onClick={() => onAuth(googleProvider)}
        className="flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold text-gray-700 shadow-sm active:scale-95 disabled:opacity-50"
      >
        <GoogleIcon />
        Google
      </button>
      <button 
        type="button"
        disabled={isLoading}
        onClick={() => onAuth(microsoftProvider)}
        className="flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold text-gray-700 shadow-sm active:scale-95 disabled:opacity-50"
      >
        <MicrosoftIcon />
        Microsoft
      </button>
    </div>
  </div>
);

export const UserSelection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';

  const handleRoute = (category: 'employer' | 'employee') => {
    navigate(`/auth/${category}/${mode}`);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <button onClick={() => navigate('/welcome')} className="mb-10 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-black text-[10px] uppercase tracking-widest transition-colors">
          <ChevronLeft size={16} /> Back to Home
        </button>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">
            {mode === 'login' ? 'Access Your Portal.' : 'Create Your Account.'}
          </h2>
          <p className="text-gray-500 font-medium italic">Hotjobsconnect Unified Infrastructure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div onClick={() => handleRoute('employee')} className="bg-gray-50 p-10 rounded-[2.5rem] border-2 border-transparent hover:border-brand-600 hover:bg-white cursor-pointer transition-all group shadow-sm hover:shadow-2xl">
            <div className="w-16 h-16 bg-white text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all"><User size={32} /></div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Talent Portal</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">For verified employees and jobseekers to manage careers and finance.</p>
          </div>

          <div onClick={() => handleRoute('employer')} className="bg-gray-900 p-10 rounded-[2.5rem] text-white cursor-pointer transition-all group shadow-2xl hover:scale-[1.02]">
            <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-8"><Building2 size={32} /></div>
            <h3 className="text-2xl font-black mb-2 tracking-tight">Business Hub</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">For organizations to automate payroll, compliance, and recruitment.</p>
          </div>

          <div onClick={() => navigate('/auth/superadmin/login')} className="bg-gray-100 p-10 rounded-[2.5rem] border-2 border-dashed border-gray-300 hover:border-blue-600 hover:bg-white cursor-pointer transition-all group shadow-sm">
            <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"><HardDrive size={32} /></div>
            <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Kernel Access</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">System-level administration and global platform configuration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- EMPLOYER AUTH --- */

export const Login = ({ onLoginSuccess }: AuthProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      onLoginSuccess('employer');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: any) => {
    setIsLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, provider);
      onLoginSuccess('employer');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <button onClick={() => navigate('/auth/select?mode=login')} className="mb-8 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-black text-[10px] uppercase tracking-widest transition-colors">
          <ChevronLeft size={16} /> Other Portals
        </button>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl"><Building2 size={32} /></div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter leading-none">Business Hub</h2>
            <p className="text-gray-500 font-medium text-sm mt-2">Log in to your workspace.</p>
          </div>
          <AuthErrorDisplay error={error} />
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Work Email" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Password" />
            </div>
            <button type="submit" disabled={isLoading} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl transition-all active:scale-95">
              {isLoading ? <Activity className="animate-spin mx-auto" /> : 'Sign In to Hub'}
            </button>
          </form>
          
          <SocialAuth onAuth={handleSocialAuth} isLoading={isLoading} role="employer" />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-medium">New to Hotjobs? <Link to="/auth/employer/signup" className="text-brand-600 font-black underline underline-offset-4">Create Workspace</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Signup = ({ onLoginSuccess }: AuthProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      onLoginSuccess('employer');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: any) => {
    setIsLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, provider);
      onLoginSuccess('employer');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <button onClick={() => navigate('/auth/select?mode=signup')} className="mb-8 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-black text-[10px] uppercase tracking-widest transition-colors">
          <ChevronLeft size={16} /> Other Categories
        </button>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter leading-none">Deploy Workspace</h2>
            <p className="text-gray-500 font-medium text-sm mt-2">Start managing your team professionally.</p>
          </div>
          <AuthErrorDisplay error={error} />
          <form onSubmit={handleSignup} className="space-y-4">
            <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Organization Name" />
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Work Email" />
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Create Password" />
            <button type="submit" disabled={isLoading} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl transition-all active:scale-95">
              {isLoading ? <Activity className="animate-spin mx-auto" /> : 'Launch Hub'}
            </button>
          </form>

          <SocialAuth onAuth={handleSocialAuth} isLoading={isLoading} role="employer" />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-medium">Already have a hub? <Link to="/auth/employer/login" className="text-brand-600 font-black underline underline-offset-4">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- EMPLOYEE AUTH --- */

export const EmployeeLogin = ({ onLoginSuccess }: AuthProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      onLoginSuccess('employee');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: any) => {
    setIsLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, provider);
      onLoginSuccess('employee');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <button onClick={() => navigate('/auth/select?mode=login')} className="mb-8 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-black text-[10px] uppercase tracking-widest transition-colors">
          <ChevronLeft size={16} /> Other Portals
        </button>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-brand-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"><User size={32} /></div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter leading-none">Talent Sign In</h2>
            <p className="text-gray-500 font-medium text-sm mt-2">Access your career dashboard.</p>
          </div>
          <AuthErrorDisplay error={error} />
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Email Address" />
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Password" />
            <button type="submit" disabled={isLoading} className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black shadow-xl transition-all active:scale-95">
              {isLoading ? <Activity className="animate-spin mx-auto" /> : 'Log In'}
            </button>
          </form>

          <SocialAuth onAuth={handleSocialAuth} isLoading={isLoading} role="employee" />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-medium">New talent? <Link to="/auth/employee/signup" className="text-brand-600 font-black underline underline-offset-4">Join Ecosystem</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EmployeeSignup = ({ onLoginSuccess }: AuthProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      onLoginSuccess('employee');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: any) => {
    setIsLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, provider);
      onLoginSuccess('employee');
    } catch (err: any) {
      setError(getFriendlyAuthError(err));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <button onClick={() => navigate('/auth/select?mode=signup')} className="mb-8 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-black text-[10px] uppercase tracking-widest transition-colors">
          <ChevronLeft size={16} /> Back to Categories
        </button>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-brand-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4"><UserPlus size={32} /></div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter leading-none">Join Ecosystem</h2>
            <p className="text-gray-500 font-medium text-sm mt-2">Become verified talent in 60 seconds.</p>
          </div>
          <AuthErrorDisplay error={error} />
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="First Name" />
              <input type="text" required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Last Name" />
            </div>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Email Address" />
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" placeholder="Create Password" />
            <button type="submit" disabled={isLoading} className="w-full py-5 bg-brand-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 shadow-xl transition-all active:scale-95">
              {isLoading ? <Activity className="animate-spin mx-auto" /> : 'Create Account'}
            </button>
          </form>

          <SocialAuth onAuth={handleSocialAuth} isLoading={isLoading} role="employee" />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-medium">Already verified? <Link to="/auth/employee/login" className="text-brand-600 font-black underline underline-offset-4">Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- SUPER ADMIN --- */

export const SuperAdminLogin = ({ onLoginSuccess }: AuthProps) => {
  const navigate = useNavigate();
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTerminalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      if (key === 'HOTJOBS_ROOT_2025') onLoginSuccess('superadmin');
      else {
        setError('System Key Reject: Invalid Root Authorization');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 font-mono">
      <div className="max-w-md w-full">
        <button onClick={() => navigate('/auth/select?mode=login')} className="mb-8 flex items-center gap-2 text-blue-500 hover:text-white font-black text-[10px] uppercase tracking-widest transition-colors">
          <ChevronLeft size={16} /> System Nodes
        </button>
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-blue-600/10 border border-blue-600/30 rounded-3xl flex items-center justify-center text-blue-500 mx-auto mb-6 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            <Key size={40} className="animate-pulse" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase italic">Kernel Login</h2>
          <p className="text-gray-500 text-[10px] mt-2 tracking-[0.3em] font-bold">AUTHORIZED NODES ONLY</p>
        </div>
        {error && <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl text-red-500 text-xs font-bold mb-6 flex items-center gap-3"><ShieldAlert size={16} />{error}</div>}
        <form onSubmit={handleTerminalLogin} className="space-y-6">
          <div className="relative">
            <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={18} />
            <input type="password" required value={key} onChange={e => setKey(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-blue-400 outline-none focus:ring-1 focus:ring-blue-600 transition-all font-mono" placeholder="PROMPT_KEY" />
          </div>
          <button type="submit" disabled={isLoading} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all active:scale-95">
            {isLoading ? 'Decrypting Access...' : 'Verify Node Authorization'}
          </button>
        </form>
      </div>
    </div>
  );
};
