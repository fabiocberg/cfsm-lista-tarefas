import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import Header from "../../components/Header";
import { db } from "../../db/db";
import { Task } from "../../models/Task";
import AddItemsBar from "./AddItemsBar";
import "./index.css";
import TableItems from "./TableItems";

export interface HomeProps {}

const Home = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const tasks = useLiveQuery(async () => {
    const notCompletedTasks = await db.tasks
      .filter((item) => item.completed === false)
      .toArray();
    const completedTasks = await db.tasks
      .filter((item) => item.completed === true)
      .reverse()
      .sortBy("completedDate");
    return notCompletedTasks.concat(completedTasks);
  });

  const addItem = async (task: Task) => {
    // const tasksCopy = [task, ...tasks];
    // setTasks(tasksCopy);
    try {
      const id = await db.tasks.add(task);
      console.log(`Tarefa salva! ID: ${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page">
      <Header />
      <div className="content">
        <AddItemsBar onAddItem={addItem} />
        <TableItems tasks={tasks || []} />
      </div>
    </div>
  );
};

export default Home;
