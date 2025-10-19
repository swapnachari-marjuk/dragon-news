import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Components/HomeLayout/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/AuthLayout/Login";
import Register from "../Components/AuthLayout/Register";
import NewsDetails from "../Components/NewsDetails";
import PrivetRout from "../Provider/PrivetRout";
import Loading from "../Components/Loading";

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
        hydrateFallbackElement: <Loading/>
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivetRout>
        <NewsDetails></NewsDetails>
      </PrivetRout>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading/>
  },
]);

export default router;
