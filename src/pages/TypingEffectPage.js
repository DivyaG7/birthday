import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const TypingEffectPage = () => {
    const text = "🎉 Happy Birthday, Mama! 💖 From the moment you came into my life, everything changed in the most beautiful way. Every laugh we share, every moment we spend together, and every memory we create fills my life with happiness I never knew was possible. You are the light that brightens my darkest days, the warmth that comforts my soul, and the love that makes my heart feel full. No matter where life takes us, I promise to always stand by your side, holding your hand through every high and low.Thank you for being you—your kindness, your laughter, and your love make my world a better place. I love you more than words can express, and I will cherish you always. 💖 On this special day, I want to remind you how incredibly loved and cherished you are. May this year bring you as much happiness as you bring into my life. I’m so grateful to walk this journey with you, to celebrate you, and to love you always.";
    const [displayedText, setDisplayedText] = useState("");
    const indexRef = useRef(0); // Use ref to track index properly

    useEffect(() => {
        setDisplayedText(""); // Reset text before typing starts
        indexRef.current = 0;  // Reset index

        const typeText = () => {
            if (indexRef.current < text.length) {
                setDisplayedText(text.slice(0, indexRef.current + 1)); // Slice prevents duplication
                indexRef.current++;
                setTimeout(typeText, 100); // Controls typing speed
            }
        };

        typeText(); // Start typing effect

    }, []); // Runs only once


    return (
        <>
            <div className="typing-container">
                <h1>For My Dearest Husband✨</h1>
                <div className="text-box mt-4 mb-4">{displayedText}</div>
                {/* Falling Stars */}
                <div className="stars-container">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="star"></div>
                    ))}
                </div>

                <div className="message-btn mt-4">
                    <Link to="/song" className="btn-message">
                        Click for a Surprise!🎁
                    </Link>
                </div>



                {/* White Growing Hearts */}
                <div className="growing-heart" style={{ top: "50%", left: "10%" }}>🤍</div>
                <div className="growing-heart" style={{ top: "23%", left: "78%" }}>🤍</div>
                <div className="growing-heart" style={{ top: "80%", left: "30%" }}>🤍</div>
            </div>



        </>
    );
};

export default TypingEffectPage;


