import React from 'react'
import { BsBan } from "react-icons/bs";


const NotFoundTasks = () => {
  return (
    <div className='flex flex-col h-[70vh] items-center justify-center text-white gap-2  p-4 rounded-lg'>
        <BsBan className='size-10'/>
        <h2>No Task Found</h2>
    </div>
  )
}

export default NotFoundTasks