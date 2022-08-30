import '../App.css';
import React, { Component } from 'react';
import privateevent from '../privateevent.pdf';
import wedding from '../wedding.pdf';
export default class About extends Component {
    
    
    //renders about page with profile picture, about me sections, etc
    render() {
        
        return (
            <section id="event">
                <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Event Information</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                        Whether you’re looking to electrify the dance floor at your wedding or rock out at your next private/corporate event, Reckless At Tiffany’s has you covered!
                        </div>

                        <div className="center-content">
   
    <a href={wedding} className="book-event" target="_blank" style={{marginBottom:"10px", marginTop:"20px", backgroundColor:"black", borderRadius:"5px"}}>Wedding Info</a>
    <a href={privateevent} className="book-event" target="_blank" style={{backgroundColor:"black", borderRadius:"5px"}}>Private Event Info</a>
  </div>

                        
         



                        

                        

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