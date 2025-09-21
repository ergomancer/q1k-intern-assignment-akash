import { postAddTask } from "@/app/api-handlers/add-task";

export default function NewTaskPage() {
  const statusOptions = ["completed", "in_progress", "pending"];
  const priorityOptions = ["low", "medium", "high"];

  return (
    <form action={postAddTask} className="flex flex-col gap-10 p-25">
      <div className="flex gap-10 items-center">
        <label htmlFor="title" className="w-50">
          Task Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="border p-2"
        />
      </div>
      <div className="flex gap-10 items-center">
        <label htmlFor="description" className="w-50">
          Task Description
        </label>
        <textarea
          name="description"
          placeholder="Task Description"
          className="border p-2"
        />
      </div>
      <div className="flex gap-10 items-center">
        <label className="w-50">Due Date</label>
        <input type="datetime-local" name="due_date" className="border p-2" />
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
                defaultChecked={option === "medium"}
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
                defaultChecked={option === "pending"}
              />
              <label htmlFor={option}>
                {option.charAt(0).toUpperCase() +
                  option.slice(1).replace("_", " ")}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Task
      </button>
    </form>
  );
}
