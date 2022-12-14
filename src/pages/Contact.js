import '../App.css';
import React, { Component } from 'react';
import privateevent from '../privateevent.pdf';
import wedding from '../wedding.pdf';
export default class About extends Component {
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
        this.setState({ isDesktop: window.innerWidth > 1200,});
        }
    
    
    //renders about page with profile picture, about me sections, etc
    render() {
        const isDesktop = this.state.isDesktop;
        return (
            <section id="event">
                {isDesktop ? ( 
                <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Event Information</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                        Whether you’re looking to electrify the dance floor at your wedding or rock out at your next private/corporate event, Reckless At Tiffany’s has you covered!
                        </div>

                        <div className="center-content">
   
    <a href={wedding} className="book-event" target="_blank" style={{marginBottom:"10px", marginTop:"20px", backgroundColor:"black", borderRadius:"5px", opacity:"60%"}}>Wedding Info</a>
    <a href={privateevent} className="book-event" target="_blank" style={{backgroundColor:"black", borderRadius:"5px", opacity:"60%"}}>Private Event Info</a>
  </div>

                        
         



                        

                        

                        <div className="row">
                            <div className="columns contact-details">
                                
                                    
                                    
                                    
                              
                            </div>
                        </div>
                    </div>
                </div>
                ) : ( 
                    <div className="event-mobile">
                    <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Event Information</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                        Whether you’re looking to electrify the dance floor at your wedding or rock out at your next private/corporate event, Reckless At Tiffany’s has you covered!
                        </div>

                        <div className="center-content">
   
    <a href={wedding} className="book-event" target="_blank" style={{marginBottom:"10px", marginTop:"20px", backgroundColor:"black", borderRadius:"5px", opacity:"60%"}}>Wedding Info</a>
    <a href={privateevent} className="book-event" target="_blank" style={{backgroundColor:"black", borderRadius:"5px", opacity:"60%"}}>Private Event Info</a>
  </div>

                        
         



                        

                        

                        <div className="row">
                            <div className="columns contact-details">
                                
                                    
                                    
                                    
                              
                            </div>
                        </div>
                    </div>
                </div>
                </div>




                    )}    
            </section>
        );

    }
}