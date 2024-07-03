import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'animate.css';
import './App.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Photos from './pages/Photos';
import Music from './pages/Music';
import Video from './pages/Video';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = (props) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 900);
    };

    useEffect(() => {
        Aos.init({ duration: 650, once: true });
        window.addEventListener('resize', updatePredicate);
        return () => {
            window.removeEventListener('resize', updatePredicate);
        };
    }, []);

    return (
        <Router>
            <div>
                <Helmet>
                    <title>Reckless at Tiffany's</title>
                    <meta name="description" content="Reckless at Tiffany's - The premier Minneapolis cover band. Book your event today!" />
                    <link rel="canonical" href="http://www.recklessattiffanys.com" />
                </Helmet>

                <Routes>
                    <Route exact path="/">
                        <Helmet>
                            <title>Home | Reckless at Tiffany's</title>
                            <meta name="description" content="Welcome to Reckless at Tiffany's, the premier Minneapolis cover band. Book your event today!" />
                            <link rel="canonical" href="http://www.recklessattiffanys.com" />
                        </Helmet>
                        <div className={isDesktop ? "App" : "mobile"}>
                            <Navbar />
                            <About />
                            <Contact />
                            <Testimonials />
                            <Photos />
                            <Music />
                            <Video />
                            <Footer />
                        </div>
                    </Route>
                    {/* Add routes for other sections */}
                    <Route path="/about">
                        <Helmet>
                            <title>About | Reckless at Tiffany's</title>
                            <meta name="description" content="Learn more about Reckless at Tiffany's, the premier Minneapolis cover band." />
                            <link rel="canonical" href="http://www.recklessattiffanys.com" />
                        </Helmet>
                        <div className={isDesktop ? "App" : "mobile"}>
                            <Navbar />
                            <About />
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/testimonials">
                        <Helmet>
                            <title>Testimonials | Reckless at Tiffany's</title>
                            <meta name="description" content="Read testimonials about Reckless at Tiffany's from satisfied clients." />
                            <link rel="canonical" href="http://www.recklessattiffanys.com" />
                        </Helmet>
                        <div className={isDesktop ? "App" : "mobile"}>
                            <Navbar />
                            <Testimonials />
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/photos">
                        <Helmet>
                            <title>Photos | Reckless at Tiffany's</title>
                            <meta name="description" content="View photos of Reckless at Tiffany's performances." />
                            <link rel="canonical" href="http://www.recklessattiffanys.com" />
                        </Helmet>
                        <div className={isDesktop ? "App" : "mobile"}>
                            <Navbar />
                            <Photos />
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/music">
                        <Helmet>
                            <title>Music | Reckless at Tiffany's</title>
                            <meta name="description" content="Listen to music by Reckless at Tiffany's." />
                            <link rel="canonical" href="http://www.recklessattiffanys.com" />
                        </Helmet>
                        <div className={isDesktop ? "App" : "mobile"}>
                            <Navbar />
                            <Music />
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/video">
                        <Helmet>
                            <title>Videos | Reckless at Tiffany's</title>
                            <meta name="description" content="Watch videos of Reckless at Tiffany's performances." />
                            <link rel="canonical" href="http://www.recklessattiffanys.com" />
                        </Helmet>
                        <div className={isDesktop ? "App" : "mobile"}>
                            <Navbar />
                            <Video />
                            <Footer />
                        </div>
                    </Route>
                    <Route path="/contact">
                        <Helmet>
                            <title>Contact | Reckless at Tiffany's</title>
                            <meta name="description" content="Contact Reckless at Tiffany's for bookings and inquiries." />
                            <link rel="canonical" href="http://www.recklessattiffanys.com" />
                        </Helmet>
                        <div className={isDesktop ? "App" : "mobile"}>
                            <Navbar />
                            <Contact />
                            <Footer />
                        </div>
                    </Route>
                </Routes>
            </div>
            </Router>
    );
}

export default App;