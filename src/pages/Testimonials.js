import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

const Testimonials = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

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

  const testimonials = [
    {
      text: "Reckless at Tiffany's performed at our Wedding Reception and we couldn't have been happier to have them! The band was incredibly accommodating and professional as we planned for the event, and put on an absolutely awesome show that night. Our guests loved their energy and everyone had a great time on the dance floor. Would highly recommend this band to anyone planning an event!",
      author: 'Quin & Andy',
    },
    {
      text: "We had Reckless play at our wedding in July 2022. They were FANTASTIC. We never for one second thought to get a DJ for the wedding and it paid off. They played on the rooftop of our venue outside for 2+ hours. We still get people telling us how much fun they had. It was a private concert for our friends and family. Honestly, I wish we could do this once per year because it was the best night of our lives. Don't think about getting a DJ or any other cover band. Reckless is simply the BEST.",
      author: 'Natalia & Andrew',
    },
    {
      text: "We heard from so many people that Reckless was the best wedding band they had ever heard! The reception was one of our favorite parts of the day and we owe that in large part to Reckless! Thank you again!",
      author: 'Grace & Trent',
    },
    {
      text: "Everyone commented how much fun and how talented the band was, and they haven’t been at a wedding that was that high of energy with that many people dancing until the end. We appreciated how flexible you guys were with mixing in karaoke, letting Danny play guitar with you and how perfect the set list was.",
      author: 'Danny & Katie',
    },
  ];

  return (
    <section id="testimonials">
      <Helmet>
        <title>Reckless at Tiffany's | Testimonials</title>
        <meta name="description" content="Read testimonials from satisfied clients who have experienced the energetic performances of Reckless at Tiffany's, the premier Minneapolis cover band." />
        <link rel="canonical" href="http://www.recklessattiffanys.com/testimonials" />
        <meta property="og:title" content="Reckless at Tiffany's | Testimonials" />
        <meta property="og:description" content="Read testimonials from satisfied clients who have experienced the energetic performances of Reckless at Tiffany's, the premier Minneapolis cover band." />
        <meta property="og:url" content="http://www.recklessattiffanys.com/testimonials" />
        <meta property="og:image" content="http://www.recklessattiffanys.com/og-image.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {isDesktop ? (
        <div className="row">
          <div className="columns"></div>
          <div className="six columns main-col">
            <h2 data-aos="fade-in" style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Testimonials</h2>
            <div data-aos="fade-in" data-aos-duration="2000" style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <p>”{testimonial.text}”</p>
                  <p>- {testimonial.author}</p>
                  <br />
                </div>
              ))}
            </div>
            <br />
            <div className="center-content"></div>
          </div>
        </div>
      ) : (
        <div className="testimonials-mobile">
          <div className="row">
            <div className="columns"></div>
            <div className="six columns main-col">
              <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Testimonials</h2>
              <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div key={index}>
                    <p>”{testimonial.text}”</p>
                    <p>- {testimonial.author}</p>
                    <br />
                  </div>
                ))}
              </div>
              <br />
              <div className="center-content"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
