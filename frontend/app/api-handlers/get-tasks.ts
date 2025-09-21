const url = process.env.NEXT_PUBLIC_URL as string;

export async function getTasks() {
  return await fetch(`${url}/`, { cache: "no-store" }).then((res) =>
    res.json()
  );
  /* TODO Add toasts */
}

export async function getTask(id: string) {
  return await fetch(`${url}/${id}`, { cache: "no-store" }).then((res) =>
    res.json()
  );
}
