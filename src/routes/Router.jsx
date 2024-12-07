import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts.jsx/MainLayout";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomeLayout from "../layouts.jsx/HomeLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ],
  },
]);
export default router;
