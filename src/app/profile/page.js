"use client";

import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './profile.css';
import Navbar from "@/components/navbar/Navbar";

export default function Profile() {
    return (
        <>
            <RootLayout>
                <CustomCursor/>
                        <div className="profilePage">
                                    <Navbar/>


                                    {/* there's gotta be dashboard, side bar, a lot of stuff coming here and there  */}

                                    <div className="profileBoxes">
                                        <div className="profileSideBar">
                                            <ul>
                                                <li>Profile</li>
                                                <hr/>
                                                <li>Dashboard</li>
                                                <hr/>
                                                <li>Optimizations</li>

                                            </ul>
                                        </div>
                                        <div className="profileRightBox ml-16 mt-8">
                                            <h2 className="text-5xl" style={{color: "white", fontFamily: "poppins"}}> Good evening Armaan! 👋🏻 </h2>
                                            <br/>
                                            <div className="didContainer mr-72">
                                            <h3 className="text-xl" style={{color: "white",fontFamily: "sans-serif"}}>Your DID: d#@$32487cxX#23493r</h3>
                                            <input type="button" value="Copy" className="copyBtn ml-6 background-whitesmoke"/>
                                            </div>
                                        </div>
                                        </div>
                            </div>
                   
            </RootLayout>
        </>
    );
}