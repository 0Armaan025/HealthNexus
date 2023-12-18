import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
        <div className="navBar">
            {/* some items */}

            <img src="https://healthnexussolution.com/wp-content/uploads/2023/02/NextGen.png" height="55px" width="100px" alt="logo" className="logo mr-44"/>

              <div className="centerItems mr-40 ml-32"><li>Home</li>
            <li>Public datasets</li>
            <li>Marketplace</li>
            <li>About Us</li></div>
          
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png" height="60px" width="60px" alt="logo" className="logo ml-44"/>
        </div>  
    </>
  )
}

export default Navbar
