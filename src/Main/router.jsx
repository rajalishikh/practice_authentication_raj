import { createBrowserRouter } from "react-router";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Main from "../Component/Main/Main";
import Registration from "../Component/Registreation/Registration";
import "./../App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        
        {
            path:"/Login",
            element:<Login></Login>
        },
        {
            path:"/Registration",
            element:<Registration></Registration>
        }
    ]
  },
]);
export default router