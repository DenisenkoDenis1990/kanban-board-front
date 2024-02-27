import { TaskItemProps } from "./types";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

export const TaskItem = ({
  task,
  upDateTaskTitle,
  deleteTask,
}: TaskItemProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const editHandler = () => {
    setIsEditable(true);
  };
  return (
    <div
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData("id", task.id);
      }}
      style={{
        border: "1px solid black",
        backgroundColor: "blue",
        cursor: "grab",
      }}
    >
      <span>{task.id}</span>
      {isEditable ? (
        <input
          autoFocus
          value={task.title}
          onBlur={() => setIsEditable(false)}
          onChange={(e) => upDateTaskTitle(task, e.currentTarget.value)}
        />
      ) : (
        <h1>{task.title}</h1>
      )}
      <p>{task.description}</p>
      <div>
        <button type="button" onClick={() => deleteTask(task)}>
          <AiFillDelete />
        </button>
        <button type="button" onClick={editHandler}>
          <BiSolidEdit />
        </button>
      </div>
    </div>
  );
};
