import React from 'react';
import { Component } from 'react';
export default class Video extends Component {
    
    
    //renders about page with profile picture, about me sections, etc
    render() {
        
        return (
            <section id="video">
                <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Videos</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                            
                        </div>
                        
        <div>  
        <section id="card" class="cards">
                        <article className="card">
                        
                        <iframe id="reckless-video" width="560" height="315" src="https://www.youtube.com/embed/AXSlcBu1lss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                        </article>
                        
                        
                        <article className="card">
                        <iframe id="reckless-video" width="560" height="315" src="https://www.youtube.com/embed/S2V_DGyjzGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </article>

                        {/* <article className="card">
                            <img src={danny} alt="danny" id='danny' style={{marginLeft:"30px"}}/>
                        </article>

                        <article className="card">
                            <img src={joe} alt="joe" id='joe' style={{marginLeft:"30px"}}/>
                        </article>

                        <article className="card">
                            <img src={mikeg} alt="mikeg" id='mikeg' style={{marginLeft:"30px"}}/>
                        </article>
                        <article className="card">
                            <img src={crowd} alt="crowds" id='crowd' style={{marginLeft:"30px"}}/>
                        </article> */}

                
                
                </section>
                
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