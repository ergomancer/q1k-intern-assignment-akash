import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL as string;

export async function getTasks() {
  return await fetch(url).then((res) => res.json());
  /* TODO Add toasts */
}

export async function getTask(id: string) {
  return await fetch(`${url}/${id}`).then((res) => res.json());
}

export async function deleteTask(id: string) {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  /* TODO Add toasts */
  redirect("/tasks");
}
