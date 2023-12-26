"use client";
import RootLayout from "../layout";
import CustomCursor from "@/components/cursor/Cursor";
import './myrecords.css';
import Navbar from "@/components/navbar/Navbar";
import RecordTile from "@/components/record-tile/RecordTile";

export default function MyRecords() {
    return (
        <>
            <RootLayout>
                <CustomCursor />

                <div className="myRecordsPage">

                    <Navbar />

                    <div className="profileBoxes">
                        <div className="profileSideBar">
                            <ul>
                                <li>Profile</li>
                                <hr />
                                <li>Dashboard</li>
                                <hr />

                                <li>My records</li>
                                <hr />
                                <li>Access requests</li>
                                <hr />
                                <li>Optimizations</li>



                            </ul>
                        </div>
                        <div className="profileRightBox ml-16 mt-8">
                            <h1 className="font-bold text-5xl text-white" style={{ fontFamily: "Poppins" }}>My Records!</h1>
                            <br />

                            <RecordTile/>

                            

                        </div>




                    </div>
                </div>
            </RootLayout>
        </>
    );
} 