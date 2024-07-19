import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

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

  const desktopVideos = [
    { src: "https://www.youtube.com/embed/AXSlcBu1lss", style: { marginRight: '5px', marginBottom: '10px' } },
    { src: "https://www.youtube.com/embed/S2V_DGyjzGM", style: { marginLeft: '5px' } }
  ];

  const mobileVideos = [
    { src: "https://www.youtube.com/embed/AXSlcBu1lss", style: { marginRight: '5px', marginBottom: '10px' } },
    { src: "https://www.youtube.com/embed/S2V_DGyjzGM", style: { marginLeft: '5px', marginBottom: '15px' } }
  ];

  const renderVideos = (videos, width, height) => (
    <section id="card" className="cards">
      {videos.map((video, index) => (
        <article key={index} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} className="card">
          <iframe
            id="reckless-video"
            width={width}
            height={height}
            style={video.style}
            src={video.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
      ))}
    </section>
  );

  return (
    <section id="video">
      <Helmet>
        <title>Reckless at Tiffany's | Videos</title>
        <meta name="description" content="Watch the latest videos of Reckless at Tiffany's, the premier Minneapolis cover band." />
        <link rel="canonical" href="http://www.recklessattiffanys.com/videos" />
        <meta property="og:title" content="Reckless at Tiffany's | Videos" />
        <meta property="og:description" content="Watch the latest videos of Reckless at Tiffany's, the premier Minneapolis cover band." />
        <meta property="og:url" content="http://www.recklessattiffanys.com/videos" />
        <meta property="og:image" content="http://www.recklessattiffanys.com/og-image.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {isDesktop ? (
        <div className="row">
          <div className="columns"></div>
          <div className="six columns main-col">
            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Videos</h2>
            <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}></div>
            {renderVideos(desktopVideos, 540, 295)}
          </div>
        </div>
      ) : (
        <div className="video-mobile">
          <div className="row">
            <div className="columns"></div>
            <div className="six columns main-col">
              <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'squealer' }}>Videos</h2>
              <div style={{ color: 'white', marginLeft: '50px', marginRight: '50px' }}></div>
              {renderVideos(mobileVideos, 380, 195)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
