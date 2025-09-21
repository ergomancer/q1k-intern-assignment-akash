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
import { Edit2, Timer } from "lucide-react";
import Link from "next/link";
import type { TaskType } from "@/lib/types";
import DeleteAlert from "@/components/ui/delete-alert";
import { getTasks } from "@/app/api-handlers/get-tasks";
import { use } from "react";
import { Badge } from "@/components/ui/badge";

function Task({ task }: { task: TaskType }) {
  const status = { completed: "green", in_progress: "cyan", pending: "indigo" };
  const priority = { high: "red", medium: "amber", low: "rose" };

  return (
    <Card className="w-75 p-5">
      <CardHeader className="border-b">
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>
          {/*TODO Implement colors */}
          <div className="flex flex-evenly gap-2 pt-2">
            <Badge className={`${status[task.status]}-500 rounded-full`}>
              {task.status == "in_progress" ? "in progress" : task.status}
            </Badge>
            <Badge className={`${priority[task.priority]}-500 rounded-full`}>
              {task.priority}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {task.description}
        <div className="flex gap-2 justify-between">
          {task.due_date ? (
            <p className="text-muted-foreground text-sm">
              <Timer className="inline mr-2" />
              {new Date(task["due_date"]).toLocaleDateString()}{" "}
              {new Date(task["due_date"]).toLocaleTimeString()}
            </p>
          ) : (
            <p className="text-muted-foreground text-sm">
              <Timer className="inline mr-2" />
              No Due Date
            </p>
          )}
          <CardAction>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-yellow-500"
            >
              <Link href={`/tasks/edit/${task.id}`}>
                <Edit2 />
              </Link>
            </Button>
          </CardAction>
          <CardAction>
            <DeleteAlert id={task.id} />
          </CardAction>
        </div>
      </CardContent>
      <CardFooter className="border-t">
        <div className="text-muted-foreground text-xs flex flex-col gap-1">
          <p>
            Created At: {new Date(task["created_at"]).toLocaleDateString()}{" "}
            {new Date(task["created_at"]).toLocaleTimeString()}
          </p>
          <p>
            Updated At: {new Date(task["updated_at"]).toLocaleDateString()}{" "}
            {new Date(task["updated_at"]).toLocaleTimeString()}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

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
