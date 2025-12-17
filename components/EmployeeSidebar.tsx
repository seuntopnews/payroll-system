
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Banknote, 
  GraduationCap, 
  CalendarClock, 
  LogOut,
  FileText,
  MessageSquare,
  CheckSquare
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const EmployeeSidebar = ({ onLogout }: SidebarProps) => {
  const navClasses = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${
      isActive 
        ? 'bg-brand-50 text-brand-600 border-l-4 border-brand-600' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col overflow-y-auto">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-200">P</div>
        <span className="text-lg font-bold tracking-tight text-gray-900">Talent Portal</span>
      </div>

      <div className="px-4 pb-4 space-y-6 flex-1">
        
        {/* Personal */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">My Career</div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/portal" end className={navClasses}>
              <LayoutDashboard size={18} />
              My Dashboard
            </NavLink>
            <NavLink to="/portal/profile" className={navClasses}>
              <User size={18} />
              My Profile & CV
            </NavLink>
             <NavLink to="/portal/jobs" className={navClasses}>
              <Briefcase size={18} />
              Jobs & Matches
            </NavLink>
          </nav>
        </div>

        {/* Workplace (If Employed) */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Workplace</div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/portal/tasks" className={navClasses}>
              <CheckSquare size={18} />
              My Tasks
            </NavLink>
            <NavLink to="/portal/finance" className={navClasses}>
              <Banknote size={18} />
              Pay & Loans
            </NavLink>
            <NavLink to="/portal/workplace" className={navClasses}>
              <CalendarClock size={18} />
              Attendance & Leave
            </NavLink>
             <NavLink to="/portal/documents" className={navClasses}>
              <FileText size={18} />
              Documents
            </NavLink>
          </nav>
        </div>

        {/* Growth */}
        <div>
          <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2 px-2 flex items-center gap-1">
             Growth & Support
          </div>
          <nav className="flex flex-col gap-1">
            <NavLink to="/portal/training" className={navClasses}>
              <GraduationCap size={18} />
              Training & Skills
            </NavLink>
            <NavLink to="/portal/support" className={navClasses}>
              <MessageSquare size={18} />
              HR Support
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-gray-100 space-y-3">
        <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-gray-900 truncate">David O.</p>
            <p className="text-xs text-gray-500 truncate">Jobseeker / Emp</p>
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

export default EmployeeSidebar;