
import React, { useState, useEffect } from 'react';
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
        Aos.init({duration: 650,
          once: true});
        document.title = 'Daniel Klauer';

        window.addEventListener('resize', updatePredicate);
        return () => {
            window.removeEventListener('resize', updatePredicate);
        };
    }, []);

    
  
  
  return (
    <div>
    { isDesktop ? (
    <div className="App">
      <Navbar/>
      <About/>
      <Contact/>
      <Testimonials/>
      {/* <Gallery/> */}
      <Photos/>
      <Music/>
      <Video/>
      <Footer/>
      </div>
    ) : (
      <div className="mobile">
      <Navbar/>
      <About/>
      <Contact/>
      <Testimonials/>
      <Music/>
      {/* <Gallery/> */}
      <Video/>
      <Footer/>

      </div>
    )}
    </div>
    
    
  );
  }


export default App;



                