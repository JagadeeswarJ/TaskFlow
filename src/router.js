import EisenMain from "../src/components/eisenPage/EisenMain";
import RepeatedMain from "../src/components/repeatedTaskPage/RepeatedMain";
import TodoMain from "../src/components/todoPage/TodoMain";
import Home from "../src/components/Home";

const router = [
  { path: "/", component: Home },
  { path: "/todo", component: TodoMain },
  { path: "/eisen", component: EisenMain },
  { path: "/repeatedTask", component: RepeatedMain },
  { path: "*", component: Home },
];

export default router;
