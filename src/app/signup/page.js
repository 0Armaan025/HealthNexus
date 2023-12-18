"use client";

import RootLayout from "../layout";
import CustomCursor from "@/components/cursor/Cursor";
import './signup.css';
import Navbar from "@/components/navbar/Navbar";

export default function SignUp() {
    return (
        <>

            <RootLayout>
                <CustomCursor />

                {/* real thing starts here   */}

                <div className="signUpPage">
                <Navbar/>
<center>
                        <div className="signUpBox rounded">
                                <h2 className='font-bold text-4xl p-4 mb-4' style={{color: "black"}}> Sign Up Time! </h2>
                                <input type="email" placeholder='Enter your name' className='pl-6 pr-6 pt-2 pb-2  rounded shadow-2xl' style={{color: "white"}}/>
                                <input type="email" placeholder='Enter your email' className='pl-6 pr-6 pt-2 pb-2 mt-2  rounded shadow-2xl' style={{color: "white"}}/>
                                <input type="password" placeholder='Enter your password' className='pl-6 pr-6 pt-2 pb-2 mt-2 mb-4  rounded shadow-2xl' style={{color: "white"}}/>
                                <br/>
                                <div className="userTypes">
                                <label className="mr-1 text-sm" >Researcher</label>
                                <input type="radio" name="type"/>
                                <label className="ml-4 mr-1 text-sm">Patient/User</label>
                                <input type="radio" name="type"/>
                                </div>
                                <br/>
                                <input type="button" value="Sign Up" className='signUpBtn rounded shadow-2xl'/>
                                <br/>
                                <h4><b>Or</b></h4>
                                <h5 className='ml-44'>New to the platform?</h5>
                                <div className='socialOptions'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" height="50px" width="40px" className='rounded-lg m-4'/>
                                    
                                    <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" height="50px" width="40px" className='rounded-lg m-4'/>
                                    
                                </div>
                                
                            </div>
                            
                            </center>
                            
                            
                        
                </div>
                
            </RootLayout>
        </>
    );
}