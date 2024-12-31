import React, { useState } from "react";
import AddTasks from "./AddTasks";
import ShowTask from "./ShowTask";

function TodoApp() {
  let [tasks, setTasks] = useState([]);
  return (
    <div className="d-flex justify-content-around">
      <div className="vw-50">
        <AddTasks tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="w-50">
        <ShowTask tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default TodoApp;
