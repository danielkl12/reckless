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


// function MusicPlayer() {
//   const initialTracks = [
//     { title: 'Track 1', source: 'public/music/American Band.mp3' },
//     { title: 'Track 2', source: 'path-to-track-2.mp3' },
//     // Add more tracks as needed
//   ];

//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

//   const playTrack = (index) => {
//     setCurrentTrackIndex(index);
//   };

//   return (
//     <div>
//       <h2>Music</h2>
//       <div className="playlist">
//         {initialTracks.map((track, index) => (
//           <div key={index} className="track">
//             <p onClick={() => playTrack(index)}>{track.title}</p>
//           </div>
//         ))}
//       </div>
//       <ReactAudioPlayer
//         src={initialTracks[currentTrackIndex].source}
//         autoPlay={false}
//         controls
//       />
//     </div>
//   );
// }

// export default MusicPlayer;
// import React, { useState, useRef, useCallback } from 'react';
// import ReactAudioPlayer from 'react-audio-player';

// function MusicPlayer() {
//   const initialTracks = [
//     { title: 'Track 1', source: 'public/music/American Band.mp3' },
//     { title: 'Track 2', source: 'path-to-track-2.mp3' },
//     // Add more tracks as needed
//   ];

//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

//   const playTrack = useCallback((index) => {
//     if (index >= 0 && index < initialTracks.length) {
//       setCurrentTrackIndex(index);
//     }
//   }, [initialTracks]);

//   const playNextTrack = useCallback(() => {
//     // Play the next track in the array
//     playTrack((currentTrackIndex + 1) % initialTracks.length);
//   }, [currentTrackIndex, playTrack, initialTracks.length]);

//   const audioRef = useRef(null);

//   return (
//     <div>
//       <h2>Music</h2>
//       <div className="playlist">
//         {initialTracks.map((track, index) => (
//           <div key={index} className="track">
//             <p onClick={() => playTrack(index)}>{track.title}</p>
//           </div>
//         ))}
//       </div>
//       <ReactAudioPlayer
//         key={currentTrackIndex}
//         ref={audioRef}
//         src={initialTracks[currentTrackIndex].source}
//         autoPlay={false}
//         controls
//         onEnded={playNextTrack}
//       />
//     </div>
//   );
// }

// export default MusicPlayer;