import React from 'react';
import 'animate.css';

import { Component, setState } from 'react';
// import weddingpdf from '../info-sheet.pdf'
import '../App.css';







export default class Navbar extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
        isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount = () => {
            this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
        }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
        }
    
    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 900,});
        }

    render() {
        const isDesktop = this.state.isDesktop;
       

        let portfolioData = this.props.portfolioData;
        
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
  <div className="center-content">
    <h1 class="animate__animated animate__fadeIn animate__delay-.7s" id="logo-h1">Reckless at Tiffany's</h1>
    <h3 class="animate__animated animate__fadeIn animate__delay-.7s" style={{color:'white'}}>The Premier Minneapolis Cover band</h3>
    <div class="animate__animated animate__fadeInUp animate__delay-1s"><a href="#event" className="book-event">Book your event today!</a></div>
  </div>
</header>

                                <ul className="links" style={{listStyle:'none'}}>
                                    {
                                        portfolioData.links && portfolioData.links.map(item => {
                                        return(
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank" rel="noreferrer"><i className={item.className}></i></a>
                                            </li>
                                        )
                                        }
                                        )
                                    }

                                </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                       
                    </p>
                </header>
                
    
        )}
    };


  
                    

                
            
        
