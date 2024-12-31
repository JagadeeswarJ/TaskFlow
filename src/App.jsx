import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap w-100 h-100 align-items-center vh-100 main-page">
        <div className="text-center w-75">
          <h1 className="text-center d-block">TO-do list</h1>
          <p className="text-center">The most classic project</p>
          
          <TodoApp />
        </div>
      </div>
    </>
  );
}

export default App;
