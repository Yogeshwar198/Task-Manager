import React, { useState, useContext } from 'react';
import { FcExpired } from "react-icons/fc";
import { MdBusinessCenter } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import TaskCard from './TaskCard';
import { StoreContext } from '../context/store';

const TaskStatus = () => {
    const { tasks, isTaskExpired } = useContext(StoreContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableTask, setEditableTask] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    // Open modal for adding or editing a task
    const openModal = (task = null) => {
        setEditableTask(task);
        setIsEditMode(!!task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditableTask(null);
        setIsEditMode(false);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="py-6 min-w-52 space-y-4 relative">
            {/* ---------------- Task Cards -------------- */}
            <div className="h-40 p-4 bg-gray-100 border border-gray-200 rounded-xl shadow-md shadow-gray-400">
                <div className="flex items-center mb-2">
                    <div className='text-black bg-red-600 rounded-full p-2'>
                        <FcExpired className="text-2xl" />
                    </div>
                </div>
                <h2 className="text-base font-semibold text-gray-700">Expired Tasks</h2>
                <p className="text-gray-600 font-bold text-xl">{tasks.filter(task => isTaskExpired(task)).length}</p>
            </div>

            <div className="p-4 h-40 bg-gray-100 border border-gray-200 rounded-xl shadow-md shadow-gray-400">
                <div className="flex items-center mb-2">
                    <div className='text-white bg-yellow-500 rounded-full p-2'>
                        <MdBusinessCenter className="text-2xl" />
                    </div>
                </div>
                <h2 className="text-base font-semibold text-gray-700">Active Tasks</h2>
                <p className="text-gray-600 font-bold text-xl">
                    {tasks.filter(task => 
                        (task.status === 'todo' || task.status === 'inProgress') && !isTaskExpired(task)
                    ).length}
                </p>
            </div>

            <div className="p-4 h-40 bg-gray-100 border border-gray-200 rounded-xl shadow-md shadow-gray-400">
                <div className="flex items-center mb-2">
                    <div className='text-white bg-sky-500 rounded-full p-2'>
                        <AiOutlineClockCircle className="text-2xl" />
                    </div>
                </div>
                <h2 className="text-base font-semibold text-gray-700">Completed Tasks</h2>
                <p className="text-gray-600 font-bold text-xl">
                    {tasks.filter(task => task.status === 'done').length}
                    <span className='text-sm'>/
                        {tasks.filter(task => 
                            (task.status === 'todo' || task.status === 'active' || task.status === 'inProgress') && !isTaskExpired(task)
                        ).length}
                    </span>
                </p>
            </div>

            {/* ---------------- Add Task Button --------------- */}
            <div
                className='flex items-center justify-center text-base bg-black py-2 px-4 text-white rounded-2xl shadow-md shadow-gray-500 hover:bg-gray-800 transition-colors cursor-pointer hover:scale-[0.9]'
                onClick={() => openModal()}
            >
                <BsPlus className="text-xl" />
                <span className="font-medium">Add Task</span>
            </div>

            {/* --------------- Modal for TaskCard ------------- */}
            {isModalOpen && (
                <div
                    className="fixed -top-10 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleBackdropClick}
                >
                    <TaskCard
                        editableTask={editableTask}
                        isEditMode={isEditMode}
                        onClose={closeModal}
                    />
                </div>
            )}
        </div>
    );
};

export default TaskStatus;
