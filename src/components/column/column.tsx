import React, { useState } from "react";
import { TaskItem } from "../task-item/task-item";
import { ColumnProps } from "./types";
import { Task } from "../task-item/types";
import { Status, initialData } from "../helpers/initial-data";

export const Column = ({ id, title }: ColumnProps) => {
  const [tasks, setTasks] = useState(initialData);
  const [currenHover, setCurrentHover] = useState<string | null>(null);
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

  const handleDropStatus = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    setCurrentHover(null);
    const dataId = e.dataTransfer.getData("id");
    const task = tasks.find((item) => item.id === dataId);
    if (task) {
      upDateTaskStatus(task, id);
    }
  };
  const handleDragEnter = (id: string) => {
    setCurrentHover(id);
    console.log(currenHover, id);
  };

  return (
    <div
      onDrop={(e) => handleDropStatus(e, id)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => handleDragEnter(id)}
    >
      <h1>{title}</h1>
      <div>
        {tasks.map((item) => {
          if (id === item.status) {
            return (
              <TaskItem
                task={item}
                upDateTaskTitle={upDateTaskTitle}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
