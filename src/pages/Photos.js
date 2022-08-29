import '../App.css';
import React, { Component } from 'react';
import dan from '../srcimages/dan.jpg'
import mike from '../srcimages/mike.jpg'
import danny from '../srcimages/danny.jpg'
import joe from '../srcimages/joe.jpg'
import mikeg from '../srcimages/mikeg.jpg'
import crowd from '../srcimages/crowd.jpg'

export default class Photos extends Component {

    
    
    //renders about page with profile picture, about me sections, etc
    render() {
        
        return (
            <section id="photos">
                <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Photos</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                            
                        </div>
                        
        <div>  
                <section id="card" class="cards">
                        <article className="card">
                        
                            <img src={dan} alt="dan" id='dan' style={{marginRight:"30px"}}/>
                        </article>
                        
                        
                        <article className="card">
                            <img src={mike} alt="mike" id='mike'/>
                        </article>

                        <article className="card">
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
                        </article>

                
                
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