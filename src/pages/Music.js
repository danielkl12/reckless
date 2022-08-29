import React, {Page} from 'react';
import ReactPlayer from "react-player"
import { Component } from 'react';
export default class Music extends Component {
    render() {
        let portfolioData = this.props.portfolioData;
        return(
            <section id="music">
                <div className="row">
                    <div className="columns">
                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Music</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                            
                        </div>

                        
                    </div>
                    </div>


                    
                <ReactPlayer
        url="https://soundcloud.com/user-561841802"
                                                    />
                       

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
                
            </section>
            



 
    
  )
        }  }

