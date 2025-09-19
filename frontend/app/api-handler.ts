import { toast } from "sonner";
import "dotenv/config";

const url: string = process.env.URL as string;

export async function getTasks() {
  const fetchTasks = fetch(url)
    .then((res) => res.json())
    .catch((err) => toast.error(err));
  const tasks = await fetchTasks;
  return tasks;
}

export async function deleteTask(id: string) {
  const response = await fetch(url.concat(`/${id}`), {
    method: "DELETE",
  }).catch((err) => toast.error(err));
  return response;
}
