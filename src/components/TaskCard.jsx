import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclosure from "../hooks/useDisclosure";
import AddAndUpdateTask from "./AddAndUpdateTask";
import { toast } from "react-toastify";


const TaskCard = ({ task,toggleDone,done}) => {
    // const [tasks, setTasks] = useState([]);

  const { onClose, onOpen, isOpen } = useDisclosure();

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, "Tasks", id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
    
      <div
        key={task.id}
        task={task}
        className="bg-ligght-blue flex items-center rounded-xl justify-between p-2 m-1 h-14"
      >
        <div className="flex gap-2 items-center">
          {!done && <FaRegCircle className="size-10 hover:cursor-pointer" onClick={()=>toggleDone(task.id)}/>}
          {done && <FaCheckCircle  className="size-10 hover:cursor-pointer" onClick={()=>toggleDone(task.id  )}  />} 
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-xl font-bold">{task.Title}</h2>
            <p className="text-sm  w-[200px] h-6 overflow-hidden">{task.Description}</p>
          </div>
        </div>

        <div className="flex flex-row gap-1">
          <LuFileEdit
            onClick={onOpen}
            className="size-10 fill-green-600 hover:cursor-pointer"
          />
          <MdDeleteOutline
            onClick={() => deleteTask(task.id)}
            className="size-10 fill-red-600 hover:cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateTask
        task={task}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
      {/* ))} */}
    </>
  );
};

export default TaskCard;
