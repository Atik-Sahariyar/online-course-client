import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Teachers from "../Pages/Teachers/Teachers";
import Success from "../Pages/Success/Success";
import Root from "../Layout/Root";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Pages/Home/Courses/CourseDetails";
import CourseEnrollment from "../Pages/Home/Courses/CourseEnrollment";
import AdminRoute from "./adminRoute";
import AddCourse from "../Dashboard/AdminDashboard/AddCourse/AddCourse";
import ManageCourse from "../Dashboard/AdminDashboard/ManageCourse/ManageCourse"
import UploadContent from "../Dashboard/AdminDashboard/ManageCourse/UploadContent"
import MyClasses from "../Dashboard/UserDahboard/MyClasses/MyClasses";

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
      // admin routes
      {
        path: "addCourse",
        element: <AdminRoute><AddCourse></AddCourse></AdminRoute>,
      },
      {
        path: "manageCourse",
        element:<AdminRoute> <ManageCourse></ManageCourse></AdminRoute>,
      },
      {
        path: "uploadContent/:id",
        element:<AdminRoute> <UploadContent></UploadContent> </AdminRoute>,
      },
      // user routes
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
    ],
  }
]);

export default routes;
