"use client";

import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './optimizations.css';

import {
    TuiDateTimePicker
  } from 'nextjs-tui-date-picker';
import Typical from 'react-typical';
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Profile() {

    const items = [
        {
            key: "public",
            label: "Be Public",
        },
        {
            key: "anonymous",
            label: "Anonymous (100%)",
        },
        {
            key: "partial-anonymous",
            label: "Partial-anonymous (50%), only basic data shown",
        },
        {
            key: "ask",
            label: "Ask every time before uploading data",
        }
    ];

    const options = {
        language: 'en',
        format: 'MM-dd YYYY',
      };

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
                                <hr />
                                <li>Optimizations</li>


                            </ul>
                        </div>
                        <div className="profileRightBox ml-16 mt-8">
                            
                            <h2 className="text-3xl text-white font-semibold" style={{fontFamily: "monospace"}}>Your current information:</h2>
                            <h4 className="text-white font-light">Name: Armaan</h4>
                            <h4 className="text-white font-light">email: armaan33000@gmail.com</h4>
                            <h4 className="text-white font-light">DID: 2473!#48dsaf!@</h4>
                            <h4 className="text-white font-light">Anonymity status: 100%</h4>
                            <h4 className="text-white font-light">Data accessed by: 24123 researchers</h4>
                            <br/>

                            <div className="optionsBigBox">

                            <h1 className="text-3xl" style={{ color: "white" }}> You can choose a ton of options required from here: </h1>
                            <br/>
                            <label className="text-xl text-white mr-4">Share full data with researchers?</label>
                            <label class="switch">
                                
                                <input type="checkbox" />

                                <span class="slider round"></span>
                            </label>
                            
                            
                    <hr className="mt-2 mb-2"/>
                    
                            <label className="text-xl text-white mr-4">Remain anonymous?</label>
                            <label class="switch">
                                
                                <input type="checkbox" />

                                <span class="slider round"></span>
                            </label>
                            <hr className="mt-2 mb-2"/>
                            <Dropdown className="mt-4" style={{border: "1px solid white", padding: "4px"}}>
                                <DropdownTrigger>
                                    <Button style={{color: "white"}} className="text-xl"
                                        variant=""
                                    >
                                        Choose your anonymity level:
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Dynamic Actions" items={items}>
                                    {(item) => (
                                        <DropdownItem
                                            key={item.key}
                                            color={item.key === "delete" ? "danger" : "default"}
                                            className={item.key === "delete" ? "text-danger" : ""}
                                        >
                                            {item.label}
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            <hr className="mt-2 mb-2"/>
                    
                    <label className="text-xl text-white mr-4">Stop further data usage</label>
                    <label class="switch">
                        
                        <input type="checkbox" />

                        <span class="slider round"></span>
                    </label>
                    <hr className="mt-2 mb-2"/>

                    <label className="text-xl text-white font-bold">Automate stoppage of data sharing using date and time</label>
                    <TuiDateTimePicker
    handleChange={(date) => console.log(date)}
    date={new Date('2023-01-01')}
    inputWidth={140}
    fontSize={16}
/>
                    <hr className="mt-2 mb-2"/>
                    <h4 className="text-white text-2xl mb-4 font-extrabold" style={{fontFamily: "Poppins"}}>Danger zone!</h4>
                    <button className="revokeAccessBtn">Revoke Access</button>

                    
                    </div>

<br/><br/>
                        </div></div>
                </div>

            </RootLayout>
        </>
    );
}