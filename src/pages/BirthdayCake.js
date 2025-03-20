import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BirthdayCake = () => {
    const totalCandles = 5;
    const [candles, setCandles] = useState(Array(totalCandles).fill(true));
    const [showPopup, setShowPopup] = useState(false);

    const blowCandle = (index) => {
        const newCandles = [...candles];
        newCandles[index] = false;
        setCandles(newCandles);

        if (newCandles.every((candle) => !candle)) {
            setTimeout(() => setShowPopup(true), 500);
        }
    };

    useEffect(() => {
        const createSparkle = () => {
            console.log("Creating a sparkle..."); // Debug log
            let sparkle = document.createElement("span");
            sparkle.className = "square-sparkle";
            sparkle.style.left = Math.random() * 100 + "vw";
            sparkle.style.top = Math.random() * -10 + "vh";
            sparkle.style.animationDuration = Math.random() * 4 + 4 + "s";
            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 7000);
        };

        console.log("Starting sparkle effect..."); // Debug log

        const interval = setInterval(createSparkle, 500);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className="birthday-container">
            {/* Square Sparkles Background */}
            <div className="falling-sparkles"></div>

            {/* Square Cake with Candles */}
            <div className="square-cake">
                <div className="top-layer"></div>
                <div className="middle-layer"></div>
                <div className="bottom-layer"></div>

                <div className="candles">
                    {candles.map((lit, index) => (
                        <div
                            key={index}
                            className={`candle ${lit ? "lit" : "blown-out"}`}
                            onClick={() => blowCandle(index)}
                        >
                            {lit && <div className="flame"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="popup">
                    <h2>💗 Happy Birthday! 💗</h2>
                    <p>Make a wish! May all your dreams come true!🎂✨</p>
                    {/* <button onClick={() => setShowPopup(false)}>Thank You! ❤️</button> */}
                    <Link to='/message'><button>Next Surprise!❤️</button></Link>
                </div>
            )}
            
        </div>
    );
};

export default BirthdayCake;
