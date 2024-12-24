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
import Contact from "../pages/Contact/Contact";
import TeamLayout from "../layouts.jsx/TeamLayout";
import AddScrolling from "../components/TextFormat/AddScrolling";
import EventsDone from "../pages/Events/EventsDone";
import AddEvents from "../pages/Events/AddEvents";
import EventDetails from "../pages/Events/EventDetails";
import MemberDetails from "../pages/Team/MemberDetails";

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
        path: "events",
        element: <EventsDone />,
        loader: () => fetch(`${import.meta.env.VITE_BASE_URL}/events`),
      },
      {
        path: "/event/:details",
        element: <EventDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/event/${params.details}`),
      },
      {
        path: "add-events",
        element: (
          <PrivateRoute>
            <AddEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "services",
        element: <Services />,
      },

      {
        path: "/add-upcoming-events",
        element: (
          <PrivateRoute>
            <AddUpcomingEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/scrolling-text",
        element: <AddScrolling />,
      },

      {
        path: "/upcoming-events",
        element: <UpcomingEvents />,
        loader: () => fetch(`${import.meta.env.VITE_BASE_URL}/upcoming-events`),
      },
      {
        path: "/update-events/:id",
        element: <UpdateEvent />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_BASE_URL}/upcoming-events/${params.id}`
          ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <TeamLayout />,
      },
      {
        path: "/member/:id",
        element: <MemberDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/member/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
    ],
  },
]);
export default router;
