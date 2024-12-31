import React from "react";
import { useForm } from "react-hook-form";

function AddTasks({ tasks, setTasks }) {
  const { register, handleSubmit } = useForm();
  function addNewTask(taskObj) {
    setTasks([...tasks, taskObj.newTask]);
  }
  return (
    <div className="container d-flex justify-content-center add_task_main">
      <div className="card  shadow-sm">
        <div className="card-header bg-primary text-white text-center">
          <h4>Add Task</h4>
        </div>

        <div className="card-body">
          <div className="mt-3">
            <form onSubmit={handleSubmit(addNewTask)}>
              <input
                type="text"
                placeholder="Enter your Task"
                className="form-control"
                {...register("newTask")}
              />
              <button
                type="submit"
                className="btn btn-success mt-3 border-round"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTasks;
