import React from "react";
import { Link } from "react-router-dom";
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'

const images = [
    { src: photo1, text: "Our first time in Chennai and the first time we spent my birthday together—a day full of new memories and happiness!" },
    { src: photo2, text: "Our first ever metro ride together—new experiences, endless memories!" },
    { src: photo3, text: "Cherishing the memories of our amazing Pondy trip together! 🌊✨" },
    { src: photo4, text: "Our first train journey together—every trip with you is special!" },
    { src: photo5, text: "Exploring Chennai together—another beautiful memory to cherish! 🏙️❤️" },
    { src: photo6, text: "A memorable bus ride from our college days" },
    { src: photo7, text: "Our very first outing during college days—where all the unforgettable memories began! 🎒❤️" }
];

const MemoryLane = () => {

    return (
        <>
            <div className="memory-lane-container">

                <div className="birthday-decorations">
                    <div className="balloon balloon-1"></div>
                    <div className="balloon balloon-2"></div>
                    <div className="balloon balloon-3"></div>

                   
                    <div className="confetti confetti-1"></div>
                    <div className="confetti confetti-2"></div>
                    <div className="confetti confetti-3"></div>

                   
                    <div className="sparkle sparkle-1"></div>
                    <div className="sparkle sparkle-2"></div>

                    
                    <div className="square sparkle-3"></div>
                    <div className="square sparkle-4"></div>
                    <div className="square sparkle-5"></div>

                    <div className="square-blue sparkle-6"></div>
                    <div className="square-blue sparkle-7"></div>
                    <div className="square-blue sparkle-8"></div>
                </div>



                <h2 className="title">Our Memory Lane</h2>
                <div className="memory-intro mt-4 mb-3">
                    <p className="subtitle">
                        A journey through the most incredible moments we've shared together. Hover over each photo to see why these memories mean so much to me!❤️
                    </p>
                </div>


                {/* Scrolling Gallery - Continuous Scroll */}
                <div className="memory-gallery mt-4">
                    <div className="scrolling-wrapper">
                        {[...images, ...images].map((item, index) => (
                            <div
                                key={index}
                                className="memory-item"
                                style={{ transform: `rotate(${index % 2 === 0 ? "-5deg" : "8deg"})` }}
                            >
                                <img src={item.src} alt="Memory" />
                                <div className="memory-text">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="memory-btn mt-4">
                    <Link to="/birthday" className="btn-surprise">
                        ✨ Next Surprise! ✨
                    </Link>

                </div>

            </div>


        </>
    );
};

export default MemoryLane;
