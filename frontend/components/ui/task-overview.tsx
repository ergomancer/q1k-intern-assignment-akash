import { Badge } from "@/components/ui/badge";

export default function TaskOverview({
  text,
  count,
  color,
}: {
  text: string;
  count: number;
  color: string;
}) {
  return (
    <div className="flex justify-between border-b p-5">
      <span>{text}</span>
      <Badge className={`rounded-full ${color} text-md w-10`}>{count}</Badge>
    </div>
  );
}
