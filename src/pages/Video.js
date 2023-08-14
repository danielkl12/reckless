import React, { useState, useEffect } from 'react';

const Video = () => {
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
    <section id="video">
      {isDesktop ? (
        <div className="row">
          <div className="columns"></div>

          <div className="six columns main-col">
            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Videos</h2>
            <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}></div>

            <div>
              <section  id="card" className="cards">
                <article data-aos='fade-right' className="card">
                  <iframe
                    id="reckless-video"
                    width="540"
                    height="295"
                    style={{ marginRight: '5px', marginBottom: '10px' }}
                    src="https://www.youtube.com/embed/AXSlcBu1lss"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </article>

                <article data-aos='fade-left' className="card">
                  <iframe
                    id="reckless-video"
                    width="540"
                    height="295"
                    style={{ marginLeft: '5px' }}
                    src="https://www.youtube.com/embed/S2V_DGyjzGM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </article>
              </section>
            </div>

            <div className="row">
              <div className="columns contact-details"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="video-mobile">
          <div className="row">
            <div className="columns"></div>

            <div className="six columns main-col">
              <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Videos</h2>
              <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}></div>

              <div>
                <section id="card" className="cards">
                  <article className="card">
                    <iframe
                      id="reckless-video"
                      width="380"
                      height="195"
                      style={{ marginRight: '5px', marginBottom: '10px' }}
                      src="https://www.youtube.com/embed/AXSlcBu1lss"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </article>

                  <article className="card">
                    <iframe
                      id="reckless-video"
                      width="380"
                      height="195"
                      style={{ marginLeft: '5px', marginBottom: '15px' }}
                      src="https://www.youtube.com/embed/S2V_DGyjzGM"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </article>
                </section>
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

export default Video;