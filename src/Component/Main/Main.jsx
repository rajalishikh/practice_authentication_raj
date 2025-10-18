import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const Main = () => {
    return (
        <div className="min-h-svh flex flex-col">
            <Navbar></Navbar>
           <div className="flex-grow">
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;