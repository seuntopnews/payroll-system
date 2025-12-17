
import React from 'react';
import { MapPin, Search, Filter, Clock, User } from 'lucide-react';

const Attendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Attendance Monitor</h1>
          <p className="text-sm text-gray-500">Real-time tracking of employee clock-ins and locations.</p>
        </div>
        <button className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm">
          Download Report
        </button>
      </div>

      {/* Map Placeholder Visualization */}
      <div className="bg-gray-100 rounded-xl h-64 relative overflow-hidden border border-gray-200 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Map_of_Lagos.svg/1200px-Map_of_Lagos.svg.png')] bg-cover bg-center"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs font-bold text-gray-800">HQ: 45 Active</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-500 font-bold uppercase">Present</p>
          <p className="text-2xl font-bold text-green-600">45</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-500 font-bold uppercase">Late</p>
          <p className="text-2xl font-bold text-orange-500">3</p>
        </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-500 font-bold uppercase">Absent</p>
          <p className="text-2xl font-bold text-red-500">8</p>
        </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-500 font-bold uppercase">On Leave</p>
          <p className="text-2xl font-bold text-blue-500">2</p>
        </div>
      </div>

      {/* Attendance List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
         <div className="p-4 border-b border-gray-200 flex gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter size={14} /> Filter
          </button>
           <input type="text" placeholder="Search employee..." className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-brand-500 focus:border-brand-500" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
             <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 font-medium">Employee</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Clock In</th>
                  <th className="px-6 py-3 font-medium">Clock Out</th>
                  <th className="px-6 py-3 font-medium">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">DO</div>
                    <span className="font-medium text-gray-900">David Olaoluwa</span>
                  </td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Present</span></td>
                  <td className="px-6 py-4 font-mono text-gray-600">08:02 AM</td>
                  <td className="px-6 py-4 font-mono text-gray-400">--:--</td>
                  <td className="px-6 py-4 text-gray-500 flex items-center gap-1"><MapPin size={14} /> Office HQ</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">SM</div>
                    <span className="font-medium text-gray-900">Sarah Mensah</span>
                  </td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">Late</span></td>
                  <td className="px-6 py-4 font-mono text-gray-600">09:15 AM</td>
                  <td className="px-6 py-4 font-mono text-gray-400">--:--</td>
                   <td className="px-6 py-4 text-gray-500 flex items-center gap-1"><MapPin size={14} /> Office HQ</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;