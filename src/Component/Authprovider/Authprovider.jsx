import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase";
import Context from "../Context/Context";

const Authprovider = ({children}) => {
    

    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
   console.log(error)
  });
  
    }

    const authInformation={
        registerUser
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