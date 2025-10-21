import Context from "../Context/Context";

const Authprovider = ({children}) => {
    console.log(children)
    return (
        <div>
            <Context.Provider value={"My name"}>
                {children}
            </Context.Provider>
           
            
        </div>
    );
};

export default Authprovider;