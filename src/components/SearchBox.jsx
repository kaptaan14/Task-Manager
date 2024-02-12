import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdCreate } from "react-icons/io";
import Modal from "./Modal";
import { useState } from "react";
import AddAndUpdateTask from "./AddAndUpdateTask";
import useDisclosure from "../hooks/useDisclosure";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import TasksView from "./TasksView";

function SearchBox({ filterTasks }) {
  const { onClose, onOpen, isOpen } = useDisclosure();

  // const filterTasks = (e) => {
  //   const value = e.target.value;
  //   console.log(value)

  //   const taskRef = collection(db, "Tasks");

  //   onSnapshot(taskRef, (snapshot) => {
  //     const taskLists = snapshot.docs.map((doc) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //     });

  //     const filteredTasks = taskLists.filter((task) =>
  //       task.Title.toLowerCase().includes(value.toLowerCase())
  //     );
  //     console.log(filteredTasks)
  //     setTasks(filteredTasks);
  //     return filteredTasks;
  //   });
  // };

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-2">
        {/* <IoSearch /> */}
        <div className="bg-orange flex flex-row rounded-lg">
          <div className="p-1 flex justify-center items-center hover:cursor-pointer">
            <IoSearch className="size-8" />
          </div>
          <input
            onChange={filterTasks}
            className="h-12 rounded-r-lg w-[260px] outline-none p-2"
            type="text"
            placeholder="Search your task here..."
          />
        </div>
        <div className="bg-light-purple rounded-full p-3 hover:cursor-pointer">
          <IoMdCreate className="size-8" onClick={onOpen} />
        </div>
      </div>
      <AddAndUpdateTask isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default SearchBox;
