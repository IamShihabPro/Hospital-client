import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Services from "../pages/Services/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/doctors",
            element: <DoctorDetails/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/services",
            element: <Services/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
    ]
  },
]);