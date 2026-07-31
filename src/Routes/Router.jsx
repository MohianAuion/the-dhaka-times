import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import CategoriesNews from "../Pages/CategoriesNews/CategoriesNews";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    loader: () => fetch('/news.json'),
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
    path: '/newsdetails/:id',
    Component: NewsDetails,
    loader:()=>fetch('/news.json'),
  }, {
    path: '/auth',
    Component: AuthLayout
  }, {
    path: '/*',
  element:<h2>error-404</h2>
  }
]);

export default router;