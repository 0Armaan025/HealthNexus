"use client";

import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './newhealthrecord.css';
import Navbar from "@/components/navbar/Navbar";

export default function NewHealthRecord() {
    return (
        <>
            <RootLayout>
                <CustomCursor/>
                <div className="newHealthRecordPage">
                    <Navbar/>
                    <br/>
                    <center>
                        <h2 className="text-5xl font-bold" style={{color: "white",fontFamily: "Libre Baskerville, sans-serif"}}>New Health Record 🧑🏻‍⚕️</h2>
                        </center>
                        <div className="vitalSignsDiv m-8">
                            
                        <h4 className="text-3xl font-semibold mt-2" style={{color: "black", fontFamily: "Poppins"}}>Vital Signs.</h4>
                        <input type="number" placeholder="Enter your Blood Pressure" className="healthRecordInputField"/>
                        <input type="number" placeholder="Enter your Heart Rate" className="healthRecordInputField"/>
                        <input type="number" placeholder="Enter temperature" className="healthRecordInputField"/>
                        <input type="number" placeholder="Enter respiration rate" className="healthRecordInputField"/>
                        <input type="number" placeholder="Enter your weight" className="healthRecordInputField"/>
                        </div>
                    
                </div>
            </RootLayout>
        </>
    );
}