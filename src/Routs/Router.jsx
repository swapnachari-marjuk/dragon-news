import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Components/HomeLayout/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/AuthLayout/Login";
import Register from "../Components/AuthLayout/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path:'/auth',
    Component: AuthLayout,
    children:[
      {
        path:'/auth/login',
        Component: Login 
      },
      {
        path:'/auth/register',
        Component: Register
      }
    ]
  },
  {
    path: "/news",
    element: <h3 className="text-2xl text-center">News</h3>,
  },
]);

export default router;
