import React from "react";

function ShowTask({ tasks, setTasks }) {
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Current Tasks</th>
          </tr>
        </thead>
      </table>
      <div>
        <table>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task}</td>
                <button onClick={() => removeTask(index)}>remove</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowTask;
