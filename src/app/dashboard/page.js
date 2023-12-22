"use client";
import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './dashboard.css';
import Navbar from "@/components/navbar/Navbar";

import { useEffect } from "react"
import { Chart } from "chart.js";

export default function Dashboard() {


    useEffect(() => {
           var ctx = document.getElementById('myChart').getContext('2d');
           var myChart = new Chart(ctx, {
             type: 'bar',
             data: {
               labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                  data: [86, 114, 106, 106, 107, 111, 133],
                  label: "Applied",
                  borderColor: "#3e95cd",
                  backgroundColor: "#7bb6dd",
                  fill: false,
                }, {
                  data: [70, 90, 44, 60, 83, 90, 100],
                  label: "Accepted",
                  borderColor: "#3cba9f",
                  backgroundColor: "#71d1bd",
                  fill: false,
                }, {
                  data: [10, 21, 60, 44, 17, 21, 17],
                  label: "Pending",
                  borderColor: "#ffa500",
                  backgroundColor: "#ffc04d",
                  fill: false,
                }, {
                  data: [6, 3, 2, 2, 7, 0, 16],
                  label: "Rejected",
                  borderColor: "#c45850",
                  backgroundColor: "#d78f89",
                  fill: false,
                }
                ]
              },
            });
          }, [])

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
                        </div>
                    </div>
                </div>
                <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
            </RootLayout>
        </>
    );
}