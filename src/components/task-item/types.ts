import { Status } from "../helpers/initial-data";

export type TaskItemProps = {
  task: Task;
  upDateTaskTitle: (item: Task, title: string) => void;
  deleteTask: (item: Task) => void;
};
export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
};
