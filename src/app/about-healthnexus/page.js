"use client";
import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './aboutus.css';
import ScrollContent from "@/components/scrollcontent/ScrollContent";
import Navbar from "@/components/navbar/Navbar";
import Typical from "react-typical";

export default function AboutUs() {
    return (
        <>
            <RootLayout>
                <CustomCursor />

                <div className="aboutUsPage">

                    <Navbar />
                    <br/>
                    <center>
                        <h2 className="text-5xl text-white font-bold">About HealthNexus 🏥</h2>
                    </center>
                    <ScrollContent>
                        <center>
                        <h2 className="text-5xl text-white font-extrabold">It is not a project,</h2>
                        <h2 className="text-4xl text-white font-bold">It is an ambition</h2>
                        <Typical className="text-3xl text-white font-semibold"
                steps={[
                  'to help the patients,',
                  1000,
                  'to help the researchers, research,',
                  1000,
                  'to make an impact in the world,',
                  1000,
                  'to truly have eradication of diseases.',
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
                        </center>

                    </ScrollContent>

                    <center>
                            <h4 className="text-white font-2xl mt-44">Made with 💖 by Armaan in Web5.js hackathon that incorporates web5.js, blockchain network, firebase integration, tailwind css, NextJS and a lot more!</h4>
                        </center>

                </div>
            </RootLayout>
        </>
    );
}