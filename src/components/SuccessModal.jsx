import React from 'react';
import { FaCheck } from "react-icons/fa";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-3xl p-6 w-72 text-center">
        {/* --------------- Check icon centered ------------ */}
        <div className="mb-4 flex justify-center items-center">
          <FaCheck className="text-white text-6xl bg-black p-4 rounded-2xl shadow-md shadow-gray-500" />
        </div>

        {/* Success message */}
        <h3 className="text-lg font-semibold text-gray-800">{message}</h3>

        {/* ------------------ Back button -------------------*/}
        <button
          onClick={onClose}
          className="w-full mt-4 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 shadow-md shadow-gray-500"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
