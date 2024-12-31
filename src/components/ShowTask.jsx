import React from "react";

function ShowTask({ tasks, setTasks }) {
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <table className="table table-bordered">
        <thead className="table-dark ">
          <tr>
            <th>Current Tasks</th>
          </tr>
        </thead>
      </table>
      <div className="table_content">
        <table className="table table-bordered">
          <tbody className="table_content">
            {/* implement dynamic remove button with hover effect, explore css properties of hover(child parent requiment)*/}
            {tasks.map((task, index) => (
              <tr key={index} className="d-flex justify-content-around">
                <td className="current-hovering-row">
                  {task}

                  {/* Passing a Callback
When you pass a callback (e.g., someFunction or () => someFunction()), you're passing the function's reference without executing it. This ensures the function will run later, not at the time of declaration. */}
                </td>
                <button
                  className="btn btn-danger dynamic-button h-50"
                  onClick={() => removeTask(index)}
                >
                  remove
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowTask;
