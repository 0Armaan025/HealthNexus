"use client";
import CustomCursor from '@/components/cursor/Cursor';
import RootLayout from '../layout';
import './login.css';
import Navbar from '@/components/navbar/Navbar';

export default function Login() {
    return (
        <>  
        
            <RootLayout>
                <CustomCursor/>
                
                    {/* real thing starts here   */}



                    <div className="loginPage">

                        <Navbar/>
<center>
                        <div className="loginBox rounded">
                                <h2 className='font-bold text-4xl p-4 mb-8' style={{color: "black"}}> Login Time! </h2>
                                <input type="email" placeholder='Enter your email' className='pl-6 pr-6 pt-2 pb-2  rounded shadow-2xl' style={{color: "white"}}/>
                                <input type="password" placeholder='Enter your password' className='pl-6 pr-6 pt-2 pb-2 m-4  rounded shadow-2xl' style={{color: "white"}}/>
                                <input type="button" value="Login" className='loginBtn rounded shadow-2xl'/>
                                <h4><b>Or</b></h4>
                                <h5 className='ml-44'>Already a user?</h5>
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