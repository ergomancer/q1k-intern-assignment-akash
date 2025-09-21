import Task from "@/components/ui/task";
import type { TaskType } from "@/lib/types";
import { getTasks } from "@/app/api-handlers/get-tasks";
import { use } from "react";

export default function TasksPage() {
  let tasks: TaskType[] = use(getTasks());
  return (
    <div className="flex gap-20 p-20 flex-wrap">
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}
