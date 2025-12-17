
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
  currency: string; // Multi-currency support
  joinDate: string;
  avatarUrl: string;
  compliance: {
    taxId?: string; // TIN
    pensionId?: string; // RSA
    nhfId?: string;
  };
}

export interface PayrollCycle {
  id: string;
  month: string;
  year: number;
  totalGross: number;
  totalNet: number;
  totalDeductions: number;
  status: 'Draft' | 'Processing' | 'Approval' | 'Disbursed';
  complianceStatus: 'Pending' | 'Filed';
}

export interface LoanRequest {
  id: string;
  employeeName: string;
  amount: number;
  type: 'Personal' | 'Salary Advance' | 'Housing';
  status: 'Pending' | 'Approved' | 'Rejected';
  repaymentMonths: number;
  interestRate: number;
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  matchScore: number; // Gemini AI Score
  status: 'Applied' | 'Screening' | 'Interview' | 'Offer';
  source: 'Hotjobsconnect' | 'External';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

// --- New Types for Employee Portal ---

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  avatarUrl: string;
  bio: string;
  address: string;
  skills: string[];
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    year: string;
  }[];
  kyc: {
    bvnVerified: boolean;
    ninVerified: boolean;
    idDocumentUrl?: string;
  };
  bankDetails: {
    bankName: string;
    accountNumber: string;
    accountName: string;
  }[];
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salaryRange: string;
  postedDate: string;
  matchScore: number;
}

export interface LeaveRequest {
  id: string;
  type: 'Annual' | 'Sick' | 'Casual' | 'Maternity';
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

export interface PaySlip {
  id: string;
  month: string;
  year: number;
  netPay: number;
  grossPay: number;
  deductions: number;
  pdfUrl: string;
}

// --- SHARED TYPES FOR SYNC ---

export interface Task {
  id: string;
  title: string;
  assignedTo: string; // Employee Name
  assignedBy: string; // Employer Name
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Completed';
  description?: string;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  clockIn: string;
  clockOut?: string;
  status: 'Present' | 'Late' | 'Absent';
  location?: string; // GPS
}