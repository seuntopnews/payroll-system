
export enum UserRole {
  SuperAdmin = 'superadmin',
  Employer = 'employer',
  Employee = 'employee'
}

export enum EmployeeStatus {
  Active = 'Active',
  OnLeave = 'On Leave',
  Terminated = 'Terminated',
  Onboarding = 'Onboarding'
}

export interface Employee {
  id: string;
  fullName: string;
  email: string;
  role: string;
  department: string;
  status: EmployeeStatus;
  salary: number;
  currency: string; 
  joinDate: string;
  avatarUrl: string;
  compliance: {
    taxId?: string; 
    pensionId?: string; 
    nhfId?: string;
  };
}

export interface Organization {
  id: string;
  name: string;
  plan: 'Starter' | 'Growth' | 'Enterprise';
  employeeCount: number;
  status: 'Active' | 'Suspended';
  createdAt: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Task {
  id: string;
  title: string;
  assignedTo: string;
  assignedBy: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Completed';
  description?: string;
}
