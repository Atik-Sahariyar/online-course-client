import Root from "../MainLayout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddCourse from "../Pages/AddCourses/AddCourse";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Teachers from "../Pages/Teachers/Teachers";
import Success from "../Pages/Success/Success";



const routes = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
               path: "/signup",
               element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/addCourse",
                element: <PrivateRoute> <AddCourse></AddCourse> </PrivateRoute>
            },
            {
                path: "/courseDetails/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`courses.json/${params.id}`)
            },
            {
                path: "/teachers",
                element: <Teachers></Teachers>
            },
            {
                path: "/success",
                element: <Success></Success>
            }
        ]
    }
])

export default routes;