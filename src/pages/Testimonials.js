import '../App.css';
import React, { Component } from 'react';

export default class Testimonials extends Component {
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
            <section id="testimonials">
                {isDesktop ? (
                <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Testimonials</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                        ”Reckless at Tiffany's performed at our Wedding Reception and we couldn't have been happier to have them! The band was incredibly accommodating and professional as we planned for the event, and put on an absolutely awesome show that night. Our guests loved their energy and everyone had a great time on the dance floor. Would highly recommend this band to anyone planning an event!” <br></br><br></br>- Quin & Andy
                        <br></br><br></br><br></br>
                        "We had Reckless play at our wedding in July 2022. They were FANTASTIC. We never for one second thought to get a DJ for the wedding and it paid off. They played on the rooftop of our venue outside for 2+ hours. We still get people telling us how much fun they had. It was a private concert for our friends and family. Honestly, I wish we could do this once per year because it was the best night of our lives. Don't think about getting a DJ or any other cover band. Reckless is simply the BEST". <br></br><br></br>- Natalia & Andrew<br></br>
                        <br></br><br></br><br></br>
                        “We heard from so many people that Reckless was the best wedding band they had ever heard! The reception was one of our favorite parts of the day and we owe that in large part to Reckless! Thank you again!” <br></br><br></br>- Grace & Trent<br></br>
                        </div>
                        <br></br>
                        <div className="center-content">
   
    
  </div>

                        
         



                        

                        

                        
                    </div>
                </div>
                ) : (
                    <div className="testimonials-mobile">
                    <div className="row">
                    <div className="columns">

                        
                    </div>


                    <div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Testimonials</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                        ”Reckless at Tiffany's performed at our Wedding Reception and we couldn't have been happier to have them! The band was incredibly accommodating and professional as we planned for the event, and put on an absolutely awesome show that night. Our guests loved their energy and everyone had a great time on the dance floor. Would highly recommend this band to anyone planning an event!” <br></br><br></br>- Quin & Andy
                        <br></br><br></br><br></br>
                        "We had Reckless play at our wedding in July 2022. They were FANTASTIC. We never for one second thought to get a DJ for the wedding and it paid off. They played on the rooftop of our venue outside for 2+ hours. We still get people telling us how much fun they had. It was a private concert for our friends and family. Honestly, I wish we could do this once per year because it was the best night of our lives. Don't think about getting a DJ or any other cover band. Reckless is simply the BEST". <br></br><br></br>- Natalia & Andrew<br></br>
                        <br></br><br></br><br></br>
                        “We heard from so many people that Reckless was the best wedding band they had ever heard! The reception was one of our favorite parts of the day and we owe that in large part to Reckless! Thank you again!” - Grace & Trent
                        </div>
                        <br></br>
                        <div className="center-content">
   
    
  </div>

                        
         



                        

                        

                        
                    </div>
                </div>
                </div>




                    )}
            </section>
        );

    }
}