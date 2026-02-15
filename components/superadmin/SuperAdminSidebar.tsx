
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Building2, Users, Settings, Database, 
  ShieldAlert, LogOut, Terminal, Activity, Globe, 
  CreditCard, Cpu, BellRing
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const SuperAdminSidebar = ({ onLogout }: SidebarProps) => {
  const navClasses = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-black uppercase tracking-widest ${
      isActive 
        ? 'bg-brand-600 text-white shadow-xl shadow-brand-900/40' 
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`;

  return (
    <aside className="w-72 bg-gray-900 border-r border-gray-800 h-screen sticky top-0 flex flex-col p-6 overflow-y-auto">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-black text-2xl">H</div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-white">Hotjobsconnect</span>
          <span className="text-[10px] font-black text-brand-500 uppercase tracking-[0.2em]">Platform Root</span>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4 px-4">Core Control</div>
        <NavLink to="/superadmin" end className={navClasses}>
          <LayoutDashboard size={18} />
          Global Pulse
        </NavLink>
        <NavLink to="/superadmin/revenue" className={navClasses}>
          <CreditCard size={18} />
          Revenue & Payments
        </NavLink>
        <NavLink to="/superadmin/orgs" className={navClasses}>
          <Building2 size={18} />
          Organization Vault
        </NavLink>

        <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mt-8 mb-4 px-4">Platform Growth</div>
        <NavLink to="/superadmin/cms" className={navClasses}>
          <Globe size={18} />
          Homepage Editor
        </NavLink>
        <NavLink to="/superadmin/modules" className={navClasses}>
          <Cpu size={18} />
          Feature Gate
        </NavLink>
        <NavLink to="/superadmin/broadcast" className={navClasses}>
          <BellRing size={18} />
          Broadcast Msg
        </NavLink>

        <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mt-8 mb-4 px-4">Maintenance</div>
        <NavLink to="/superadmin/system" className={navClasses}>
          <Terminal size={18} />
          Kernel Config
        </NavLink>
        <NavLink to="/superadmin/audit" className={navClasses}>
          <Database size={18} />
          Deep Audit Logs
        </NavLink>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl mb-4">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           <span className="text-xs font-bold text-gray-400">Node: Healthy (NG-WEST)</span>
        </div>
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 p-3 text-red-400 hover:bg-red-400/10 rounded-xl text-sm font-black uppercase tracking-widest transition-all"
        >
          <LogOut size={16} />
          Terminal Exit
        </button>
      </div>
    </aside>
  );
};

export default SuperAdminSidebar;
