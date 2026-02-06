
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import EmployeeSidebar from './components/EmployeeSidebar';
import SuperAdminSidebar from './components/superadmin/SuperAdminSidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Payroll from './pages/Payroll';
import Recruitment from './pages/Recruitment';
import BackgroundCheck from './pages/BackgroundCheck';
import Tasks from './pages/Tasks';
import Attendance from './pages/Attendance';
import AIChat from './components/AIChat';
import MarketingLanding from './pages/MarketingLanding';
import { UserSelection, Login, Signup, EmployeeLogin, EmployeeSignup } from './pages/Auth';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import EmployeeProfile from './pages/employee/EmployeeProfile';
import EmployeeJobs from './pages/employee/EmployeeJobs';
import EmployeeTasks from './pages/employee/EmployeeTasks';
import Finance from './pages/employee/Finance';
import Workplace from './pages/employee/Workplace';
import SuperAdminDashboard from './pages/superadmin/SuperAdminDashboard';
import { Bell, Search } from 'lucide-react';

interface LayoutProps { 
  children?: React.ReactNode;
  onLogout: () => void;
}

const EmployerLayout = ({ children, onLogout }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 h-16 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search organization..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-600 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
      <AIChat />
    </div>
  );
};

const EmployeeLayout = ({ children, onLogout }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <EmployeeSidebar onLogout={onLogout} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 h-16 px-8 flex items-center justify-between sticky top-0 z-40">
           <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search my workspace..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </div>
          <div className="flex items-center gap-4"><button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"><Bell size={20} /></button></div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
      <AIChat />
    </div>
  );
};

const SuperAdminLayout = ({ children, onLogout }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <SuperAdminSidebar onLogout={onLogout} />
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 border-b border-gray-700 h-16 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full">System Root</span>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto bg-gray-950">{children}</main>
      </div>
    </div>
  );
};

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'employer' | 'employee' | 'superadmin' | null>(null);
  const navigate = useNavigate();

  const handleLogin = (role: 'employer' | 'employee' | 'superadmin') => {
    setIsAuthenticated(true);
    setUserRole(role);
    if (role === 'employer') navigate('/');
    else if (role === 'employee') navigate('/portal');
    else if (role === 'superadmin') navigate('/superadmin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/welcome');
  };

  return (
    <Routes>
      <Route path="/welcome" element={<MarketingLanding />} />
      <Route path="/auth/select" element={<UserSelection />} />
      <Route path="/auth/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/auth/signup" element={<Signup onLogin={handleLogin} />} />
      <Route path="/auth/employee/login" element={<EmployeeLogin onLogin={handleLogin} />} />
      <Route path="/auth/employee/signup" element={<EmployeeSignup onLogin={handleLogin} />} />

      {isAuthenticated ? (
        <>
          {userRole === 'employer' && (
            <>
              <Route path="/" element={<EmployerLayout onLogout={handleLogout}><Dashboard /></EmployerLayout>} />
              <Route path="/employees" element={<EmployerLayout onLogout={handleLogout}><Employees /></EmployerLayout>} />
              <Route path="/payroll" element={<EmployerLayout onLogout={handleLogout}><Payroll /></EmployerLayout>} />
              <Route path="/recruitment" element={<EmployerLayout onLogout={handleLogout}><Recruitment /></EmployerLayout>} />
              <Route path="/verification" element={<EmployerLayout onLogout={handleLogout}><BackgroundCheck /></EmployerLayout>} />
              <Route path="/tasks" element={<EmployerLayout onLogout={handleLogout}><Tasks /></EmployerLayout>} />
              <Route path="/attendance" element={<EmployerLayout onLogout={handleLogout}><Attendance /></EmployerLayout>} />
            </>
          )}

          {userRole === 'employee' && (
            <>
              <Route path="/portal" element={<EmployeeLayout onLogout={handleLogout}><EmployeeDashboard /></EmployeeLayout>} />
              <Route path="/portal/profile" element={<EmployeeLayout onLogout={handleLogout}><EmployeeProfile /></EmployeeLayout>} />
              <Route path="/portal/jobs" element={<EmployeeLayout onLogout={handleLogout}><EmployeeJobs /></EmployeeLayout>} />
              <Route path="/portal/tasks" element={<EmployeeLayout onLogout={handleLogout}><EmployeeTasks /></EmployeeLayout>} />
              <Route path="/portal/finance" element={<EmployeeLayout onLogout={handleLogout}><Finance /></EmployeeLayout>} />
              <Route path="/portal/workplace" element={<EmployeeLayout onLogout={handleLogout}><Workplace /></EmployeeLayout>} />
            </>
          )}

          {userRole === 'superadmin' && (
            <Route path="/superadmin" element={<SuperAdminLayout onLogout={handleLogout}><SuperAdminDashboard /></SuperAdminLayout>} />
          )}

          <Route path="*" element={<Navigate to={userRole === 'employer' ? '/' : userRole === 'employee' ? '/portal' : '/superadmin'} replace />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      )}
    </Routes>
  );
};

const App = () => (
  <HashRouter>
    <AppContent />
  </HashRouter>
);

export default App;
