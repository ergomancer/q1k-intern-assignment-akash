import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import Link from "next/link";
import type { TaskType } from "@/lib/types";
import AddTaskButton from "@/components/ui/add-task-button";
import DeleteAlert from "@/components/ui/delete-alert";
import { getTasks } from "../api-handler";
import { use } from "react";

function Task({ task }: { task: TaskType }) {
  return (
    <Card className="w-72 p-4">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex">
        <div>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
          {task.due_date ? (
            <p>Due Date: {task.due_date}</p>
          ) : null}
        </div>
        <div>
          <CardAction className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            <Button variant="secondary" size="icon" className="size-8">
              <Link href={`/tasks/edit/${task.id}`}>
                <Edit2 />
              </Link>
            </Button>
          </CardAction>
          <CardAction className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
            <DeleteAlert id={task.id} />
          </CardAction>
        </div>
      </CardContent>
      <CardFooter>
        <p>Created At: {task.created_at}</p>
      <p>Updated At: {task.updated_at}</p>
      </CardFooter>
    </Card>
  );
}

export default function TasksPage() {
  let tasks: TaskType[] = use(getTasks());
  return (
    <div>
      <div className="flex gap-4">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
      <AddTaskButton />
    </div>
  );
}
