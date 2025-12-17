
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import EmployeeSidebar from './components/EmployeeSidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Payroll from './pages/Payroll';
import Recruitment from './pages/Recruitment';
import BackgroundCheck from './pages/BackgroundCheck';
import Tasks from './pages/Tasks';
import Attendance from './pages/Attendance';
import AIChat from './components/AIChat';
import { Welcome, UserSelection, Login, Signup, JobseekerLogin, JobseekerSignup } from './pages/Auth';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import EmployeeProfile from './pages/employee/EmployeeProfile';
import EmployeeJobs from './pages/employee/EmployeeJobs';
import EmployeeTasks from './pages/employee/EmployeeTasks';
import Finance from './pages/employee/Finance';
import Workplace from './pages/employee/Workplace';
import { Bell, Search } from 'lucide-react';

// --- Layout Components ---

// 1. Employer Layout
interface LayoutProps { 
  children: React.ReactNode;
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
            <input 
              type="text" 
              placeholder="Search for anything..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
      <AIChat />
    </div>
  );
};

// 2. Employee/Jobseeker Layout
const EmployeeLayout = ({ children, onLogout }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <EmployeeSidebar onLogout={onLogout} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 h-16 px-8 flex items-center justify-between sticky top-0 z-40">
           <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search jobs, skills, or training..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
            </button>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
      <AIChat />
    </div>
  );
};

// --- Main App Component ---
const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'employer' | 'employee' | null>(null);
  const navigate = useNavigate();

  const handleLogin = (role: 'employer' | 'employee') => {
    setIsAuthenticated(true);
    setUserRole(role);
    if (role === 'employer') {
      navigate('/');
    } else {
      navigate('/portal');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/welcome');
  };

  return (
    <Routes>
      {/* Public Auth Routes */}
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/auth/select" element={<UserSelection />} />
      <Route path="/auth/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/auth/signup" element={<Signup onLogin={handleLogin} />} />
      
      {/* Jobseeker/Employee Auth */}
      <Route path="/auth/jobseeker/login" element={<JobseekerLogin onLogin={handleLogin} />} />
      <Route path="/auth/jobseeker/signup" element={<JobseekerSignup onLogin={handleLogin} />} />

      {/* Protected Routes */}
      {isAuthenticated ? (
        <>
          {/* Employer Routes */}
          {userRole === 'employer' && (
            <>
              <Route path="/" element={<EmployerLayout onLogout={handleLogout}><Dashboard /></EmployerLayout>} />
              <Route path="/employees" element={<EmployerLayout onLogout={handleLogout}><Employees /></EmployerLayout>} />
              <Route path="/payroll" element={<EmployerLayout onLogout={handleLogout}><Payroll /></EmployerLayout>} />
              <Route path="/recruitment" element={<EmployerLayout onLogout={handleLogout}><Recruitment /></EmployerLayout>} />
              <Route path="/verification" element={<EmployerLayout onLogout={handleLogout}><BackgroundCheck /></EmployerLayout>} />
              <Route path="/tasks" element={<EmployerLayout onLogout={handleLogout}><Tasks /></EmployerLayout>} />
              <Route path="/attendance" element={<EmployerLayout onLogout={handleLogout}><Attendance /></EmployerLayout>} />
              
              <Route path="/training" element={<EmployerLayout onLogout={handleLogout}><Recruitment /></EmployerLayout>} />
              <Route path="/loans" element={<EmployerLayout onLogout={handleLogout}><div className="p-10 text-gray-500">Loan Management Module Coming Soon</div></EmployerLayout>} />
              <Route path="/documents" element={<EmployerLayout onLogout={handleLogout}><div className="p-10 text-gray-500">Document Management System Coming Soon</div></EmployerLayout>} />
              <Route path="/settings" element={<EmployerLayout onLogout={handleLogout}><div className="p-10 text-gray-500">System Settings</div></EmployerLayout>} />
              <Route path="/reports" element={<EmployerLayout onLogout={handleLogout}><div className="p-10 text-gray-500">Advanced Reporting Module</div></EmployerLayout>} />
            </>
          )}

          {/* Employee / Jobseeker Routes */}
          {userRole === 'employee' && (
            <>
              <Route path="/portal" element={<EmployeeLayout onLogout={handleLogout}><EmployeeDashboard /></EmployeeLayout>} />
              <Route path="/portal/profile" element={<EmployeeLayout onLogout={handleLogout}><EmployeeProfile /></EmployeeLayout>} />
              <Route path="/portal/jobs" element={<EmployeeLayout onLogout={handleLogout}><EmployeeJobs /></EmployeeLayout>} />
              <Route path="/portal/tasks" element={<EmployeeLayout onLogout={handleLogout}><EmployeeTasks /></EmployeeLayout>} />
              <Route path="/portal/finance" element={<EmployeeLayout onLogout={handleLogout}><Finance /></EmployeeLayout>} />
              <Route path="/portal/workplace" element={<EmployeeLayout onLogout={handleLogout}><Workplace /></EmployeeLayout>} />
              
              {/* Placeholders */}
              <Route path="/portal/documents" element={<EmployeeLayout onLogout={handleLogout}><div className="p-10 text-gray-500">My Documents</div></EmployeeLayout>} />
              <Route path="/portal/training" element={<EmployeeLayout onLogout={handleLogout}><div className="p-10 text-gray-500">Upskilling & Courses</div></EmployeeLayout>} />
              <Route path="/portal/support" element={<EmployeeLayout onLogout={handleLogout}><div className="p-10 text-gray-500">HR Support Ticket</div></EmployeeLayout>} />
            </>
          )}

          {/* Redirect mismatches */}
          <Route path="*" element={<Navigate to={userRole === 'employer' ? '/' : '/portal'} replace />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      )}
    </Routes>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;