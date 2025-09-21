"use server";

import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL as string;

export async function postAddTask(data: FormData) {
  "use server";
  let newData = Object.fromEntries(data);
  if (!newData.due_date) delete newData.due_date;
  await fetch(`${url}/`, {
    method: "POST",
    body: JSON.stringify(newData),
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  /*TODO Add toasts */
  redirect("/tasks");
}
