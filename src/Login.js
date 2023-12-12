import { useState } from "react";
import Header from "./Header";

const Login = () =>{

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        // Just Toggling the Variable Value Here
        setIsSignInForm(!isSignInForm);
    }

    return <div>

        <Header/>
        <div className="absolute">
        <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/7cb9679b-dd82-47aa-8629-efe9606364cf/CA-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bkg image"/>
        </div>

        <div>
            <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg">
            <h1 className="font-bold text-3xl py-4 m-4">{isSignInForm?"Sign In":"Sign Up"} </h1>
            {!isSignInForm && (
                <>
                <input type="text" placeholder="First Name" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <input type="text" placeholder="Last Name" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <input type="text" placeholder="Phone Number" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>

                </>
            )}
                <input type="text" placeholder="Email Address" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <input type="password" placeholder="Password" className="py-4 px-4 m-4 w-full bg-gray-700 rounded-lg"></input>
                <button className="py-2 m-4  bg-red-700 w-full rounded-lg font-semibold">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="px-2 cursor-pointer" onClick={toggleSignInForm}>{!isSignInForm?"Already Regestered Sign In Now.":"New To Movie Buddy? Sign Up Now"}</p>
            </form>
        </div>
    </div>



}

export default Login;