import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
            path: '/',
            Component: Home
        }
    ]
  },
  {
    path: "/news",
    element: <h3 className="text-2xl text-center">News</h3>,
  },
]);

export default router;
