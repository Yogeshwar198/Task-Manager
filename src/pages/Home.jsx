import React from 'react'
import Navbar from '../components/Navbar'
import TaskManager from '../components/TaskManager'
import TaskStatus from '../components/TaskStatus';




const Home = () => {
    return (
        <div className='p-4'>
            <Navbar />
            <div className='flex gap-7 flex-col lg:flex-row'>
                <TaskStatus />
                <TaskManager />
            </div>

        </div>
    )
}

export default Home