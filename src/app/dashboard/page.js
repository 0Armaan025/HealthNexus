"use client";
import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './dashboard.css';
import Navbar from "@/components/navbar/Navbar";
import MyBarChart from "@/components/barchart/BarChart";


export default function Dashboard() {


    

    return (
        <>
            <RootLayout>
                <CustomCursor />
                <div className="dashboardPage">
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
                            <h2 className="text-4xl" style={{color: "white"}}>
                                Welcome to your dashboard! 👋🏻
                            </h2>
                            

                            <h4 className="text-2xl mt-2" style={{color: "grey"}}>
                                You can get insightful information here!
                                </h4>

                                <br/>
                                
                            <div className="statDivsRows">

                              <div className="dataInformationContainer">
                              <h3>
                                 Data information(1):
                               </h3>

                               <h5>
                                You have helped 311 researchers to know more about diseases. ✨
                               </h5>
                              </div>

                              <div className="dataInformationContainer">
                              <h3>
                                 Data information(2):
                               </h3>

                               <h5>
                                 Records submitted: 12. 🔥
                               </h5>
                              </div>

                              <div className="dataInformationContainer">
                              <h3>
                                 Data information(3):
                               </h3>

                               <h5>
                                 Records accessed: 5🧑🏻‍⚕️
                               </h5>
                              </div>

                              </div>
                              <br/>

                              <center>
                                <h1 style={{color: "white", fontSize: "32px", fontWeight: "bold"}}>More Stats coming soon...</h1>
                                <h3 style={{color: "white"}}>Please keep an eye on updates and eat a pizza meanwhile... 🍕</h3>
                              </center>
                              
                 
                                
                        </div>

                        


                    </div>
                </div>
               
      
            </RootLayout>
        </>
    );
}