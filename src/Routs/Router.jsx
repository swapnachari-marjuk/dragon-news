import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Components/HomeLayout/CategoryNews";

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
        // hydrateFallbackElement: (
        //   <span className="loading loading-dots loading-xl"></span>
        // ),
      },
    ],
  },
  {
    path: "/news",
    element: <h3 className="text-2xl text-center">News</h3>,
  },
]);

export default router;
