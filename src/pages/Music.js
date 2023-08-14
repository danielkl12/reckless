import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Music = (props) => {
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
        <section id="music">
            {isDesktop ? (
                <div className="row">
                    <div className="columns">
                        <div className="six columns main-col">
                            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Music</h2>
                            <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}></div>
                        </div>
                    </div>

                    <ReactPlayer data-aos='fade-left'
                        style={{ opacity: '20px' }}
                        url="https://soundcloud.com/user-561841802"
                    />

                    <div className="row">
                        <div className="columns contact-details"></div>
                    </div>
                </div>
            ) : (
                <div className="music-mobile">
                    <div className="soundcloud-container">
                        <div className="columns">
                            <div className="six columns main-col">
                                <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Music</h2>
                                <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}></div>
                            </div>
                        </div>

                        <ReactPlayer
                            style={{ opacity: '20px' }}
                            url="https://soundcloud.com/user-561841802"
                            width="100%"
                        />

                        <div className="row">
                            <div className="columns contact-details"></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Music;