const url = process.env.NEXT_PUBLIC_URL as string;

// get all tasks from BACKEND/api/tasks/
export async function getTasks() {
  return await fetch(`${url}/`, { cache: "no-store" }).then((res) =>
    res.json()
  );
  /* TODO Add toasts */
}

// get task by id from BACKEND/api/tasks/{id}
export async function getTask(id: string) {
  return await fetch(`${url}/${id}`, { cache: "no-store" }).then((res) =>
    res.json()
  );
}
