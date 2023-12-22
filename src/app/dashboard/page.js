"use client";
import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './dashboard.css';
import Navbar from "@/components/navbar/Navbar";

export default function Dashboard() {
    return (
        <>
            <RootLayout>
                <CustomCursor />
                <div className="dashboardPage">
                    <Navbar/>
                </div>
            </RootLayout>
        </>
    );
}