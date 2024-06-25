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
        <div>
            <Helmet>
                <title>Your Site Title</title>
                <link rel="canonical" href="https://www.example.com" />
                <meta name="description" content="Your site description" />
                {/* Add other meta tags as needed */}
            </Helmet>
            {isDesktop ? (
                <div className="App">
                    <Navbar />
                    <About />
                    <Contact />
                    <Testimonials />
                    <Photos />
                    <Music />
                    <Video />
                    <Footer />
                </div>
            ) : (
                <div className="mobile">
                    <Navbar />
                    <About />
                    <Contact />
                    <Testimonials />
                    <Music />
                    {/* <Photos /> */}
                    <Video />
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default App;
