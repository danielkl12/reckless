import React, { useState, useEffect } from 'react';
import { Component } from 'react';
// import weddingpdf from '../info-sheet.pdf'
import '../App.css';



function Navbar(props) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 900);
    };

    useEffect(() => {
        window.addEventListener('resize', updatePredicate);
        return () => {
            window.removeEventListener('resize', updatePredicate);
        };
    }, []);

  
        
        return (
            
        <header id="home">
                {isDesktop ? (
                    
                        <div>
                            <nav id="nav-wrap" className="hidden-mobile">
                            <ul id="nav" className="nav" style= {{listStyle: 'none', }}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#footer">Contact</a></li>
                            <li><a href="#photos">Photos</a></li>
                            <li><a href="#music">Music</a></li>
                            <li><a href="#video">Video</a></li>
                            <li><a href="#event">Event Information</a></li>
                            </ul>
                            </nav>
                        </div>
                ) : (
                    <div>
                        <nav id="nav-wrap" className="navbar-mobile">
                            <ul id="nav" className="nav" style= {{listStyle: 'none', }}>
                            <li style={{fontSize: "20px"}}><a href="#about">About</a></li>
                            <li style={{fontSize: "20px"}}><a href="#footer">Contact</a></li>
                            {/* <li style={{fontSize: "14px"}}><a href="#photos">Photos</a></li> */}
                            <li style={{fontSize: "20px"}}><a href="#music">Music</a></li>
                            <li style={{fontSize: "20px"}}><a href="#video">Video</a></li>
                            <li style={{fontSize: "20px"}}><a href="#event">Events</a></li>
                            </ul>
                        </nav>
                        
                    </div>

                )}
                {/* </ul> */}
                {/* </nav> */}
                
                <div className="row banner">
                        <div className="banner-text">
                            
                                
                                {/* <div className="hero-header">Reckless at Tiffany's</div> */}
                                <header className="hero" style={{size:"20px"}}>
  <div data-aos='fade-in' data-aos-duration="2000" className="center-content">
    <h1  id="logo-h1">Reckless at Tiffany's</h1>
    <h3  style={{color:'white'}}>The Premier Minneapolis Cover band</h3>
    <div ><a href="#event" className="book-event">Book your event today!</a></div>
  </div>
</header>

                                
                        </div>
                    </div>

                    <p className="scrolldown">
                       
                    </p>
                </header>
                
    
        )};

export default Navbar;
  
                    

                
            
        
