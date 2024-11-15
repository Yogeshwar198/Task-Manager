import React, { useContext } from 'react';
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { StoreContext } from '../context/store';

const Navbar = () => {
  const { searchQuery, setSearchQuery, setFilterStatus } = useContext(StoreContext); 

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);  // Update filter status in context
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 shadow-md shadow-gray-400 rounded-xl">
      <div className="relative flex items-center max-w-lg">
        <FiSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search project"
          className="pl-10 w-full p-2 border border-gray-300 rounded-3xl shadow-md shadow-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Search project"
          value={searchQuery}  
          onChange={handleSearchChange}  
        />
      </div>

      <div className="relative max-w-xl">
        <CiFilter className="absolute left-3 top-3 text-gray-500" />
        <select
          className="pl-7 w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-500 shadow-sm shadow-gray-400"
          aria-label="Filter options"
          onChange={handleFilterChange}  // Update filter state on change
        >
          <option value="" >Filter by</option>
          <option value="todo">Todo</option>
          <option value="inProgress">In progress</option>
          <option value="done">Done</option>
          <option value="expired">Expired</option>
        </select>
      </div>
    </div>
  )
}

export default Navbar;
