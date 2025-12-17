
import React, { useState } from 'react';
import { User, Mail, MapPin, Phone, Briefcase, GraduationCap, CreditCard, ShieldCheck, FileText, Edit2, Plus, Upload } from 'lucide-react';

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row gap-6 items-start">
        <div className="relative">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
          <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 text-white rounded-full shadow-sm hover:bg-blue-700">
            <Edit2 size={12} />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">David Olaoluwa</h1>
              <p className="text-gray-500">Senior Frontend Developer • Active Jobseeker</p>
            </div>
            <div className="flex gap-2">
               <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-1">
                 <ShieldCheck size={12} /> Verified
               </span>
               <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                 Preview CV
               </button>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} /> david.o@example.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> +234 801 234 5678
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Lagos, Nigeria
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6 overflow-x-auto">
          {['Personal', 'Experience', 'Education', 'KYC & Docs', 'Banking'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.toLowerCase().split(' ')[0]
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[400px] p-6">
        
        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Work History</h3>
              <button className="text-sm text-blue-600 font-bold flex items-center gap-1 hover:underline">
                <Plus size={16} /> Add Role
              </button>
            </div>
            
            <div className="relative border-l-2 border-gray-100 ml-3 space-y-8">
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold text-gray-900">Senior Frontend Engineer</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2022 - Present</span>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-2">Paystack (Stripe)</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Led the redevelopment of the merchant dashboard using React and TypeScript. Improved load times by 40% and integrated new payment channels.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold text-gray-900">Frontend Developer</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2019 - 2022</span>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-2">Interswitch Group</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Collaborated with UI/UX teams to implement responsive designs for the Quickteller platform.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* KYC Tab */}
        {activeTab === 'kyc' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Identity Verification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-green-600" size={24} />
                  <h4 className="font-bold text-green-900">NIN Verified</h4>
                </div>
                <p className="text-sm text-green-800">ID: 12345678901</p>
              </div>
              <div className="p-4 border border-green-200 bg-green-50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-green-600" size={24} />
                  <h4 className="font-bold text-green-900">BVN Verified</h4>
                </div>
                 <p className="text-sm text-green-800">ID: 222****444</p>
              </div>
            </div>

            <h4 className="font-bold text-gray-900 mt-6 mb-3">Document Uploads</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <Upload className="text-gray-400 mb-2" size={24} />
                <p className="text-sm font-medium text-gray-700">Upload International Passport</p>
                <p className="text-xs text-gray-400">JPG, PNG or PDF</p>
              </div>
               <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-50 text-red-600 rounded">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">CV_Resume_2023.pdf</p>
                    <p className="text-xs text-gray-500">Uploaded on Oct 12</p>
                  </div>
                </div>
                <button className="text-sm text-red-600 hover:underline">Remove</button>
              </div>
            </div>
          </div>
        )}

        {/* Default Personal Tab */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio / Summary</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" rows={4} defaultValue="Passionate Frontend Engineer with 5+ years of experience building scalable web applications in the Fintech space." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skills (Comma separated)</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" defaultValue="React, TypeScript, Tailwind CSS, Node.js" />
              </div>
            </div>
            <div className="space-y-4">
               <div className="p-4 bg-gray-50 rounded-lg">
                 <h4 className="font-bold text-sm text-gray-900 mb-3">Address</h4>
                 <div className="space-y-2">
                   <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Street Address" defaultValue="12B Admiralty Way" />
                   <div className="grid grid-cols-2 gap-2">
                     <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="City" defaultValue="Lekki" />
                     <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="State" defaultValue="Lagos" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        )}
         {activeTab === 'banking' && (
          <div className="space-y-6">
             <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-white rounded-full border border-gray-200">
                   <CreditCard className="text-gray-600" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900">Guaranty Trust Bank</h4>
                   <p className="text-sm text-gray-600">012****890 • Savings</p>
                 </div>
               </div>
               <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Primary</span>
             </div>
             <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
               <Plus size={16} /> Add Another Account
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeProfile;
