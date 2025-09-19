import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AddTaskButton() {
  return (
    <Button variant={"secondary"} asChild>
      <Link href="/tasks/new">Add Task</Link>
    </Button>
  );
}
