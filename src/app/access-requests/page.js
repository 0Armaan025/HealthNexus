"use client";
import CustomCursor from "@/components/cursor/Cursor";
import RootLayout from "../layout";
import './accessrequests.css';
import Navbar from "@/components/navbar/Navbar";
import Tile from "@/components/access-request-tile/tile";
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function AccessRequests() {
    return (
        <>
           <RootLayout>
            <CustomCursor/>

                <div className="accessRequestsPage">

                        <Navbar/>

                        <div className="profileBoxes">
                        <div className="profileSideBar">
                        <ul>
                                <li>Profile</li>
                                <hr />
                                <li>Dashboard</li>
                                <hr />
                                
                                <li>My records</li>
                                <hr />
                                <li>Access requests</li>
                                <hr />
                                <li>Optimizations</li>
                                
                                

                            </ul>
                        </div>
                        <div className="profileRightBox ml-16 mt-8">
                            <h1 className="font-bold text-3xl text-white" style={{fontFamily: "Poppins"}}>Access requests for the data!</h1>
                                <br/>
                               
                                <Container>
        <Row className="myRow">
          <Col sm>
           <Tile/>
          </Col>
          <Col sm>
            <Tile/>
          </Col>
          <Col sm>
            <Tile/>
          </Col>
        </Row>
      </Container>
                                
                        </div>

                        


                    </div>
                    </div>  

           </RootLayout>
        </>
    );
}