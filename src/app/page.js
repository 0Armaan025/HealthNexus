"use client";
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import './landingpage.css';
import Typical from 'react-typical';
import CustomCursor from '@/components/cursor/Cursor';

export default function Home() {
  return (
    <>
      <main>
      <CustomCursor />
      
        <div className='landingPage'>
        <Navbar/>
        {/* this is gonna be our landing page, i.e / route */}
        <div className='boxes'>
          <div className="leftBox ml-4 mt-12">
            <h2 className='font-bold text-8xl m-6' style={{color: "white", fontFamily: "Montserrat"}}>
              HealthNexus
            </h2>
            <h4 className='font-normal text-2xl mt-4 ml-8 mr-8 mb-8'>
            <Typical
                steps={[
                  'A platform for all your health needs.',
                  1000,
                  'We provide you with the best health services.',
                  1000,
                  'It helps researchers and you, get the benefit of web5.js',
                  1000,
                  'We are a team of developers, who are passionate about blockchain and healthcare.',
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
              
            </h4>
            <br/>
            <input type="button" value="Let's do it!" className='letsDoItBtn ml-8'/>
          </div>
          <div className="rightBox mt-12">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D" className='rounded-xl ml-12' height="250px" width="500px"/>
          </div>
        </div>
        
        </div>
      </main>
    </>
  )
}
