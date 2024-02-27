import { useState } from "react";
import "./App.css";
import {
  Status,
  initialData,
  statuses,
} from "./components/helpers/initial-data";
import { TaskItem } from "./components/task-item/task-item";
import { Task } from "./components/task-item/types";

function App() {
  const [tasks, setTasks] = useState(initialData);
  const [currenHover, setCurrentHover] = useState<string | null>(null);
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });

  const upDateTaskTitle = (task: Task, title: string) => {
    updateTask({ ...task, title });
  };
  const upDateTaskStatus = (task: Task, status: Status) => {
    updateTask({ ...task, status });
  };

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? task : item
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (task: Task) => {
    const updatedTasks = tasks.filter((item) => item.id !== task.id);
    setTasks(updatedTasks);
  };

  const handleDropStatus = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    setCurrentHover(null);
    const dataId = e.dataTransfer.getData("id");
    const task = tasks.find((item) => item.id === dataId);
    if (task) {
      upDateTaskStatus(task, id as Status);
    }
  };
  const handleDragEnter = (id: string) => {
    setCurrentHover(id);
    console.log(currenHover, id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "20px",
      }}
    >
      {columns.map((column) => {
        return (
          <div
            key={column.status}
            style={{
              background: currenHover === column.status ? "red" : "",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            onDrop={(e) => handleDropStatus(e, column.status)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => handleDragEnter(column.status)}
          >
            <h1>{column.status.toUpperCase()}</h1>
            {column.tasks.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                upDateTaskTitle={upDateTaskTitle}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
