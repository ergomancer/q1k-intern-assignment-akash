import { handleAddTask } from "@/app/form-handling";
import Link from "next/link";

export default function NewTaskPage() {
  return (
    <form action={handleAddTask} className="flex flex-col gap-10 p-25">
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
          <div className="flex gap-10 items-center">
            <input type="radio" name="priority" value="low" id="low" />
            <label htmlFor="low">Low</label>
          </div>
          <div className="flex gap-10 items-center">
            <input
              type="radio"
              name="priority"
              value="medium"
              id="medium"
              defaultChecked
            />
            <label htmlFor="medium">Medium</label>
          </div>
          <div className="flex gap-10 items-center">
            <input type="radio" name="priority" value="high" id="high" />
            <label htmlFor="high">High</label>
          </div>
        </div>
      </fieldset>
      <fieldset className="p-5 border">
        <legend>Status</legend>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 items-center">
            <input
              type="radio"
              name="status"
              value="completed"
              id="completed"
            />
            <label htmlFor="completed">Completed</label>
          </div>
          <div className="flex gap-10 items-center">
            <input
              type="radio"
              name="status"
              value="in_progress"
              id="in_progress"
            />
            <label htmlFor="in_progress">In Progress</label>
          </div>
          <div className="flex gap-10 items-center">
            <input
              type="radio"
              name="status"
              value="pending"
              id="pending"
              defaultChecked
            />
            <label htmlFor="pending">Pending</label>
          </div>
        </div>
      </fieldset>
      <input type="hidden" name="id" value="dummy_id" />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Task
      </button>
    </form>
  );
}
