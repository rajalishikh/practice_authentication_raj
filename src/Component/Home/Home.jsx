import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const HomeContext=createContext(null)



const Home = ({children}) => {
    console.log(children)
    const [error,setEroor]=useState("error")
    

    
     return (
        
        <div>
            <HomeContext.Provider value={error}> 
                {children}
            </HomeContext.Provider>
           
            
        </div>
    );
};

export default  Home; 

