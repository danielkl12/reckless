import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import privateevent from '../privateevent.pdf';
import wedding from '../wedding.pdf';

const About = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 900);
    };

    useEffect(() => {
        window.addEventListener('resize', updatePredicate);
        return () => {
            window.removeEventListener('resize', updatePredicate);
        };
    }, []);

    return (
        <section id="event">
            <Helmet>
                <title>Event Information - Reckless at Tiffany's</title>
                <meta name="description" content="Learn about Reckless at Tiffany's event information. Whether you’re looking to electrify the dance floor at your wedding or rock out at your next private or corporate event, Reckless At Tiffany’s has you covered!" />
                <link rel="canonical" href="http://www.recklessattiffanys.com/event" />
            </Helmet>
            <div className={isDesktop ? "row" : "event-mobile"}>
                <div className="columns"></div>
                <div className="six columns main-col">
                    <h2 data-aos="fade-in" style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>
                        Event Information
                    </h2>
                    <div data-aos="fade-in" data-aos-duration="2000" style={{ color: 'white', margin: '0 50px' }}>
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
        </section>
    );
};

export default About;
