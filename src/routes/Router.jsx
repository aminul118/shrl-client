import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts.jsx/MainLayout";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

import PrivateRoute from "./PrivateRoute";
import AddUpcomingEvents from "../pages/AddEvents/AddUpcomingEvents";
import UpcomingEvents from "../pages/Events/UpcomingEvents";
import UpdateEvent from "../pages/AddEvents/UpdateEvent";
import UpdateUpcnoming from "../pages/Admin/UpdateUpcoming";
import Contact from "../pages/Contact/Contact";
import TeamLayout from "../layouts.jsx/TeamLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
      {
        path: "/add-upcoming-events",
        element: (
          <PrivateRoute>
            <AddUpcomingEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/upcoming-events",
        element: <UpcomingEvents />,
        loader: () => fetch("http://localhost:5000/upcoming-events"),
      },
      {
        path: "/update-events/:id",
        element: <UpdateEvent />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/upcoming-events/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <TeamLayout />,
      },
    ],
  },
]);
export default router;
