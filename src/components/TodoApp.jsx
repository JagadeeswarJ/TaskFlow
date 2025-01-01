import React, { useState } from "react";
import AddTasks from "./AddTasks";
import ShowTask from "./ShowTask";

function TodoApp() {
  let [tasks, setTasks] = useState([]);
  return (
    <div className="d-flex justify-content-around">
      <div>
        <AddTasks tasks={tasks} setTasks={setTasks} />
      </div>
      <div>
        <ShowTask tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default TodoApp;
