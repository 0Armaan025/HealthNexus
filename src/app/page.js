"use client";
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import './landingpage.css';
import CustomCursor from '@/components/cursor/Cursor';

export default function Home() {
  return (
    <>
      <main>
      <CustomCursor />
        <div className='landingPage'>
        {/* this is gonna be our landing page, i.e / route */}

        <Navbar/>
        </div>
      </main>
    </>
  )
}
