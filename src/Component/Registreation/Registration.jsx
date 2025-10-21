import { useContext } from "react";
import Context from "../Context/Context";



const Registration = () => {
  const useData=useContext(Context)
  console.log(useData)

  
  const handleSubmit=(e)=>{
        console.log(e)
        e.preventDefault()
        const email=e.target.email.value 
        const name=e.target.name.value 
        const password=e.target.password.value 
        const phone=e.target.number.value
        console.log(email,name,password,phone) 
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
        </form>
      </div>
   
  </div>
</div>
            
        
    );
};

export default Registration;