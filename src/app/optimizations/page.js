"use client";

import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './optimizations.css';

import Typical from 'react-typical';
import Navbar from "@/components/navbar/Navbar";

export default function Profile() {
    return (
        <>
            <RootLayout>
                <CustomCursor />
                <div className="optimizationsPage">
                    <Navbar />


                    {/* there's gotta be dashboard, side bar, a lot of stuff coming here and there  */}

                    <div className="profileBoxes">
                        <div className="profileSideBar">
                            <ul>
                                <li>Profile</li>
                                <hr />
                                <li>Dashboard</li>
                                <hr />


                                <li>Access requests</li>
                                <hr/>
                                <li>Optimizations</li>
                                

                            </ul>
                        </div>
                        <div className="profileRightBox ml-16 mt-8">

                            <h1 className="text-3xl" style={{color: "white"}}> You can choose a ton of options required from here </h1>

                                


                        </div></div>
                </div>

            </RootLayout>
        </>
    );
}