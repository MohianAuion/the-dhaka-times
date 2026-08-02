import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import CategoriesNews from "../Pages/CategoriesNews/CategoriesNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Error from "../Pages/Error/Error";
import Loading from "../Pages/Loading/Loading";

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    loader: () => fetch('/news.json'),
     HydrateFallback:Loading,
    children: [
      {
        index: true,
        Component: CategoriesNews,
        loader: () => fetch('/news.json'),
         HydrateFallback:Loading,
      },
      {
        path: 'categories/:id',
        Component: CategoriesNews,
        loader: () => fetch('/news.json'),
         HydrateFallback:Loading,
      }
    ]
  }, 
  {
    path: '/newsdetails/:id',
    element:(
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader:()=>fetch('/news.json'),
    HydrateFallback:Loading,
  }, {
    path: '/auth',
    Component: AuthLayout,
    children:[
      {
        path:'/auth/login',
        Component:Login
      },
      {
        path:'/auth/register',
        Component:Register
      }
    ]
  }, {
    path: '/*',
  Component:Error,
  }
]);

export default router;