
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Briefcase, Building2, ArrowRight, Mail, Lock, User, CheckCircle, ChevronLeft, Smartphone, Globe } from 'lucide-react';

interface AuthProps {
  onLogin: (role: 'employer' | 'employee') => void;
}

// --- 1. Welcome Screen ---
export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-900 via-brand-800 to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Image/Brand */}
        <div className="md:w-1/2 bg-brand-50 p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="w-32 h-32 bg-brand-100 rounded-full absolute -top-10 -left-10 opacity-50"></div>
          <div className="w-64 h-64 bg-brand-100 rounded-full absolute -bottom-20 -right-20 opacity-50"></div>
          
          <div className="w-16 h-16 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-lg mb-6 z-10">
            H
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 z-10">Hotjobsconnect</h1>
          <p className="text-gray-600 mb-8 z-10">The Future of Payroll & Recruitment.</p>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Team" 
            className="rounded-xl shadow-md z-10 object-cover h-48 w-full"
          />
        </div>

        {/* Right Side - Actions */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h2>
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/auth/select?mode=login')}
              className="w-full py-3 px-6 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-2"
            >
              Log In
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigate('/auth/select?mode=signup')}
              className="w-full py-3 px-6 bg-white border-2 border-gray-100 text-gray-700 rounded-xl font-bold text-lg hover:border-brand-200 hover:bg-gray-50 transition-all"
            >
              Create Account
            </button>
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- 2. User Type Selection ---
export const UserSelection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login'; // 'login' or 'signup'

  const handleSelection = (type: 'employer' | 'jobseeker') => {
    if (type === 'jobseeker') {
      navigate(`/auth/jobseeker/${mode}`);
    } else {
      navigate(`/auth/${mode}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <button onClick={() => navigate('/welcome')} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors">
          <ChevronLeft size={20} /> Back
        </button>
        
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Choose Account Type</h2>
        <p className="text-center text-gray-500 mb-10">How do you want to use Hotjobsconnect?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Jobseeker Card */}
          <div 
            onClick={() => handleSelection('jobseeker')}
            className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-brand-500 cursor-pointer transition-all group"
          >
            <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Job Seeker / Employee</h3>
            <p className="text-gray-500 text-sm">I'm looking for a job, or I want to access my employee portal (Payroll, Leave).</p>
          </div>

          {/* Employer Card */}
          <div 
             onClick={() => handleSelection('employer')}
             className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-brand-500 cursor-pointer transition-all group"
          >
            <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Employer / HR</h3>
            <p className="text-gray-500 text-sm">I want to manage payroll, hire talent, and handle compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. Login Form (Employer) ---
export const Login = ({ onLogin }: AuthProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin('employer');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg mx-auto mb-4">H</div>
          <h2 className="text-2xl font-bold text-gray-900">Employer Login</h2>
          <p className="text-gray-500">Access your HR Command Center</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="email" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="name@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="password" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="••••••••" />
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="text-brand-600 rounded focus:ring-brand-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <button type="button" className="text-brand-600 font-medium hover:underline">Forgot password?</button>
          </div>

          <button type="submit" disabled={isLoading} className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
            {isLoading ? 'Logging in...' : 'Sign In'}
            {!isLoading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 4. Signup Form (Employer) ---
export const Signup = ({ onLogin }: AuthProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin('employer');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Create Employer Account</h2>
          <p className="text-gray-500">Start managing your team today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Acme Corp" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="John Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="email" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="hr@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="password" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Create a strong password" />
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors">
            {isLoading ? 'Creating Account...' : 'Get Started'}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 5. Jobseeker Login ---
export const JobseekerLogin = ({ onLogin }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin('employee'); // Pass 'employee' role
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <button onClick={() => navigate('/auth/select?mode=login')} className="mb-6 text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm">
          <ChevronLeft size={16} /> Back
        </button>
        <div className="text-center mb-8">
           <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg mx-auto mb-4">
             <User size={24} />
           </div>
          <h2 className="text-2xl font-bold text-gray-900">Talent Portal Login</h2>
          <p className="text-gray-500">Manage your career, payroll, and applications.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" required className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="••••••••" />
          </div>
          <button type="submit" disabled={isLoading} className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors">
            {isLoading ? 'Accessing Portal...' : 'Login to Portal'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have a profile? <button onClick={() => navigate('/auth/jobseeker/signup')} className="text-brand-600 font-bold hover:underline">Create CV</button>
        </p>
      </div>
    </div>
  );
};

// --- 6. Jobseeker Signup ---
export const JobseekerSignup = ({ onLogin }: AuthProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin('employee');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-xl">
         <button onClick={() => navigate('/auth/select?mode=signup')} className="mb-6 text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm">
          <ChevronLeft size={16} /> Back
        </button>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Join the Talent Pool</h2>
          <p className="text-gray-500">Create your profile to get hired, get paid, and get trained.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Skill / Role</label>
            <input type="text" required placeholder="e.g. Frontend Developer" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" />
          </div>

           <div className="p-3 bg-brand-50 rounded-lg border border-brand-100 text-xs text-brand-800 flex items-start gap-2">
             <CheckCircle size={14} className="shrink-0 mt-0.5" />
             <div>
               By signing up, your profile will be visible to top employers on Hotjobsconnect.
             </div>
           </div>

          <button type="submit" disabled={isLoading} className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors">
            {isLoading ? 'Creating Profile...' : 'Create Free Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};