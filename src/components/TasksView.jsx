import React, { useState } from "react";
import TaskCard from "./TaskCard";
import NotFoundTasks from "./NotFoundTasks";


function TasksView({tasks}) {

  const [doneTasks, setDoneTasks] = useState([]);

  const toggleDone = (id) => {
    if (doneTasks.includes(id)) {
      setDoneTasks(doneTasks.filter(taskId => taskId !== id));
    } else {
      setDoneTasks([...doneTasks, id]);
    }
  };

  return (
    <>
      <div className="m-3 flex flex-col ">
        {tasks.length <=0 ? <NotFoundTasks/>:tasks.map((task) => (
          <TaskCard   
          key={task.id}
          task={task}
          toggleDone={toggleDone}
          done={doneTasks.includes(task.id)}
          />
        ))}
      </div>
    </>
  );
}

export default TasksView;

