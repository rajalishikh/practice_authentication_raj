import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../Firebase/Firebase";
import Context from "../Context/Context";

const Authprovider = ({children}) => {
  const [user,setUser]=useState(null)
  console.log(user?.email)
    

    const registerUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
       }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
      }

    const authInformation={
        registerUser,
        loginUser,
        user,
        setUser
    }
    return (
        <div>
            <Context.Provider value={authInformation}>
                {children}
            </Context.Provider>
           
            
        </div>
    );
};

export default Authprovider;