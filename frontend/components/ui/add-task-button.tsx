import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AddTaskButton() {
  return (
    <Button variant={"secondary"} asChild className="bg-blue-900">
      <Link href="/tasks/new">Add Task</Link>
    </Button>
  );
}
