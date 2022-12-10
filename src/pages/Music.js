// import React, {Page} from 'react';
import ReactPlayer from "react-player"
import { Component } from 'react';
export default class Music extends Component {
    
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

    render() {
        let portfolioData = this.props.portfolioData;
        const isDesktop = this.state.isDesktop;
        
        return(
            <section id="music">
                {isDesktop ? (
                <div className="row">
                    <div className="columns">
                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Music</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                            
                        </div>

                        
                    </div>
                    </div>


                    
                <ReactPlayer style={{opacity:"20px"}}
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
                ) : (
                    <div className="music-mobile">
                    
                    <div className="row">
                    <div className="columns">
                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Music</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                            
                        </div>

                        
                    </div>
                    </div>


                 <div className="player-wrapper">
                <ReactPlayer style={{opacity:"20px"}}
        url="https://soundcloud.com/user-561841802"
        width="100%"
        
                                                    /></div>  
                       

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
                
                
                )}
            </section>
            



 
                        
  )
        }  }

