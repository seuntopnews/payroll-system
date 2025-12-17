
import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react';

const Workplace = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Workplace Hub</h1>
        <p className="text-sm text-gray-500">Manage your time, leaves, and performance reviews.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Leave Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
               <Calendar className="text-orange-500" size={20} />
               Leave Balances
             </h2>
             <button className="text-sm bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg font-bold hover:bg-orange-100">
               + Apply
             </button>
           </div>
           <div className="grid grid-cols-2 gap-4 mb-6">
             <div className="p-4 border border-gray-100 bg-gray-50 rounded-xl text-center">
               <span className="block text-2xl font-bold text-gray-900">12</span>
               <span className="text-xs text-gray-500 uppercase tracking-wide">Annual Days</span>
             </div>
             <div className="p-4 border border-gray-100 bg-gray-50 rounded-xl text-center">
               <span className="block text-2xl font-bold text-gray-900">5</span>
               <span className="text-xs text-gray-500 uppercase tracking-wide">Casual Days</span>
             </div>
           </div>
           <div>
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Recent Requests</h3>
             <div className="space-y-3">
               <div className="flex justify-between items-center text-sm">
                 <div>
                   <p className="font-medium text-gray-900">Sick Leave</p>
                   <p className="text-xs text-gray-500">Oct 12 - Oct 14</p>
                 </div>
                 <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-medium">Approved</span>
               </div>
             </div>
           </div>
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-6">
             <Clock className="text-brand-500" size={20} />
             Attendance Stats
           </h2>
           <div className="flex items-center gap-4 mb-6">
             <div className="flex-1 p-4 bg-brand-50 rounded-xl">
               <p className="text-xs text-brand-600 font-medium mb-1">Average Start</p>
               <p className="text-xl font-bold text-gray-900">08:15 AM</p>
             </div>
             <div className="flex-1 p-4 bg-purple-50 rounded-xl">
               <p className="text-xs text-purple-600 font-medium mb-1">Hours/Week</p>
               <p className="text-xl font-bold text-gray-900">42h</p>
             </div>
           </div>
           <div className="p-3 border border-gray-100 rounded-lg flex items-center gap-3">
             <AlertCircle className="text-yellow-500" size={20} />
             <p className="text-sm text-gray-600">You have 2 missing clock-outs this month. <span className="text-brand-600 font-medium cursor-pointer">Fix now</span></p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Workplace;