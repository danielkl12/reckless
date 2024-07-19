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

const App = () => {
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
                    <title>Reckless at Tiffany's - Minneapolis Cover Band</title>
                    <meta name="description" content="Reckless at Tiffany's - The premier Minneapolis cover band. Book your event today!" />
                    <link rel="canonical" href="http://www.recklessattiffanys.com" />
                    <meta property="og:title" content="Reckless at Tiffany's - Minneapolis Cover Band" />
                    <meta property="og:description" content="Reckless at Tiffany's - The premier Minneapolis cover band. Book your event today!" />
                    <meta property="og:url" content="http://www.recklessattiffanys.com" />
                    <meta property="og:image" content="http://www.recklessattiffanys.com/image.jpg" />
                    <meta property="og:type" content="website" />
                    <script type="application/ld+json">
                        {`
                            {
                                "@context": "https://schema.org",
                                "@type": "MusicGroup",
                                "name": "Reckless at Tiffany's",
                                "url": "http://www.recklessattiffanys.com",
                                "sameAs": [
                                    "https://www.facebook.com/recklessattiffanys",
                                    "https://www.instagram.com/recklessattiffanys"
                                ],
                                "image": "http://www.recklessattiffanys.com/image.jpg",
                                "description": "The premier cover band in Minneapolis. Book us for your next event!",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Minneapolis",
                                    "addressRegion": "MN",
                                    "postalCode": "55401",
                                    "addressCountry": "US"
                                }
                            }
                        `}
                    </script>
                </Helmet>

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
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
                            </>
                        }
                    />
                    {/* Add routes for other sections */}
                    <Route
                        path="/about"
                        element={
                            <>
                                <Helmet>
                                    <title>About | Reckless at Tiffany's</title>
                                    <meta name="description" content="Learn more about Reckless at Tiffany's, the premier Minneapolis cover band." />
                                    <link rel="canonical" href="http://www.recklessattiffanys.com/about" />
                                </Helmet>
                                <div className={isDesktop ? "App" : "mobile"}>
                                    <Navbar />
                                    <About />
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/testimonials"
                        element={
                            <>
                                <Helmet>
                                    <title>Testimonials | Reckless at Tiffany's</title>
                                    <meta name="description" content="Read testimonials about Reckless at Tiffany's from satisfied clients." />
                                    <link rel="canonical" href="http://www.recklessattiffanys.com/testimonials" />
                                </Helmet>
                                <div className={isDesktop ? "App" : "mobile"}>
                                    <Navbar />
                                    <Testimonials />
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/photos"
                        element={
                            <>
                                <Helmet>
                                    <title>Photos | Reckless at Tiffany's</title>
                                    <meta name="description" content="View photos of Reckless at Tiffany's performances." />
                                    <link rel="canonical" href="http://www.recklessattiffanys.com/photos" />
                                </Helmet>
                                <div className={isDesktop ? "App" : "mobile"}>
                                    <Navbar />
                                    <Photos />
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/music"
                        element={
                            <>
                                <Helmet>
                                    <title>Music | Reckless at Tiffany's</title>
                                    <meta name="description" content="Listen to music by Reckless at Tiffany's." />
                                    <link rel="canonical" href="http://www.recklessattiffanys.com/music" />
                                </Helmet>
                                <div className={isDesktop ? "App" : "mobile"}>
                                    <Navbar />
                                    <Music />
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/video"
                        element={
                            <>
                                <Helmet>
                                    <title>Videos | Reckless at Tiffany's</title>
                                    <meta name="description" content="Watch videos of Reckless at Tiffany's performances." />
                                    <link rel="canonical" href="http://www.recklessattiffanys.com/video" />
                                </Helmet>
                                <div className={isDesktop ? "App" : "mobile"}>
                                    <Navbar />
                                    <Video />
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <>
                                <Helmet>
                                    <title>Contact | Reckless at Tiffany's</title>
                                    <meta name="description" content="Contact Reckless at Tiffany's for bookings and inquiries." />
                                    <link rel="canonical" href="http://www.recklessattiffanys.com/contact" />
                                </Helmet>
                                <div className={isDesktop ? "App" : "mobile"}>
                                    <Navbar />
                                    <Contact />
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
