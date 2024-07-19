import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';

const Music = () => {
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

    return (
        <section id="music">
            <Helmet>
                <title>Music | Reckless at Tiffany's</title>
                <meta name="description" content="Listen to the music of Reckless at Tiffany's. Check out our SoundCloud for more tracks." />
            </Helmet>
            {isDesktop ? (
                <div className="row">
                    <div className="columns">
                        <div className="six columns main-col">
                            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Music</h2>
                            <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
                                Listen to the music of Reckless at Tiffany's. Check out our SoundCloud for more tracks.
                            </div>
                        </div>
                    </div>

                    <ReactPlayer
                        data-aos='fade-left'
                        style={{ opacity: '20px' }}
                        url="https://soundcloud.com/user-561841802"
                        width="100%"
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
                                <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
                                    Listen to the music of Reckless at Tiffany's. Check out our SoundCloud for more tracks.
                                </div>
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
