import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "lucide-react";
import Link from "next/link";
import AddTaskButton from "@/components/ui/add-task-button";

function TaskOverview({ text, count }: { text: string; count: number }) {
  return (
    <div className="flex">
      <span>{text}</span>
      <Badge>{count}</Badge>
    </div>
  );
}

export default function Home() {
  const overviewHeads = [
    { text: "Total Tasks", count: 42 },
    { text: "Pending Tasks", count: 15 },
    { text: "In-Progress Tasks", count: 10 },
    { text: "Completed Tasks", count: 27 },
    { text: "High Priority", count: 5 },
  ];

  let recentTasks = [
    { title: "Design Homepage", status: "In-Progress", priority: "High" },
    { title: "Fix Bug #123", status: "Completed", priority: "Medium" },
    { title: "Prepare Presentation", status: "New", priority: "Low" },
    { title: "Update Documentation", status: "Pending", priority: "High" },
    { title: "Code Review", status: "In-Progress", priority: "Medium" },
  ];

  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Your Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          {overviewHeads.map((head) => (
            <TaskOverview text={head.text} count={head.count} key={head.text} />
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Recent Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          {recentTasks.map((task) => (
            <div
              key={task.title}
              className="mb-2 flex justify-between border-b pb-2"
            >
              <span>{task.title}</span>
              <span>{task.status}</span>
              <span>{task.priority}</span>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant={"secondary"} asChild>
            <Link href="/tasks">View All</Link>
          </Button>
          <AddTaskButton />
        </CardFooter>
      </Card>
    </div>
  );
}
