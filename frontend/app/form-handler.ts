import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL as string;

function formatData(data: FormData) {
  return Object.fromEntries(data);
}

export async function handleAddTask(data: FormData) {
  "use server";
  let newData = formatData(data);
  if (!newData.due_date) delete newData.due_date;
  await fetch(`${url}/`, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-type": "application/json",
    },
  });
  /*TODO Add toasts */
  redirect("/tasks");
}

export async function handleEditTask(data: FormData) {
  "use server";
  let newData = formatData(data);
  if (!newData.due_date) delete newData.due_date;
  console.log(newData);
  await fetch(`${url}/${newData.id}`, {
    method: "PUT",
    body: JSON.stringify(newData),
    headers: {
      "Content-type": "application/json",
    },
  });
  /*TODO Add toasts */
  redirect("/tasks");
}
