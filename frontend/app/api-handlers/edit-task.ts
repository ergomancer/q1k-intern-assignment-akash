import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL as string;

export async function putEditTask(data: FormData) {
  "use server";
  let newData = Object.fromEntries(data);
  if (!newData.due_date) delete newData.due_date;
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
