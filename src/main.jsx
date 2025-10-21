import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import Authprovider from './Component/Authprovider/Authprovider';
import './index.css';
import router from './Main/router';



createRoot(document.getElementById('root')).render(
  <Authprovider>
     <RouterProvider router={router} />,

  </Authprovider>
 
  
)
