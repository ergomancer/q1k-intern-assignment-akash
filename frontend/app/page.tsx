import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import AddTaskButton from "@/components/ui/add-task-button";
import TaskOverview from "@/components/ui/task-overview";

export default function Home() {
  const overviewHeads = [
    { text: "Total Tasks", count: 42, color: "bg-gray-500" },
    { text: "Pending Tasks", count: 15, color: "bg-yellow-500" },
    { text: "In-Progress Tasks", count: 10, color: "bg-blue-500" },
    { text: "Completed Tasks", count: 27, color: "bg-green-500" },
    { text: "High Priority", count: 5, color: "bg-red-500" },
  ];

  let recentTasks = [
    { title: "Design Homepage", status: "In-Progress", priority: "High" },
    { title: "Fix Bug #123", status: "Completed", priority: "Medium" },
    { title: "Prepare Presentation", status: "New", priority: "Low" },
    { title: "Update Documentation", status: "Pending", priority: "High" },
    { title: "Code Review", status: "In-Progress", priority: "Medium" },
  ];

  return (
    <div className="grid p-20 gap-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Your Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          {overviewHeads.map((head) => (
            <TaskOverview
              text={head.text}
              count={head.count}
              color={head.color}
              key={head.text}
            />
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
              className="flex gap-10 border-b p-5 flex-wrap"
            >
              <span className="flex-1">{task.title}</span>
              <span className="w-30">{task.status}</span>
              <span className="w-10">{task.priority}</span>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-end gap-10">
          <Button variant={"secondary"} className="bg-green-900" asChild>
            <Link href="/tasks">View All</Link>
          </Button>
          <AddTaskButton />
        </CardFooter>
      </Card>
    </div>
  );
}
