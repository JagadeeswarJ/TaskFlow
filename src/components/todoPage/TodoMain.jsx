import React, { useState } from "react";
import AddTasks from "./AddTasks";
import ShowTask from "./ShowTask";

function TodoMain() {
  let [tasks, setTasks] = useState([]);
  return (
    <div>
      <AddTasks tasks={tasks} setTasks={setTasks} />
      <ShowTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TodoMain;
