
import React, { useState } from 'react';
import { CheckSquare, Plus, Filter, MoreVertical, Clock, User, Paperclip } from 'lucide-react';
import { Task } from '../types';

const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Complete Data Privacy Training',
    assignedTo: 'David Olaoluwa',
    assignedBy: 'Jane Admin',
    dueDate: '2023-10-27',
    priority: 'High',
    status: 'Pending',
    description: 'Watch the 3 modules and pass the quiz.'
  },
  {
    id: '2',
    title: 'Submit Q3 Performance Review',
    assignedTo: 'Chioma Nwafor',
    assignedBy: 'Jane Admin',
    dueDate: '2023-10-30',
    priority: 'Medium',
    status: 'In Progress',
    description: 'Self-assessment section needs to be filled.'
  },
  {
    id: '3',
    title: 'Update Bank Details',
    assignedTo: 'Emeka Okafor',
    assignedBy: 'Finance Dept',
    dueDate: '2023-10-25',
    priority: 'High',
    status: 'Completed',
  }
];

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-orange-100 text-orange-700';
      case 'Low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          <p className="text-sm text-gray-500">Assign and track employee tasks in real-time.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 shadow-sm">
          <Plus size={16} />
          Create New Task
        </button>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Pending Tasks</p>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-2xl font-bold text-blue-600">5</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500">Completed This Week</p>
          <p className="text-2xl font-bold text-green-600">24</p>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter size={14} /> Filter
          </button>
           <input type="text" placeholder="Search tasks..." className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-brand-500 focus:border-brand-500" />
        </div>
        
        <div className="divide-y divide-gray-100">
          {tasks.map(task => (
            <div key={task.id} className="p-4 hover:bg-gray-50 transition-colors flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-400">
                   <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{task.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">{task.description || "No description provided."}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><User size={12} /> {task.assignedTo}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> Due {task.dueDate}</span>
                    {task.description && <Paperclip size={12} />}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                 <button className="text-gray-400 hover:text-gray-600">
                   <MoreVertical size={16} />
                 </button>
                 <div className="flex gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getStatusColor(task.status)}`}>{task.status}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;