import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoApp from "./components/TodoApp";
import Header from "./components/Header";

function App() {
  return (
    <>
  

      <Header  />
    
      <div className="d-flex justify-content-center flex-wrap w-100 h-100 align-items-center vh-100 main-page">
        <div className="text-center w-75">
          <h1 className="text-center d-block text-white">TO-do list</h1>
          <p className="text-center text-white">
            Mange your task to improve your productivity
          </p>
          <TodoApp />
        </div>
      </div>
    </>
  );
}

export default App;
