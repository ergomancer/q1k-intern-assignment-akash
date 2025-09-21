"use server";

import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL as string;

export async function postAddTask(data: FormData) {
  "use server";
  console.log("Adding task");
  console.log("FormData:\n", data);
  let newData = Object.fromEntries(data);
  console.log("Parsed FormData:\n", newData);
  if (!newData.due_date) delete newData.due_date;
  console.log("Final Data:\n", newData);
  console.log("Posting to:", url);
  await fetch(`${url}/`, {
    method: "POST",
    body: JSON.stringify(newData),
    cache: "no-store",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      console.log("Response:", res);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
  console.log("API interaction complete\nRedirecting to /tasks");
  /*TODO Add toasts */
  redirect("/tasks");
}
