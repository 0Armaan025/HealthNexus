"use client";
import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './accessrequests.css';
import Navbar from "@/components/navbar/Navbar";

export default function AccessRequests() {
    return (
        <>
           <RootLayout>
            <CustomCursor/>

                <div className="accessRequestsPage">

                        <Navbar/>

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
                            <h1 className="font-bold text-3xl text-white" style={{fontFamily: "Poppins"}}>Access requests for the data!</h1>

                 
                                
                        </div>

                        


                    </div>
                    </div>  

           </RootLayout>
        </>
    );
}