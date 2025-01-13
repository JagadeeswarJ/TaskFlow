import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Todo from "./components/todoPage/TodoMain";
import EisenMain from "./components/eisenPage/EisenMain";
import Welcome from "./components/Welcome";
import RepeatedMain from "./components/repeatedTaskPage/RepeatedMain";

function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "todo",
          element: <Todo />,
        },
        {
          path: "welcome",
          element: <Welcome />,
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
