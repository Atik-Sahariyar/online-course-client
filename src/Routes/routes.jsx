import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Teachers from "../Pages/Teachers/Teachers";
import Success from "../Pages/Success/Success";
import Root from "../Layout/Root";
import Dashboard from "../Layout/Dashboard";
import AddCourse from "../Pages/Dashboard/AdminDashboard/AddCourse/AddCourse";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Pages/Home/Courses/CourseDetails";
import CourseEnrollment from "../Pages/Home/Courses/CourseEnrollment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails></CourseDetails>
      },
      {
        path: "/courseEnrollment/:id",
        element: <CourseEnrollment></CourseEnrollment>
      },
      {
        path: "/teachers",
        element: <Teachers></Teachers>,
      },
      {
        path: "/success",
        element: <Success></Success>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addCourse",
        element: <AddCourse></AddCourse>,
      },
    ],
  }
]);

export default routes;
