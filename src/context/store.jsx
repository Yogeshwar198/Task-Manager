import React, { createContext, useState } from "react";

// Create the context
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  // Initialize tasks from localStorage if available, else as an empty array
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Function to add a new task and persist it to localStorage
  const addTask = (newTask) => {
    const savedTask = {
      ...newTask,
      _id: (tasks.length + 1).toString(),
      deadline: new Date(newTask.deadline),
    };
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, savedTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
      return updatedTasks;
    });
  };

  // Function to update the task status and persist the updated tasks to localStorage
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
      return updatedTasks;
    });
  };

  // Function to edit an existing task and persist it to localStorage
  const editTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task._id === updatedTask._id ? { ...updatedTask, deadline: new Date(updatedTask.deadline) } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
      return updatedTasks;
    });
  };

  // Function to delete a task and persist the changes to localStorage
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task._id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
      return updatedTasks;
    });
  };

  // Function to check if a task is expired
  const isTaskExpired = (task) => {
    const currentDate = new Date();
    return new Date(task.deadline) < currentDate && task.status !== 'done';
  };

  // Filter tasks based on the search query and selected filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !filterStatus ||
      (filterStatus === "expired" ? isTaskExpired(task) : task.status === filterStatus);
    return matchesSearch && matchesFilter;
  });

  return (
    <StoreContext.Provider value={{
      tasks,
      filteredTasks,
      addTask,
      updateTaskStatus,
      editTask,
      deleteTask,
      isTaskExpired,
      searchQuery,
      setSearchQuery,
      setFilterStatus
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
