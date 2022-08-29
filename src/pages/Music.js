// import React, {Page} from 'react';
import { Component } from 'react';
export default class Music extends Component {
    render() {
        let portfolioData = this.props.portfolioData;
        return(
            <section id="music">
                <div className="row">
                    <div className="four columns collapsed">
                        
                        <div id="portfolio-wrapper" className="grid">
                            {
                                portfolioData.portfolio && portfolioData.portfolio.map((item) => {
                                    return(
                                        <div className="columns portfolio-item">
                                            <div className="wrap">
                                            <img src={`${item.imgurl}`} className="item-img" alt=""/>
                                            <div className="overlay">
                                                <div className="portfolio-item">
                                                    <h4>{item.name}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                            
                                                
                                                
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </section>
        )
    }
}