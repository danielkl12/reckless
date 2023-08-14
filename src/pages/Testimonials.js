import React, { useState, useEffect } from 'react';

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

  return (
    <section id="testimonials">
      {isDesktop ? (
        <div className="row">
          <div className="columns"></div>

          <div  className="six columns main-col">
            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Testimonials</h2>
            <div data-aos="fade-in" data-aos-duration="2000" style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}>
              ”Reckless at Tiffany's performed at our Wedding Reception and we couldn't have been happier to have them! The band was incredibly accommodating and professional as we planned for the event, and put on an absolutely awesome show that night. Our guests loved their energy and everyone had a great time on the dance floor. Would highly recommend this band to anyone planning an event!”
              <br />
              <br />
              - Quin & Andy
              <br />
              <br />
              <br />
              "We had Reckless play at our wedding in July 2022. They were FANTASTIC. We never for one second thought to get a DJ for the wedding and it paid off. They played on the rooftop of our venue outside for 2+ hours. We still get people telling us how much fun they had. It was a private concert for our friends and family. Honestly, I wish we could do this once per year because it was the best night of our lives. Don't think about getting a DJ or any other cover band. Reckless is simply the BEST".
              <br />
              <br />
              - Natalia & Andrew
              <br />
              <br />
              <br />
              “We heard from so many people that Reckless was the best wedding band they had ever heard! The reception was one of our favorite parts of the day and we owe that in large part to Reckless! Thank you again!”
              <br />
              <br />
              - Grace & Trent
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
                ”Reckless at Tiffany's performed at our Wedding Reception and we couldn't have been happier to have them! The band was incredibly accommodating and professional as we planned for the event, and put on an absolutely awesome show that night. Our guests loved their energy and everyone had a great time on the dance floor. Would highly recommend this band to anyone planning an event!”
                <br />
                <br />
                - Quin & Andy
                <br />
                <br />
                <br />
                "We had Reckless play at our wedding in July 2022. They were FANTASTIC. We never for one second thought to get a DJ for the wedding and it paid off. They played on the rooftop of our venue outside for 2+ hours. We still get people telling us how much fun they had. It was a private concert for our friends and family. Honestly, I wish we could do this once per year because it was the best night of our lives. Don't think about getting a DJ or any other cover band. Reckless is simply the BEST".
                <br />
                <br />
                - Natalia & Andrew
                <br />
                <br />
                <br />
                “We heard from so many people that Reckless was the best wedding band they had ever heard! The reception was one of our favorite parts of the day and we owe that in large part to Reckless! Thank you again!”
                <br />
                <br />
                - Grace & Trent
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