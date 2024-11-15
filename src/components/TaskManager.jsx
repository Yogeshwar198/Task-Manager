import React, { useState, useContext } from 'react';
import { PiDotsThreeBold } from "react-icons/pi";
import TaskCard from './TaskCard';
import { StoreContext } from '../context/store';

const TaskManager = () => {
  const { filteredTasks, updateTaskStatus, deleteTask, isTaskExpired } = useContext(StoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableTask, setEditableTask] = useState(null);

  // Open the modal with the task data for editing
  const openEditModal = (task) => {
    setEditableTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditableTask(null);
  };

  // Handle status change and immediately reflect it in the UI
  const handleStatusChange = (taskId, newStatus) => {
    updateTaskStatus(taskId, newStatus);
  };

  // Function to dynamically set the priority color based on assignedTo or status
  const getPriorityColor = (status, expired) => {
    if (expired) return 'text-red-600 bg-red-100 hover:bg-red-200';
    switch (status) {
      case 'todo':
        return 'text-blue-600 bg-blue-100';
      case 'inProgress':
        return 'text-yellow-600 bg-yellow-100 hover:bg-yellow-200';
      case 'done':
        return 'text-green-600 bg-green-100 hover:bg-green-200';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Handle delete task
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className='w-full mt-6 p-4 bg-gray-200 rounded-lg shadow-md shadow-gray-400'>
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="rounded-full w-2 h-2 bg-blue-600"></div>
          <h1 className="text-lg font-semibold text-gray-800">Task Manager</h1>
          <p className="w-4 h-4 text-center text-[10px] font-medium text-gray-700 bg-gray-300 rounded-full">
            {filteredTasks.length}
          </p>
        </div>

        <hr className='h-1 bg-blue-600' />

        <div className="space-y-3 scrollable-container">
          {filteredTasks.map((task, index) => {
            const isExpired = isTaskExpired(task);

            return (
              <div key={task._id || index} className="relative p-4 bg-white border border-gray-200 rounded-xl">
                <p className={`${getPriorityColor(task.status, isExpired)} inline-block mb-2 px-3 py-1 text-xs font-medium rounded-full`}>
                  {isExpired ? "Expired" : task.status ? task.status.charAt(0).toUpperCase() + task.status.slice(1) : "Unknown Status"}
                </p>

                <div className="relative group">
                  <button className="absolute right-2 -top-8 text-gray-400 hover:text-gray-600">
                    <PiDotsThreeBold />
                  </button>
                  <div className="hidden group-hover:flex flex-col absolute right-6 -top-[49px] w-24 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <button
                      className="w-full text-left px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => openEditModal(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="w-full text-left px-3 py-1 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="w-full text-left px-3 py-1 text-sm text-blue-600 hover:bg-gray-100"
                      onClick={() => handleStatusChange(task._id, 'todo')}
                    >
                      Todo
                    </button>
                    <button
                      className="w-full text-left px-3 py-1 text-sm text-yellow-600 hover:bg-gray-100"
                      onClick={() => handleStatusChange(task._id, 'inProgress')}
                    >
                      Progress
                    </button>
                    <button
                      className="w-full text-left px-3 py-1 text-sm text-green-600 hover:bg-gray-100"
                      onClick={() => handleStatusChange(task._id, 'done')}
                    >
                      Done
                    </button>
                  </div>
                </div>

                <h2 className="text-sm font-semibold text-gray-800">{task.title || "Untitled Task"}</h2>
                <p className="text-xs text-gray-600 mt-1">{task.description || "No description provided"}</p>
                <div className='flex justify-between'>
                  <p className="text-xs text-gray-500 mt-2">
                    Deadline: <span className="font-medium text-gray-700">{task.deadline ? new Date(task.deadline).toLocaleDateString() : "No deadline"}</span>
                  </p>
                  <p className='text-xs text-gray-500'>
                    Priority: 
                    <span className="inline-block mb-2 px-3 py-1 text-xs font-bold rounded-full text-black">
                      {task.assignedTo || "Low"}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <TaskCard
            editableTask={editableTask}
            isEditMode={true}
            onClose={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default TaskManager;
