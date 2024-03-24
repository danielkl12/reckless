import React, { useState, useEffect } from 'react';
import '../App.css';

const About = (props) => {
    const [isDesktop, setIsDesktop] = useState(false);

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 900);
    };

    useEffect(() => {
        updatePredicate();
        window.addEventListener('resize', updatePredicate);
        return () => {
            window.removeEventListener('resize', updatePredicate);
        };
    }, []);

    // let portfolioData = props.portfolioData;

    return (
        <section id="about">
            {isDesktop ? (
                <div className="row">
                    <div className="columns"></div>

                    <div className="six columns main-col">
                        <h2 data-aos="fade-in" style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>
                            About Reckless at Tiffany's
                        </h2>
                        <div data-aos-duration="2000" data-aos="fade-in" style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
                            Reckless at Tiffany's is a cover band based out of Minneapolis, Minnesota. Started in 2015 at the
                            University of St. Thomas, Reckless at Tiffany's has gone on to play all around the Twin Cities metro
                            area and beyond. Book your wedding or private event today!
                        </div>

                        <p></p>

                        <div className="row">
                            <div className="columns contact-details"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="about-mobile">
                    <div className="row">
                        <div className="columns"></div>

                        <div className="six columns main-col">
                            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>
                                About Reckless at Tiffany's
                            </h2>
                            <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
                                Reckless at Tiffany's is a cover band based out of Minneapolis, Minnesota. Started in 2015 at the
                                University of St. Thomas, Reckless at Tiffany's has gone on to play all around the Twin Cities metro
                                area and beyond. Book your wedding or private event today!
                            </div>

                            <div className="row">
                                <div className="columns contact-details"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;