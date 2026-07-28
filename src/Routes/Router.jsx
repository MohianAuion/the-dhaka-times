import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import NewsLayout from "../Layouts/NewsLayout";
import AuthLayout from "../Layouts/AuthLayout";
import ErrorLayout from "../Layouts/ErrorLayout";
import CategoriesNews from "../Pages/CategoriesNews/CategoriesNews";

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: CategoriesNews,
        loader: () => fetch('/news.json'),
      },
      {
        path: 'categories/:id',
        Component: CategoriesNews,
        loader: () => fetch('/news.json'),
      }
    ]
  }, {
    path: '/news',
    Component: NewsLayout
  }, {
    path: '/auth',
    Component: AuthLayout
  }, {
    path: '/*',
    Component: ErrorLayout
  }
]);

export default router;