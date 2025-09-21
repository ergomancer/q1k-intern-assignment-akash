import { putEditTask } from "@/app/api-handlers/edit-task";
import { use } from "react";
import { getTask } from "@/app/api-handlers/get-tasks";

export default function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const task = use(getTask(id));
  const priorityOptions = ["low", "medium", "high"];
  const statusOptions = ["completed", "in_progress", "pending"];

  return (
    <form action={putEditTask} className="flex flex-col gap-10 p-25">
      <div className="flex gap-10 items-center">
        <label htmlFor="title" className="w-50">
          Task Title
        </label>
        <input
          type="text"
          name="title"
          defaultValue={task.title}
          className="border p-2"
        />
      </div>
      <div className="flex gap-10 items-center">
        <label htmlFor="description" className="w-50">
          Task Description
        </label>
        <textarea
          name="description"
          defaultValue={task.description}
          className="border p-2"
        />
      </div>
      <div className="flex gap-10 items-center">
        <label className="w-50">Due Date</label>
        <input
          type="datetime-local"
          name="due_date"
          className="border p-2"
          defaultValue={task.due_date}
        />
      </div>
      <fieldset className="p-5 border">
        <legend>Priority</legend>
        <div className="flex flex-col gap-5">
          {priorityOptions.map((option) => (
            <div className="flex gap-10 items-center" key={option}>
              <input
                type="radio"
                name="priority"
                value={option}
                id={option}
                defaultChecked={task.priority === option}
              />
              <label htmlFor={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <fieldset className="p-5 border">
        <legend>Status</legend>
        <div className="flex flex-col gap-5">
          {statusOptions.map((option) => (
            <div className="flex gap-10 items-center" key={option}>
              <input
                type="radio"
                name="status"
                value={option}
                id={option}
                defaultChecked={task.status === option}
              />
              <label htmlFor={option}>
                {option.charAt(0).toUpperCase() +
                  option.slice(1).replace("_", " ")}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <input type="hidden" name="id" value={task.id} />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Edit Task
      </button>
    </form>
  );
}
