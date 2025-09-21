"use server";

import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL as string;

export async function deleteTask(id: string) {
  "use server";
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  /* TODO Add toasts */
  redirect("/tasks");
}
