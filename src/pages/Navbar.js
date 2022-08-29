import React from 'react';
import { Component } from 'react';
import weddingpdf from '../info-sheet.pdf'
import '../App.css';





//import { Link, animateScroll as scroll } from react-scroll;
//let Element = Scroll.Element;
export default class Navbar extends Component {
    
   //renders navigation bar for all other files in components folder 
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <React.Fragment>
                <header id="home" >
                    <nav id="nav-wrap" >
                        
                        <ul id="nav" className="nav" style= {{listStyle: 'none', }}>
                            
                            <li><a href="#about">About</a></li>
                            <li><a href="#footer">Contact</a></li>
                            <li><a href="#photos">Photos</a></li>
                            <li><a href="#music">Music</a></li>
                            <li><a href="#video">Video</a></li>
                            {/* <li><a href="#music"></a>Music</li> */}
                            <li><a href={weddingpdf}>Wedding Details</a></li>
                            
                            



                        

                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            
                                
                                {/* <div className="hero-header">Reckless at Tiffany's</div> */}
                                <header className="hero">
  <div className="center-content">
    <h1 id="logo-h1">Reckless at Tiffany's</h1>
    <h3>The Premier Minneapolis Cover band</h3>
    <a href={weddingpdf} className="book-event" target="_blank">Book your event today!</a>
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
            </React.Fragment>
        )
    }
}