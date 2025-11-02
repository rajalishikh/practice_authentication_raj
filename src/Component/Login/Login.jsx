import { useContext } from "react";
import Context from "../Context/Context";

const Login = () => {
  const {loginUser}=useContext(Context)
  console.log(loginUser)


  const handleLogin=(e)=>{
    e.preventDefault()
    console.log("The login form is SuccessFul ")
    const email=e.target.email.value 
    const password=e.target.password.value 
    console.log(email,password)
    loginUser(email,password)

  }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-2">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password"/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          
        </form>
      </div>
    </div>
            
            
        </div>
    );
};

export default Login;