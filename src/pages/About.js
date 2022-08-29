import '../App.css';
import React, { Component } from 'react';
import weddingpdf from '../info-sheet.pdf';
export default class About extends Component {
    
    
    //renders about page with profile picture, about me sections, etc
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <section id="about">
                <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>About Reckless at Tiffany's</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                            Reckless at Tiffany's is a cover band based out of Minneapolis, Minnesota. Started in 2015 at the University of 
                            St. Thomas, Reckless at Tiffany's has gone on to play all around the Twin Cities metro area and beyond. Book your <a href={weddingpdf} target='_blank'>wedding or private event</a> today!
                        </div>

                        <p>
                            {
                                portfolioData.aboutMe
                            }

                        </p>

                        <div className="row">
                            <div className="columns contact-details">
                                
                                    
                                    
                                    
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}