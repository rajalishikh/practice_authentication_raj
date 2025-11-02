import { useContext, useState } from "react";
import Context from "../Context/Context";



const Registration = () => {
        
  const {registerUser}=useContext(Context)
  const [error,setError]=useState("");
  const [success,setSuccess]=useState(false)

  

  
  const handleSubmit=(e)=>{
        console.log(e)
        e.preventDefault()
        const email=e.target.email.value 
        const name=e.target.name.value 
        const password=e.target.password.value 
        const phone=e.target.number.value
        console.log(email,name,password,phone) 
        if(password.length <= 6){
          setError("You have must be 6 Character")
          return 
        }
        registerUser(email,password)
        setSuccess(true)

        
       
    }
    return (
        <div>
           
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-3">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">Phone Number</label>
          <input name="number" type="number" className="input" placeholder="Phone Number" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Registration </button>
          <div>
            {error && <h3 className="text-red-500 font-extrabold">{error}</h3>}
            {success && <h3 className="text-green-500 font font-extrabold">Your registration is Success</h3>}
          
          </div>
        </form>
      </div>
   
  </div>
</div>
            
        
    );
};

export default Registration;