import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase";
import Context from "../Context/Context";

const Authprovider = ({children}) => {
    

    const registerUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
       }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
      }

    const authInformation={
        registerUser,
        loginUser
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