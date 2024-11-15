import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SuccessModal from './SuccessModal';
import { StoreContext } from '../context/store';
import { FaPlus } from "react-icons/fa6";
import { BsFillInfoCircleFill } from "react-icons/bs";

const TaskCard = ({ editableTask, isEditMode, onClose }) => {
  const { addTask, editTask } = useContext(StoreContext);

  const [taskDetails, setTaskDetails] = useState({
    title: '',
    description: '',
    deadline: null,
    assignedTo: '',
    ...editableTask,
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (isEditMode && editableTask) {
      setTaskDetails(editableTask);
    }
  }, [isEditMode, editableTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      deadline: date,
    }));
  };

  const handleSubmit = () => {
    const { title, description, deadline, assignedTo } = taskDetails;
    if (title && description && deadline && assignedTo) {
      if (isEditMode) {
        editTask({ ...taskDetails });
      } else {
        addTask({ ...taskDetails, id: Date.now(), status: 'todo' });
      }
      setTaskDetails({ title: '', description: '', deadline: null, assignedTo: '' });
      setIsSuccessModalOpen(true);
    } else {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
    }
  };

  return (
    <div className="max-w-sm p-4 bg-gray-100 rounded-xl shadow-md shadow-white">
      <div className="flex items-center mb-4">
        <div className="rounded-full w-2 h-2 bg-purple-500"></div>
        <h2 className="text-lg font-bold text-gray-800 ml-2">
          {isEditMode ? "EDIT TASK" : "ADD TASK"}
        </h2>
        <div className="pl-56 cursor-pointer" onClick={handleSubmit}>
          <FaPlus className="rounded-full p-1 bg-purple-500 shadow-md shadow-purple-400 text-2xl hover:scale-[0.9]" />
        </div>
      </div>

      {/* Notification for missing fields */}
      {showNotification && (
        <div className="fixed right-4 top-4 p-3 text-white shadow-gray-400 bg-black rounded-md shadow-lg transition-transform duration-300 transform translate-x-0 animate-slideInRight">
         <span className='inline-block'><BsFillInfoCircleFill /></span> Please fill in all fields!
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          name="title"
          value={taskDetails.title}
          onChange={handleChange}
          placeholder="Task Title"
          className="w-full font-bold bg-gray-200 rounded-md p-2 text-gray-800 text-lg border-b-2 focus:outline-none focus:border-gray-500"
        />
        <textarea
          name="description"
          value={taskDetails.description}
          onChange={handleChange}
          placeholder="Task Description"
          className="w-full mt-2 text-gray-600 bg-gray-200 text-sm border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-gray-500"
          rows="8"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <label className="font-semibold">Deadline</label>
        <DatePicker
          selected={taskDetails.deadline}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="w-52 border p-2 bg-gray-200 rounded outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-0"
        />
      </div>

      <div className="flex justify-between items-center">
        <label className="font-semibold">Priority</label>
        <select
          name="assignedTo"
          value={taskDetails.assignedTo}
          onChange={handleChange}
          className="w-52 border p-2 bg-gray-200 rounded outline-none focus:ring-1 focus:ring-gray-500"
        >
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="High">High</option>
        </select>
      </div>

      {isSuccessModalOpen && (
        <SuccessModal
          message={isEditMode ? "Task has been updated successfully" : "Task has been created successfully"}
          onClose={() => {
            setIsSuccessModalOpen(false);
            onClose();
          }}
        />
      )}
    </div>
  );
};

export default TaskCard;
