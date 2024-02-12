import { collection, onSnapshot } from "firebase/firestore";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import TasksView from "./components/TasksView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // const { onClose, onOpen, isOpen } = useDisclosure();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const taskRef = collection(db, "Tasks");
        // const taskSnapshot = await getDocs(taskRef);

        onSnapshot(taskRef, (snapshot) => {
          const taskLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setTasks(taskLists);
          return taskLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, []);

  const filterTasks = (e) => {
    const value = e.target.value;
    const taskRef = collection(db, "Tasks");

    onSnapshot(taskRef, (snapshot) => {
      const taskLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredTasks = taskLists.filter((task) =>
        task.Title.toLowerCase().includes(value.toLowerCase())
      );
      setTasks(filteredTasks);
      return filteredTasks;
    });
  };

  return (
    <div className="max-w-[400px] m-auto m-b-4">
      <Navbar />
      <SearchBox filterTasks={filterTasks} />
      <TasksView tasks={tasks}/>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
