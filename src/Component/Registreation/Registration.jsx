
const Registration = () => {
    return (
        <div>
           
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-3">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Phone Number</label>
          <input type="number" className="input" placeholder="Phone Number" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Registration </button>
        </form>
      </div>
   
  </div>
</div>
            
        
    );
};

export default Registration;