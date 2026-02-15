
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Banknote, 
  Briefcase, 
  FileText, 
  Settings, 
  GraduationCap, 
  ShieldCheck,
  PieChart,
  Clock,
  Wallet,
  LogOut,
  CheckSquare,
  CreditCard
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  const navClasses = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${
      isActive 
        ? 'bg-brand-50 text-brand-600 border-l-4 border-brand-600' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col overflow-y-auto">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-200">H</div>
        <span className="text-lg font-bold tracking-tight text-gray-900">Hotjobsconnect</span>
      </div>

      <div className="px-4 pb-4 space-y-6 flex-1">
        
        {/* Core HR */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Core HR</div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/" end className={navClasses}>
              <LayoutDashboard size={18} />
              Overview
            </NavLink>
            <NavLink to="/employees" className={navClasses}>
              <Users size={18} />
              Staff Management
            </NavLink>
             <NavLink to="/attendance" className={navClasses}>
              <Clock size={18} />
              Time & Attendance
            </NavLink>
             <NavLink to="/tasks" className={navClasses}>
              <CheckSquare size={18} />
              Task Management
            </NavLink>
          </nav>
        </div>

        {/* Finance & Payroll */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Finance</div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/payroll" className={navClasses}>
              <Banknote size={18} />
              Payroll & Compliance
            </NavLink>
            <NavLink to="/billing" className={navClasses}>
              <CreditCard size={18} />
              Billing & Plans
            </NavLink>
             <NavLink to="/reports" className={navClasses}>
              <PieChart size={18} />
              Reports & Analytics
            </NavLink>
          </nav>
        </div>

        {/* Hotjobs Ecosystem */}
        <div>
          <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2 px-2 flex items-center gap-1">
             Hotjobs Boost <span className="bg-brand-100 text-brand-700 text-[10px] px-1 rounded border border-brand-200">PRO</span>
          </div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/recruitment" className={navClasses}>
              <Briefcase size={18} />
              Recruitment Hub
            </NavLink>
            <NavLink to="/training" className={navClasses}>
              <GraduationCap size={18} />
              Upskilling Market
            </NavLink>
            <NavLink to="/verification" className={navClasses}>
              <ShieldCheck size={18} />
              Background Checks
            </NavLink>
          </nav>
        </div>

        {/* System */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">System</div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/documents" className={navClasses}>
              <FileText size={18} />
              Documents
            </NavLink>
            <NavLink to="/settings" className={navClasses}>
              <Settings size={18} />
              Settings
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-gray-100 space-y-3">
        <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
          <img src="https://picsum.photos/40/40" alt="User" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-gray-900 truncate">Jane HR Admin</p>
            <p className="text-xs text-gray-500 truncate">Hotjobs Corp HQ</p>
          </div>
        </div>
        
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 p-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
