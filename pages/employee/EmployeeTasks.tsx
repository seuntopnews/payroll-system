
import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, FileText, MessageSquare } from 'lucide-react';
import { Task } from '../../types';

const MOCK_MY_TASKS: Task[] = [
  {
    id: '1',
    title: 'Complete Data Privacy Training',
    assignedTo: 'Me',
    assignedBy: 'Jane Admin',
    dueDate: 'Tomorrow',
    priority: 'High',
    status: 'Pending',
    description: 'Watch the 3 modules and pass the quiz.'
  },
   {
    id: '2',
    title: 'Confirm Personal Details',
    assignedTo: 'Me',
    assignedBy: 'System',
    dueDate: 'Oct 30',
    priority: 'Low',
    status: 'Pending',
  }
];

const EmployeeTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(MOCK_MY_TASKS);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' } : t
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Tasks</h1>
        <p className="text-sm text-gray-500">Assignments from your manager and HR.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {tasks.map(task => (
            <div key={task.id} className={`p-5 flex gap-4 transition-colors ${task.status === 'Completed' ? 'bg-gray-50 opacity-75' : 'hover:bg-gray-50'}`}>
              <button 
                onClick={() => toggleTask(task.id)}
                className={`mt-1 shrink-0 ${task.status === 'Completed' ? 'text-green-500' : 'text-gray-300 hover:text-brand-500'}`}
              >
                {task.status === 'Completed' ? <CheckCircle size={24} /> : <Circle size={24} />}
              </button>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className={`font-bold text-gray-900 ${task.status === 'Completed' ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    task.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                   <span className="flex items-center gap-1">
                     <Clock size={14} /> Due: {task.dueDate}
                   </span>
                   <span className="flex items-center gap-1">
                     <FileText size={14} /> Assigned by: {task.assignedBy}
                   </span>
                   <button className="flex items-center gap-1 text-brand-600 font-medium hover:underline ml-auto">
                     <MessageSquare size={14} /> Comment
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {tasks.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            <CheckCircle size={40} className="mx-auto mb-2 text-gray-300" />
            <p>All caught up! No pending tasks.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeTasks;