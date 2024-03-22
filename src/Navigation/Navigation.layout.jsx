import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "../Pages/Projects/CreateProject.layout";
import HomePage from "../Pages/Home/Home.layout";
import Backlog from "../Pages/Tasks/Backlog.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/backlog",
        element: <Backlog />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
    ],
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
