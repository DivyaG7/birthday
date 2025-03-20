import React from "react";
import { Link } from "react-router-dom";
import laali from '../assets/Laali Laali.mp3'
import mulumathy from '../assets/Mulumathy avalathu mugam aagum.mp3'
import munbe from '../assets/Munbe Vaa.mp3'
import song from '../assets/song.opus'

const songs = [
    { title: "Munbe vaa en anbe vaa", src: munbe },
    { title: "Laali Laali Chinna Chinna Kannasaivil", src: laali },
    { title: "Mulumathy avalathu mugam aagum", src: mulumathy },
    { title: "Kannukoru vannakuyil", src: song },
];

const SongsPage = () => {
    return (
        <>
            <section className="song">
                <div className="songs-container">
                    <h1>🎶 Your Special Surprise! 💖</h1>
                    <p className="sub-heading">Songs That Remind Me of Us 💕</p>
                    <div className="songs-box">
                        {songs.map((song, index) => (
                            <div key={index} className="song-item">
                                <p className="song-title">{song.title}</p>
                                <audio controls className="audio-player">
                                    <source src={song.src} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="back-btn mt-4">
                    <Link to="/" className="btn-back">
                        Back to Home
                    </Link>
                </div>
            </section>
        </>
    );
};

export default SongsPage;
