import React, { useState, useEffect } from 'react';
import '../App.css';
import privateevent from './privateevent.pdf';
import wedding from './wedding.pdf';

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
        <section id="event">
            {isDesktop ? (
                <div className="row">
                    <div className="columns"></div>

                    <div  className="six columns main-col">
                        <h2 data-aos="fade-in" style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Event Information</h2>
                        <div data-aos="fade-in" data-aos-duration="2000" style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
                            Whether you’re looking to electrify the dance floor at your wedding or rock out at your next
                            private/corporate event, Reckless At Tiffany’s has you covered!
                        </div>

                        <div data-aos="fade-in" data-aos-duration="2000" className="center-content">
                            <a
                                href={wedding}
                                className="book-event"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    marginBottom: '10px',
                                    marginTop: '20px',
                                    backgroundColor: 'black',
                                    borderRadius: '5px',
                                    opacity: '60%',
                                }}
                            >
                                Wedding Info
                            </a>
                            <a
                                href={privateevent}
                                className="book-event"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: 'black', borderRadius: '5px', opacity: '60%' }}
                            >
                                Private Event Info
                            </a>
                        </div>

                        <div className="row">
                            <div className="columns contact-details"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="event-mobile">
                    <div className="row">
                        <div className="columns"></div>

                        <div className="six columns main-col">
                            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Event Information</h2>
                            <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
                                Whether you’re looking to electrify the dance floor at your wedding or rock out at your next
                                private/corporate event, Reckless At Tiffany’s has you covered!
                            </div>

                            <div className="center-content">
                                <a
                                    href={wedding}
                                    className="book-event"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        marginBottom: '10px',
                                        marginTop: '20px',
                                        backgroundColor: 'black',
                                        borderRadius: '5px',
                                        opacity: '60%',
                                    }}
                                >
                                    Wedding Info
                                </a>
                                <a
                                    href={privateevent}
                                    className="book-event"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ backgroundColor: 'black', borderRadius: '5px', opacity: '60%' }}
                                >
                                    Private Event Info
                                </a>
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