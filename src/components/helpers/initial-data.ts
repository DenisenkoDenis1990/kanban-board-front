import { Task } from "../task-item/types";

export const initialData: Task[] = [
  {
    id: "11",
    title: "Title 122",
    description: "Description 1",
    status: "to_do",
  },
  {
    id: "22",
    title: "Title 2242",
    description: "Description 2",
    status: "to_do",
  },
  {
    id: "33",
    title: "Title 3",
    description: "Description 3",
    status: "in_progress",
  },
  {
    id: "44",
    title: "Title 4",
    description: "Description 4",
    status: "in_progress",
  },
  {
    id: "45",
    title: "Title 5",
    description: "Description 5",
    status: "done",
  },
  {
    id: "66",
    title: "Title 6",
    description: "Description 6",
    status: "done",
  },
  {
    id: "77",
    title: "Title 7",
    description: "Description 7",
    status: "done",
  },
];

// export const columns = [
//   { id: "to_do", title: "To Do" },
//   { id: "in_progress", title: "In Progress" },
//   { id: "done", title: "Done" },
// ];

export const statuses: Status[] = ["to_do", "in_progress", "done"];
export type Status = "to_do" | "in_progress" | "done";
