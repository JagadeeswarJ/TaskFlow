import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Todo from "./components/todoPage/TodoMain";
import EisenMain from "./components/eisenPage/EisenMain";
import Home from "./components/Home";
import RepeatedMain from "./components/repeatedTaskPage/RepeatedMain";

function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="home" />,
        },
        {
          path: "todo",
          element: <Todo />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "eisen",
          element: <EisenMain />,
        },
        {
          path: "repeatedTask",
          element: <RepeatedMain />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouterObj} />;
}

export default App;
