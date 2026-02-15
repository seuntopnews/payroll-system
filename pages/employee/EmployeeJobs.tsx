
import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Sparkles, Bookmark, CheckCircle, ArrowRight } from 'lucide-react';

const MOCK_JOBS = [
  {
    id: 1,
    title: 'Senior React Native Engineer',
    company: 'Kuda Bank',
    location: 'Lagos (Remote)',
    type: 'Full-time',
    salary: '₦800k - ₦1.2M',
    match: 95,
    status: 'Hired',
    tags: ['Mobile', 'React', 'Fintech']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Moniepoint',
    location: 'Lagos (Hybrid)',
    type: 'Contract',
    salary: '₦600k - ₦900k',
    match: 82,
    status: 'Applied',
    tags: ['Web', 'Vue.js']
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Eden Life',
    location: 'Remote',
    type: 'Full-time',
    salary: '₦500k - ₦700k',
    match: 45,
    status: 'None',
    tags: ['Figma', 'Design']
  }
];

const EmployeeJobs = () => {
  const [jobs, setJobs] = useState(MOCK_JOBS);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Board</h1>
          <p className="text-sm text-gray-500">Explore opportunities tailored to your skills.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search job title or keyword..." 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="relative w-full md:w-48">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <select className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white">
            <option>Location</option>
            <option>Remote</option>
            <option>Lagos</option>
            <option>Abuja</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Find Jobs
        </button>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job.id} className={`bg-white rounded-xl shadow-sm border p-6 hover:border-blue-300 transition-all group relative ${job.status === 'Hired' ? 'border-brand-500 ring-2 ring-brand-50' : 'border-gray-200'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-600 text-lg">
                {job.company.charAt(0)}
              </div>
              <div className="flex items-center gap-2">
                 {job.status === 'Hired' && (
                   <span className="px-3 py-1 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
                     <CheckCircle size={10}/> HIRED
                   </span>
                 )}
                 <button className="text-gray-400 hover:text-blue-600">
                    <Bookmark size={20} />
                 </button>
              </div>
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
            <p className="text-sm text-gray-600 font-medium mb-4">{job.company}</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} /> {job.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock size={16} /> {job.type}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-900 font-bold">
                <DollarSign size={16} className="text-green-600" /> {job.salary}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
               <div className="flex items-center gap-1 text-sm font-bold text-purple-600">
                 <Sparkles size={14} />
                 {job.match}% Match
               </div>
               {job.status === 'Hired' ? (
                 <button className="px-4 py-2 bg-brand-600 text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-brand-700 flex items-center gap-2">
                   Start Onboarding <ArrowRight size={14}/>
                 </button>
               ) : job.status === 'Applied' ? (
                 <button className="px-4 py-2 bg-gray-100 text-gray-400 text-xs font-black uppercase tracking-widest rounded-lg cursor-default">
                   Applied
                 </button>
               ) : (
                 <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
                   Apply
                 </button>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeJobs;
