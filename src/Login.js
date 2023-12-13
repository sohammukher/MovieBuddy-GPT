import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "./utils/validate"

const Login = () =>{

    const [isSignInForm, setIsSignInForm] = useState(true);


    const toggleSignInForm = () =>{
        // Just Toggling the Variable Value Here
        setIsSignInForm(!isSignInForm);
    }

    // Using useRef Hook : We can Use Reference Of the Email and Password References
    const email = useRef(null);
    const password = useRef(null);
    const nameF = useRef(null);
    const nameL = useRef(null);
    const phone = useRef(null);

    // Variable Defined to Show Password Validation Error Mssg
    const[errorMssg, setErrorMssg] = useState(null);

    const handleButtonClick = () =>{
        // Validation of the Form Data

        // current.value --> Done to Extract the actual fields from the Input Objects
        console.log("Email",email.current.value);
        console.log("Password",password.current.value)
        console.log("First Name",nameF.current.value)
        console.log("Last Name",nameL.current.value)
        console.log("Phone",phone.current.value)



        // Will Return Validation Mssg Defined in the Function
        const validationMssg = checkValidData(email.current.value,password.current.value,nameF.current.value,nameL.current.value,phone.current.value);

        console.log(validationMssg);
        
        // Setting to the Screen
        setErrorMssg(validationMssg)
    }

    return <div>

        <Header/>
        <div className="absolute">
        <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/7cb9679b-dd82-47aa-8629-efe9606364cf/CA-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bkg image"/>
        </div>

        <div>
            <form 
            onSubmit={(e)=> e.preventDefault()}
            className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg">
            <h1 className="font-bold text-3xl py-4 m-4">{isSignInForm?"Sign In":"Sign Up"} </h1>
            {!isSignInForm && (
                <>
                <input ref= {nameF} type="text" placeholder="First Name" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <input ref= {nameL} type="text" placeholder="Last Name" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <input ref={phone} type="text" placeholder="Phone Number" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                </>
            )}
                <input 
                ref={email}
                type="text" placeholder="Email Address" 
                className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <input 
                ref={password}
                type="password" placeholder="Password" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <p className="m-4 text-red-700 font-bold text-lg">{errorMssg}</p>
                <button  onClick={handleButtonClick} className="py-2 m-4  bg-red-700 w-full rounded-lg font-semibold">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="px-2 cursor-pointer" onClick={toggleSignInForm}>{!isSignInForm?"Already Regestered Sign In Now.":"New To Movie Buddy? Sign Up Now"}</p>
            </form>
        </div>
    </div>



}

export default Login;