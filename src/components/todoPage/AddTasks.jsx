import React from "react";
import { useForm } from "react-hook-form";

function AddTasks({ tasks, setTasks }) {
  const { register, handleSubmit } = useForm();
  function addNewTask(taskObj) {
    setTasks([...tasks, taskObj.newTask]);
  }
  return (
    <div>
      <div>
        <div>
          <h4>Add Task</h4>
        </div>

        <div>
          <div>
            <form onSubmit={handleSubmit(addNewTask)}>
              <input
                type="text"
                placeholder="Enter your Task"
                {...register("newTask")}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTasks;
