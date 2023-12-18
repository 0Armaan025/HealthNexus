"use client";

import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './profile.css';
import Typical from 'react-typical';
import Navbar from "@/components/navbar/Navbar";

export default function Profile() {
    return (
        <>
            <RootLayout>
                <CustomCursor />
                <div className="profilePage">
                    <Navbar />


                    {/* there's gotta be dashboard, side bar, a lot of stuff coming here and there  */}

                    <div className="profileBoxes">
                        <div className="profileSideBar">
                            <ul>
                                <li>Profile</li>
                                <hr />
                                <li>Dashboard</li>
                                <hr />
                                <li>Optimizations</li>

                            </ul>
                        </div>
                        <div className="profileRightBox ml-16 mt-8">
                            <h2 className="text-5xl" style={{ color: "white", fontFamily: "poppins" }}> Good evening Armaan! 👋🏻 </h2>
                            <br />
                            <div className="didContainer mr-72">
                                <h3 className="text-xl" style={{ color: "white", fontFamily: "sans-serif" }}>Your DID: d#@$32487cxX#23493r</h3>
                                <button className="copyBtn ml-6 pl-3 pr-3 pt-2 pb-2 rounded-lg">Copy</button>



                            </div>

                            <div className="profileStatsDiv">

                            <div className="helpedResearchersContainer mr-32">
                                <Typical
                                    steps={[
                                        'You have helped 311 researchers to know more about diseases. ✨',
                                        2000,
                                        '311 researchers were helped by you to know more about diseases. 🔥',
                                        2000,
                                    ]}
                                    wrapper="p"
                                    loop={Infinity}
                                />

                            </div>

                            <div className="helpedResearchersContainer">
                                <Typical
                                    steps={[
                                        "More people can be treated because of data submitted by you. 🤩",
                                        2000,
                                        'You have earned $5 in crypto yet. 🤑',
                                        2000,
                                    ]}
                                    wrapper="p"
                                    loop={Infinity}
                                />

                            </div>

                            </div>
                        </div>
                    </div>
                </div>

            </RootLayout>
        </>
    );
}